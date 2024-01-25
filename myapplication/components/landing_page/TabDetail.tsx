import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Movie } from "@/pages/movie-detail/Models/Movies";
import RenderActress from "@/pages/movie-detail/ListComponent/RenderActress";
import RenderReview from "@/pages/movie-detail/ListComponent/RenderReview";
import RenderImages from "@/pages/movie-detail/ListComponent/RenderImages";
import { CardMedia, Link, Stack } from "@mui/material";
import config from "@/config";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { CircularProgress } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1} sx={{ textAlign: "left", color: "#FFF" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function TabDetail() {
  const [openDialog, setOpenDialog] = useState(false); // Set to false initially
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useSWR<Movie>(
    `/movie/${id}?language=en-US&append_to_response=videos,credits,reviews`
  );
  const { data: similarMovies, isLoading: similarLoading, error: similarError } = useSWR(
    `/movie/${id}/similar?language=en-US`
  );
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const toggleDialog = () => {
    setOpenDialog(!openDialog);
  };

  const renderStarIcons = (voteAverage: number) => {
    const stars = [];
    const rating = voteAverage * 0.5;
    const roundedRating = Math.round(rating);

    for (let i = 1; i <= 5; i++) {
      if (i <= roundedRating) {
        stars.push(<StarIcon key={i} sx={{ fontSize: 24, color: "orange" }} />);
      } else {
        stars.push(<StarOutlineIcon key={i} sx={{ fontSize: 24, color: "orange" }} />);
      }
    }

    return stars;
  };
  const { data: movieGenres, error: genreError } = useSWR(`/genre/movie/list?language=en-US`);

  if (genreError) {
    console.error("Failed to fetch movie genres:", genreError);
  }

  if (!movieGenres) {
    return null;
  }

  const getGenreNameById = (genreId: number) => {
    const genre = movieGenres.genres.find((g) => g.id === genreId);
    return genre ? genre.name : "Unknown Genre";
  };

  return (
    <Box sx={{ width: "100%", paddingLeft: "10px", paddingRight: "10px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ "& .MuiTabs-indicator": { backgroundColor: "#3A3F47" } }}
        >
          <Tab
            label="About Movie"
            {...a11yProps(0)}
            style={{
              color: "white",
              textTransform: "none",
              fontFamily: "YourCustomFont, sans-serif",
            }}
          />
          <Tab
            label="Reviews"
            {...a11yProps(1)}
            style={{
              color: "white",
              textTransform: "none",
              fontFamily: "YourCustomFont, sans-serif",
            }}
          />
          <Tab
            label="Cast"
            {...a11yProps(2)}
            style={{
              color: "white",
              textTransform: "none",
              fontFamily: "YourCustomFont, sans-serif",
            }}
          />

        </Tabs>

        <IconButton onClick={toggleDialog} sx={{ color: "white", display: "flex", alignItems: "center" }}>
          <Box sx={{ paddingLeft: "8px", marginRight: "8px", fontFamily: "YourCustomFont, sans-serif", fontSize: "18px" }}>
            Introduce
          </Box>
          <ArrowCircleRightIcon />
        </IconButton>
      </Box>

      <Dialog open={openDialog} onClose={toggleDialog}>
        <DialogContent>
          <Box sx={{ fontSize: "1.5rem", height: "50px" }}>Introduce</Box>
          <Box>{`Movie Title: ${data?.overview}`}</Box>
        </DialogContent>
      </Dialog>

      <CustomTabPanel value={value} index={0}>
        <RenderImages id={id}></RenderImages>
        {similarLoading ? (
          <CircularProgress />
        ) : (
          <Stack direction="column" spacing={2} sx={{ mt: 5, ml: 1 }}>
            <Typography sx={{ color: "white", fontFamily: "YourCustomFont, sans-serif" }}>
              Related Movies
            </Typography>
            {similarLoading ? (
              <CircularProgress />
            ) : (
              <Stack direction="column" spacing={2}>
                {similarMovies?.results?.map((similarMovie) => (
                  <Link key={similarMovie.id} href={`/movie-detail/${similarMovie.id}`} underline="none">
                    <Box sx={{
                      display: "flex", flexDirection: "row", alignItems: "center", fontSize: "8px",
                      borderBottom: "2px solid #888",
                      color: "white",
                      paddingTop: "20px",
                      paddingBottom: "20px",
                      borderRadius: "4px",
                      fontFamily: "YourCustomFont, sans-serif",
                      transition: "border-color 0.3s",
                      '&:hover': {
                        borderColor: "#fff",
                        backgroundColor: "#333",
                      },
                    }}>
                      <Box sx={{ width: "170px" }}>
                        <CardMedia
                          style={{ borderRadius: "12px" }}
                          component="img"
                          alt={similarMovie.title}
                          height="140"
                          image={similarMovie.backdrop_path
                            ? config.image_path + similarMovie.backdrop_path
                            : "/nomovie.jpg"}
                        />
                      </Box>
                      <Box sx={{ flex: 1, pl: 2 }}>
                        <Typography sx={{ color: "white", fontFamily: "YourCustomFont, sans-serif", fontSize: "14px" }}>
                          {similarMovie.title}
                        </Typography>
                        <Stack direction="row" alignItems="center" spacing={1} >
                          <Box
                            sx={{
                              color: "#92929D",
                              display: "flex",
                              flexDirection: "row",
                              flexWrap: "wrap",
                            }}
                          >
                            {similarMovie.genre_ids?.slice(0, 2).map((genreId) => (
                              <Link key={genreId.toString()} href={`/geners/${genreId}`} underline="none">
                                <Box
                                  sx={{
                                    fontSize: "8px",
                                    border: "2px solid #888",
                                    color: "white",
                                    padding: "4px 8px",
                                    borderRadius: "4px",
                                    marginRight: "8px",
                                    marginTop: "4px",

                                    fontFamily: "YourCustomFont, sans-serif"
                                  }}
                                >
                                  {getGenreNameById(genreId)}
                                </Box>
                              </Link>
                            ))}
                          </Box>
                        </Stack>
                        <Box sx={{ paddingTop: "6px" }}>
                          {renderStarIcons(similarMovie.vote_average)}
                        </Box>
                      </Box>
                    </Box>
                  </Link>
                ))}
              </Stack>
            )}
          </Stack>
        )}
      </CustomTabPanel>



      <CustomTabPanel value={value} index={1}>
        <div style={{ fontFamily: "YourCustomFont, sans-serif", fontSize: "14px" }}>
          <RenderReview data={data?.reviews.results}></RenderReview>
        </div>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <div style={{ fontFamily: "YourCustomFont, sans-serif", fontSize: "14px" }}>
          <RenderActress data={data?.credits.cast}></RenderActress>
        </div>
      </CustomTabPanel>



      <Box sx={{ height: "30px" }} />
    </Box >
  );
}

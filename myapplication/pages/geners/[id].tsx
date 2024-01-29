import React, { useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import axios from "axios";
import { MovieList } from "../movie-detail/Models/Movies";
import { ListGenre } from "../movie-detail/Models/Geners";
import NavGenres from "@/components/landing_page/NavGenres";
import {
  Box,
  CircularProgress,
  Typography,
  Button,
  Popover,
  Grid,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NextPageWithLayout } from "../_app";
import { initializeTraceState } from "next/dist/trace";

const Categories: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  const [selectedGenre, setSelectedGenre] = useState(0);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleGenreSelect = (genreId: number) => {
    setSelectedGenre(genreId);
    handleMenuClose();
  };

  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);
  const { data, isLoading, error } = useSWR<MovieList>(
    "/movie/now_playing",
    fetcher
  );

  const { data: gener } = useSWR<ListGenre>(
    "genre/movie/list?language=en&page=3",
    fetcher
  );
  const movieGener = data?.results.filter((movie) =>
    movie.genre_ids.includes(
      selectedGenre != 0 ? selectedGenre : parseInt(id as string)
    )
  );

  if (isLoading) {
    return <Typography>{isLoading && <CircularProgress />}</Typography>;
  }

  if (error) {
    return <Typography sx={{ color: "red" }}>Error</Typography>;
  }

  if (!data) {
    return <>Không có dữ liệu</>;
  }

  return (
    <>
      <NavGenres
        handleMenuOpen={handleMenuOpen}
        gener={gener}
        selectedGenre={selectedGenre}
        handleGenreSelect={handleGenreSelect}
      />
      <Box
        sx={{
          color: "#92929D",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          backgroundColor: "",
          padding: "6px",
        }}
      >
        <Button
          onClick={handleMenuOpen}
          sx={{ display: "flex", alignItems: "center", color: "white" }}
        >
          Thể loại <KeyboardArrowDownIcon />
        </Button>

        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          PaperProps={{
            style: {
              backgroundColor: "#242A32",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              padding: "6px",
            }}
          >
            {gener?.genres.map((genre) => (
              <Box
                key={genre.id.toString()}
                sx={{
                  border: "2px solid #888",
                  padding: "4px 8px",
                  borderRadius: "2px",
                  marginRight: "8px",
                  marginTop: "10px",
                  backgroundColor:
                    selectedGenre == genre.id ? "#4a92ff" : "transparent",
                  color: selectedGenre == genre.id ? "white" : "#949494",
                  "&:hover": {
                    backgroundColor: "#4a92ff",
                    cursor: "pointer",
                  },
                }}
                onClick={() => {
                  setSelectedGenre(genre.id);
                  handleMenuClose();
                }}
              >
                {genre.name}
              </Box>
            ))}
          </Box>
        </Popover>
      </Box>
      <Typography
        sx={{
          color: "white",
          fontSize: "18px",
          textAlign: "center",
          padding: "10px",
          backgroundColor: "#161722",
          borderRadius: "0px",
          fontWeight: "bold",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Selected:
        {
          gener?.genres.find(
            (tl) => tl.id == (selectedGenre != 0 ? selectedGenre : id)
          )?.name
        }
      </Typography>
      <Box sx={{ padding: "6px", textAlign: "center" }}>
        <Grid container spacing={3}>
          {movieGener?.map((movie, index) => (
            <Grid item xs={4} sm={3} md={4} key={index}>
              <RenderMovie data={movie} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Categories;

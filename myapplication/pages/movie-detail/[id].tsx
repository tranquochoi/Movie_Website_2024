import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Layout from "@/components/landing_page/layout";
import NavDetail from "@/components/landing_page/NavDetail";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import {
  Box,
  CardMedia,
  CircularProgress,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { format } from "date-fns";
import { Movie } from "./Models/Movies";
import config from "@/config";
import { NextPageWithLayout } from "../_app";
import { TabDetail } from "@/components/landing_page/TabDetail";
import FavoriteIcon from "@/components/movie/FavoriteIcon";

const Detail: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useSWR<Movie>(
    `/movie/${id}?language=en-US&append_to_response=videos,credits`
  );

  if (isLoading) {
    return (
      <Typography fontSize={"250px"} textAlign={"center"}>
        {isLoading && <CircularProgress />}
      </Typography>
    );
  }

  if (error) {
    return <Typography sx={{ color: "red" }}>Error</Typography>;
  }

  if (!data) {
    return <>Không có dữ liệu</>;
  }

  const formatDate = (dateString: string) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const formattedReleaseDate = formatDate(data.release_date);

  const renderStarIcons = (voteAverage: number) => {
    const stars = [];
    const rating = voteAverage * 0.5;
    const roundedRating = Math.round(rating);

    for (let i = 1; i <= 5; i++) {
      if (i <= roundedRating) {
        stars.push(<StarIcon key={i} sx={{ fontSize: 24, color: "orange" }} />);
      } else {
        stars.push(
          <StarOutlineIcon key={i} sx={{ fontSize: 24, color: "orange" }} />
        );
      }
    }


    return stars;
  };


  const backdropImage = data.backdrop_path
    ? `${config.image_path}${data.backdrop_path}`
    : "/nomovie.jpg";

  const posterImage = data.poster_path
    ? `${config.image_path}${data.poster_path}`
    : "/filmdefault.jpg";

  return (
    <>
      <NavDetail />
      <Stack
        direction="column"
        sx={{
          backgroundColor: "#242A32",
          position: "relative",
        }}
      >
        <Box
          component="img"
          sx={{
            width: "100%",
            objectFit: "cover",
            borderBottomLeftRadius: "16px",
            borderBottomRightRadius: "16px",
          }}
          src={backdropImage}
          alt={data.title}
        />

        <Stack direction="column" spacing={1}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              component="img"
              sx={{
                position: "absolute",
                borderRadius: "16px",
                left: "20px",
                transform: "translate(0%, -38%)",
                width: "95px",
                objectFit: "cover",
                height: "130px",
              }}
              src={posterImage}
              alt={data.title}
            />

            <Box
              sx={{
                height: "100px",
                color: "white",
                width: "95%",
                pl: "138px",
                pt: "10px",
                fontSize: "1.1rem",
                fontWeight: "600",
                flexDirection: "column",
              }}
            >
              {data.title}
            </Box>
          </Box>

          <Box sx={{
            pl: "20px",
          }}>
            <FavoriteIcon id={data.id} />
          </Box>
          <Box
            sx={{
              color: "white",
              pl: "20px",
              pt: "10px",
            }}
          >
            {renderStarIcons(data.vote_average)} From{" "}
            {data.vote_count.toLocaleString()} users
          </Box>
          <Stack direction="column" alignItems="left" spacing={1}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                color: "#92929D",
                fontSize: "1rem",
                pl: "26px",
              }}
            >
            </Box>

            <Box
              sx={{
                color: "#92929D",
                fontSize: "1rem",
                pl: "26px",
              }}
            >
              Date release: {formattedReleaseDate}
            </Box>
            <Box
              sx={{
                color: "#92929D",
                fontSize: "1rem",
                pl: "26px",
                pt: "10px",
              }}
            >
              Length: {data.runtime} Minutes
            </Box>
          </Stack>

          <Stack direction="row" alignItems="left" spacing={1}>
            <Box
              sx={{
                color: "#92929D",
                fontSize: "1rem",
                pl: "26px",
                pt: "10px",
              }}
            >
              Genres:
            </Box>
            <Box
              sx={{
                color: "#92929D",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {data.genres.map((genre) => (
                <Link href={`/geners/${genre.id}`} underline="none">
                  <Box
                    key={genre.id.toString()}
                    sx={{
                      fontSize: "12px",
                      border: "2px solid #888",
                      color: "white ",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      marginRight: "8px",
                      marginTop: "10px",
                      transition: "border-color 0.3s",
                      "&:hover": {
                        borderColor: "#fff",
                        backgroundColor: "#333",
                      },
                    }}
                  >
                    {genre.name}
                  </Box>
                </Link>
              ))}
            </Box>
          </Stack>
        </Stack>
      </Stack>

      <Box sx={{ height: "28px" }}></Box>

      <TabDetail />
    </>
  );
};

export default Detail;

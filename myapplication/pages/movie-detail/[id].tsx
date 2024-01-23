import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Layout from "@/components/landing_page/layout";
import NavDetail from "@/components/landing_page/NavDetail";
import TabDetail from "@/components/landing_page/TabDetail";
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

  const formattedReleaseDate = format(
    new Date(data.release_date),
    "dd/MM/yyyy"
  );

  // Function to generate star icons based on the vote average
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
          src={config.image_path + data.backdrop_path}
          alt={data.title}
        />



        <Stack direction="column" spacing={1}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              component="img"
              sx={{
                position: "absolute",
                borderRadius: "16px",
                right: "72%",
                transform: "translate(0%, -42%)",
                width: "95px",
                objectFit: "cover",
                height: "130px",
              }}
              src={config.image_path + data.poster_path}
              alt={data.title}
            />


            <Box sx={{
              height: "100px",
              color: "white",
              width: "100%",
              paddingTop: "10px",
              paddingLeft: "130px",
              fontSize: "1.2rem",
              fontWeight: "600",
              flexDirection: "column",
            }}>
              {data.title}
            </Box>
          </Box>

          <Box
            sx={{
              paddingRight: "28%",
              color: "white",
              textAlign: "center"
            }}
          >
            {renderStarIcons(data.vote_average)}  From {data.vote_count.toLocaleString()} users

          </Box>
          <Stack direction="column" alignItems="left" spacing={1}>
            <Typography
              variant="body1"
              sx={{
                color: "#92929D",
                fontSize: "1.25rem",
                pl: "26px",
                pt: "10px",
              }}
            >
              Date release: {formattedReleaseDate}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#92929D",
                fontSize: "1.25rem",
                pl: "26px",
                pt: "10px",
              }}
            >
              Length: {data.runtime} Minutes
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="left" spacing={1}>
            <Typography
              sx={{
                color: "#92929D",
                fontSize: "1.25rem",
                pl: "26px",
                pt: "10px",
              }}
            >
              Genres:
            </Typography>
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
                      border: "2px solid #888",
                      color: "white ",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      marginRight: "8px",
                      marginTop: "10px",
                    }}
                  >
                    {genre.name}
                  </Box>
                </Link>
              ))}
            </Box>
          </Stack>
        </Stack>
      </Stack >

      <Box sx={{ height: "28px" }}></Box>

      <TabDetail />
    </>
  );
};

export default Detail;

import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Layout from "@/components/landing_page/layout";
import NavDetail from "@/components/landing_page/NavDetail";
import TabDetail from "@/components/landing_page/TabDetail";
import StarIcon from '@mui/icons-material/Star'; import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import { Box, CardMedia, CircularProgress, Stack, Typography } from "@mui/material";
import { Movie } from "./Models/Movies";
import config from "@/config";
import { NextPageWithLayout } from "../_app";

const Detail: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useSWR<Movie>(
    `/movie/${id}?language=en-US&append_to_response=videos,credits`
  );

  if (isLoading)
    return (
      <Typography>
        {isLoading && <CircularProgress />}
      </Typography>
    );

  if (error) return <Typography sx={{ color: "red" }}>Error</Typography>;

  if (!data) {
    return <>Không có dữ liệu</>;
  }

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
            height: "auto",
            width: "100%",
            objectFit: "cover",
            borderRadius: "16px",

          }}
          src={config.image_path + data.backdrop_path}
          alt={data.title}
        />

        <Box
          sx={{
            backgroundColor: "rgba(50, 40, 54, 0.32)",
            borderRadius: "8px",
            padding: "4px",
            position: "absolute",
            top: "56%",
            left: "84%",
            transform: "translate(-8%, -40%)",
            color: "white",
            fontSize: "12px",
          }}
        >
          <StarIcon sx={{ fontSize: 24, color: "orange" }} />
          {data.vote_average}
        </Box>

        <Stack direction="column" spacing={1}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              component="img"
              sx={{
                position: "absolute",
                borderRadius: "16px",
                right: "72%",
                transform: "translate(-5%, -40%)",
                width: "95px",
                objectFit: "cover",
                height: "120px",
              }}
              src={config.image_path + data.poster_path}
              alt={data.title}
            />

            <Box>
              <Typography
                sx={{
                  height: "100px",
                  color: "white",
                  width: "100%",
                  paddingTop: "8px",
                  paddingLeft: "120px",
                  fontSize: "18px",
                  fontWeight: "600",
                  flexDirection: "column"
                }}
              >
                {data.title}
              </Typography>
            </Box>
          </Box>
          <Stack direction="column" spacing={1} alignItems="center">
            <Stack direction="row" alignItems="center" spacing={1}>
              <CalendarTodayIcon sx={{ color: "#92929D", marginRight: "5px" }} />
              <Typography variant="body1" sx={{ color: "#92929D" }}>
                {data.release_date}
              </Typography>
              <AccessTimeIcon
                sx={{ color: "#92929D", marginLeft: "10px", marginRight: "5px" }}
              />
              <Typography variant="body1" sx={{ color: "#92929D" }}>
                {data.runtime} Minutes
              </Typography>
              <ConfirmationNumberIcon
                sx={{ color: "#92929D", marginLeft: "10px", marginRight: "5px" }}
              />
              <Typography variant="body1" sx={{ color: "#92929D" }}>
                {data.genres[0]?.name}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack >
      <Box sx={{ height: "28px" }}></Box>

      <TabDetail />
    </>
  );
};

Detail.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Detail;

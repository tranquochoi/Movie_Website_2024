import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Layout from "@/components/landing_page/layout";
import NavDetail from "@/components/landing_page/NavDetail";
import TabDetail from "@/components/landing_page/TabDetail";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import { Box, CardMedia, Stack, Typography } from "@mui/material";
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
      <Typography sx={{ color: "red", fontSize: "80px" }}>
        Loading...
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
        spacing={2}
        sx={{
          backgroundColor: "#242A32",
          padding: "20px",
        }}
      >
        <Box
          component="img"
          sx={{
            height: "auto",
            width: "auto",
            objectFit: "cover",
          }}
          src={config.image_path + data.backdrop_path}
          alt={data.title}
        />
        <Stack direction="column" spacing={2}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              component="img"
              sx={{
                width: "95px",
                objectFit: "cover",
                height: "120px",
              }}
              src={config.image_path + data.poster_path}
              alt={data.title}
            />
            <Box>
              <Typography
                variant="h6"
                sx={{ color: "white", textAlign: "center" }}
              >
                {data.title}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" sx={{ color: "white" }}>
                <StarBorderIcon sx={{ fontSize: 30, color: "orange" }} />{" "}
                {data.vote_average}
              </Typography>
            </Box>
          </Box>

          <Stack direction="column" spacing={1} alignItems="center">
            <Stack direction="row" alignItems="center" spacing={1}>
              <CalendarTodayIcon sx={{ color: "white", marginRight: "5px" }} />
              <Typography variant="body1" sx={{ color: "white" }}>
                {data.release_date}
              </Typography>
              <AccessTimeIcon
                sx={{ color: "white", marginLeft: "10px", marginRight: "5px" }}
              />
              <Typography variant="body1" sx={{ color: "white" }}>
                {data.runtime} Minutes
              </Typography>
              <ConfirmationNumberIcon
                sx={{ color: "white", marginLeft: "10px", marginRight: "5px" }}
              />
              <Typography variant="body1" sx={{ color: "white" }}>
                {data.genres[0]?.name}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <TabDetail />
    </>
  );
};

Detail.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Detail;

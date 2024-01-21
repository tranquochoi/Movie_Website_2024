import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Layout from "@/components/landing_page/layout";
import NavDetail from "@/components/landing_page/NavDetail";
import TabDetail from "@/components/landing_page/TabDetail";
import StarIcon from "@mui/icons-material/Star";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import {
  Box,
  CardMedia,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";

import config from "@/config";
import { NextPageWithLayout } from "../_app";
import { green } from "@mui/material/colors";
import { People } from "../movie-detail/Models/People";

const PeopleDetail: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useSWR<People>(
    `/person/${id}?language=en-US&append_to_response=images`
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
      <Box
        component="img"
        sx={{
          height: "auto",
          width: "100%",
          objectFit: "cover",
          borderBottomLeftRadius: "16px",
          borderBottomRightRadius: "16px",
        }}
        src={config.image_path + data.images.profiles[0].file_path}
        alt={"none"}
      />
      <Typography>{data.name}</Typography>
    </>
  );
};

export default PeopleDetail;

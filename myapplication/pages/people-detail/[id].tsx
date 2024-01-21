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
  Grid,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import config from "@/config";
import { NextPageWithLayout } from "../_app";
import { green } from "@mui/material/colors";
import { People } from "../movie-detail/Models/People";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import JobOnIcon from "@mui/icons-material/RecentActors";
import RenderMovie from "../home/listMenu/renderMovie";
const PeopleDetail: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useSWR<People>(
    `/person/${id}?language=en-US&append_to_response=images,external_ids,movie_credits`
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
  const sortedListFilm = data.movie_credits.cast.sort(
    (a, b) =>
      parseInt(b.release_date.slice(0, 4)) -
      parseInt(a.release_date.slice(0, 4))
  );
  return (
    <Box sx={{ padding: "18px" }}>
      <Stack spacing={3} sx={{ alignItems: "center" }}>
        <Box
          component="img"
          sx={{
            height: "100px",
            width: "100px",
            objectFit: "cover",
            borderRadius: "150px",
          }}
          src={config.image_path + data.images.profiles[0].file_path}
          alt={"none"}
        />

        <Typography
          sx={{
            color: "#FFF",
            fontFamily: "Hanuman",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          {data.name}
        </Typography>

        <Typography
          sx={{
            color: "#544C4C",
            fontFamily: "Inter",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "87.523%",
          }}
        >
          <LocationOnIcon />
          {data.place_of_birth}
        </Typography>
        <Typography
          sx={{
            color: "#544C4C",
            fontFamily: "Inter",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "87.523%",
          }}
        >
          <JobOnIcon />
          {data.known_for_department}
        </Typography>

        <Stack direction="row" spacing={8}>
          <Box>
            <Typography
              sx={{
                color: "#242760",
                fontFamily: "Inter",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "87.523%",
              }}
            >
              {data.popularity}
            </Typography>
            <Typography
              sx={{
                color: "#FFF",
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "87.523%",
              }}
            >
              Popularity
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#242760",
                fontFamily: "Inter",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "87.523%",
              }}
            >
              Twitter
            </Typography>
            <Typography
              sx={{
                color: "#FFF",
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "87.523%",
              }}
            >
              @{data.external_ids.twitter_id}
            </Typography>
          </Box>
        </Stack>

        <Typography
          sx={{
            color: "#FFF",
            fontFamily: "Inter",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            textAlign: "center",
          }}
        >
          {data.biography}
        </Typography>
      </Stack>
      <Box sx={{}}>
        <Typography
          sx={{
            color: "#242760",
            fontFamily: "Inter",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "87.523%",
          }}
        >
          Acting for:
        </Typography>
        {sortedListFilm.map((ig) => (
          <Box>
            <Link
              href={`/movie-detail/${ig.id}`}
              underline="none"
              sx={{
                textDecoration: "none",
                textAlign: "center",
                color: "#FFF",
                "&:hover": {
                  color: "#00F", // Màu xanh khi di chuột vào
                },
              }}
            >
              <Typography
                style={{
                  fontFamily: "Roboto",
                  fontSize: "24px",
                  fontWeight: 700,
                  lineHeight: "normal",
                  display: "inline-block",
                  marginRight: "8px",
                  maxWidth: "calc(100% - 100px)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {ig.release_date && ig.release_date.slice(0, 4)}
              </Typography>
              <Typography
                style={{
                  fontFamily: "Roboto",
                  fontSize: "24px",
                  fontWeight: 700,
                  lineHeight: "normal",
                  display: "inline-block",
                  maxWidth: "calc(100% - 100px)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {ig.title}
              </Typography>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PeopleDetail;

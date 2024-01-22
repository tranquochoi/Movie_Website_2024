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
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";

import config from "@/config";
import { NextPageWithLayout } from "../_app";
import { green } from "@mui/material/colors";

import { parse } from "path";
import axios from "axios";
import { Movie, MovieList } from "../movie-detail/Models/Movies";
import RenderMovie from "../home/listMenu/renderMovie";
import { ListGenre } from "../movie-detail/Models/Geners";

const Categories: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);
  const { data, isLoading, error } = useSWR<MovieList>(
    "/movie/now_playing",
    fetcher
  );
  const { data: gener } = useSWR<ListGenre>(
    "genre/movie/list?language=en",
    fetcher
  );
  const movieGener = data?.results.filter((movie) =>
    movie.genre_ids.includes(parseInt(id as string))
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
        sx={{
          color: "#92929D",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          backgroundColor: "",
          padding: "6px",
        }}
      >
        {gener?.genres.map((genre) => (
          <Link href={`/geners/${genre.id}`} underline="none">
            <Box
              key={genre.id.toString()}
              sx={{
                border: "2px solid #888",
                color: "white ",
                padding: "4px 8px",
                borderRadius: "2px",
                marginRight: "8px",
                marginTop: "10px",
              }}
            >
              {genre.name}
            </Box>
          </Link>
        ))}
      </Box>
      <Box sx={{ padding: "6px" }}>
        <Grid container spacing={1}>
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

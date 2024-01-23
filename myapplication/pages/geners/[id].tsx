import React, { ReactElement, useState } from "react";
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
import HomeMenu from "@/components/landing_page/homeLayoutMenu";
import Header from "@/components/landing_page/header";
import NavGenres from "@/components/landing_page/NavGenres";

const Categories: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  const [selectedGenreId, setSelectedGenreId] = useState<string | null>(
    id as string
  );
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
    movie.genre_ids.includes(parseInt(selectedGenreId as string))
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
      <NavGenres />
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
          <Box
            key={genre.id.toString()}
            sx={{
              border: "2px solid #888",
              color: "white ",
              padding: "4px 8px",
              borderRadius: "2px",
              marginRight: "8px",
              marginTop: "10px",
              "&:hover": {
                backgroundColor: "red",
                cursor: "pointer",
              },
            }}
            onClick={() => setSelectedGenreId(genre.id.toString())}
          >
            {genre.name}
          </Box>
        ))}
      </Box>
      <Typography
        sx={{ color: "white ", fontSize: "18px", textAlign: "center" }}
      >
        Slected:
        {gener?.genres.find((tl) => tl.id == (selectedGenreId as string))?.name}
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

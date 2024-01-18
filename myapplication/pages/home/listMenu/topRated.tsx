import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import useSWR from "swr";
import Layout from "@/components/landing_page/layout";
import axios from "axios";
import { NextPageWithLayout } from "@/pages/_app";
import HomeMenu from "@/components/landing_page/homeLayoutMenu";
import HomeDetail from "..";
import { Movie, MovieList } from "@/pages/movie-detail/Models/Movies";
import StarIcon from "@mui/icons-material/Star";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import RenderMovie from "./renderMovie";
import RenderMovie2 from "./renderMovie2";

const TopRated: NextPageWithLayout = () => {
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);
  const { data, error } = useSWR<MovieList>("/movie/top_rated", fetcher);

  if (!data) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography>Error loading data</Typography>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        marginBottom: "70px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 1,
          flexWrap: "nowrap",
        }}
      >
        {data?.results.slice(0, 6).map((movie) => (
          <RenderMovie2 data={movie}></RenderMovie2>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 1,
          flexWrap: "nowrap",
        }}
      >
        {data?.results.slice(6, 12).map((movie) => (
          <RenderMovie2 data={movie}></RenderMovie2>
        ))}
      </Box>
    </Box>
  );
};

export default TopRated;

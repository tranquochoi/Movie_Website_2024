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
import HomeDetail from ".";
import { Movie, MovieList } from "@/pages/movie-detail/Models/Movies";
import StarIcon from "@mui/icons-material/Star";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import RenderMovie from "./renderMovie";
import RenderMovie2 from "./renderMovie2";

const Popular: NextPageWithLayout = () => {
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);
  const { data, error } = useSWR<MovieList>("/movie/popular", fetcher);

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
        gap: 5,
      }}
    >
      <Box
        sx={{
          paddingTop: "24px",
          display: "flex",
          overflowX: "auto",
          gap: 1,
          flexWrap: "nowrap",
          margin: "-14px",
          paddingLeft: "18px",
          paddingRight: "16px",
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
          margin: "-14px",
          paddingLeft: "18px",
          paddingRight: "16px",
        }}
      >
        {data?.results.slice(6, 12).map((movie) => (
          <RenderMovie2 data={movie}></RenderMovie2>
        ))}
      </Box>
      <Box sx={{ height: "32px" }} />
    </Box>
  );
};

export default Popular;

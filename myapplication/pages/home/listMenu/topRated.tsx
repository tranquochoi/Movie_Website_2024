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

interface MovieList {
  results: Movie[];
}

interface Movie {
  id: string;
  title: string;
  poster_path: string;
}
function RenderMovie(props: { data: Movie }) {
  return (
    <Box
      key={props.data.id}
      sx={{
        flex: "0 0 auto",
        marginRight: 0.5,
        width: "100px",
      }}
    >
      <Link href={`/movie-detail/${props.data.id}`} underline="none">
        <Card
          elevation={3}
          sx={{
            height: "145px",
            width: "100px",
            borderRadius: "16px",
            boxShadow: "none",
          }}
        >
          <Box
            component="img"
            sx={{
              height: "100%",
              width: "100%",

            }}
            src={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`}
            alt={props.data.title}
          />

          <CardContent />
        </Card>
        <Typography
          sx={{
            marginLeft: "0px",
            marginTop: "8px",
            overflow: "hidden",
            textAlign: "left",
            color: "#FFF",
            fontSize: "12px",
          }}
        >
          {props.data.title}
        </Typography>
      </Link>
    </Box>
  );
}
const Top: NextPageWithLayout = () => {
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
          <RenderMovie data={movie}></RenderMovie>
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
          <RenderMovie data={movie}></RenderMovie>
        ))}
      </Box>
      <Box sx={{ height: "56px" }}></Box>
    </Box>
  );
};

export default Top;

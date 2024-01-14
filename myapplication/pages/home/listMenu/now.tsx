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
            borderRadius: "5px",
            boxShadow: "none", // Loại bỏ viền trắng
          }}
        >
          <Box
            component="img"
            sx={{
              height: "100%",
              width: "100%",
              borderRadius: "5px", // Đổi giá trị borderRadius theo ý muốn
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
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            textAlign: "left", // Đảm bảo văn bản nằm ở bên trái
            color: "#FFF",
          }}
        >
          {props.data.title}
        </Typography>
      </Link>
    </Box>
  );
}
const Now: NextPageWithLayout = () => {
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);
  const { data, error } = useSWR<MovieList>("/movie/now_playing", fetcher);

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
    </Box>
  );
};

export default Now;

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

  const moviesToShow = data.results.slice(0, 6);

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
          <Box
            key={movie.id}
            sx={{
              flex: "0 0 auto",
              marginRight: 0.5,
            }}
          >
            <Link href={`/movie-detail/${movie.id}`} underline="none">
              <Card
                elevation={3}
                className="zoom-card small-card"
                sx={{
                  height: "145px",
                  width: "100px",
                  borderRadius: "16px",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: "100%",
                    objectFit: "cover",
                    width: "100%",
                    borderRadius: "16px",
                  }}
                  image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <CardContent />
              </Card>
            </Link>
          </Box>
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
          <Box
            key={movie.id}
            sx={{
              flex: "0 0 auto",
              marginRight: 0.5,
            }}
          >
            <Link href={`/movie-detail/${movie.id}`} underline="none">
              <Card
                elevation={3}
                className="zoom-card small-card"
                sx={{
                  height: "145px",
                  width: "100px",
                  borderRadius: "16px",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: "100%",
                    objectFit: "cover",
                    width: "100%",
                    borderRadius: "16px",
                  }}
                  image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <CardContent />
              </Card>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

Now.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Box>
        <HomeDetail />
      </Box>
      <HomeMenu />
      <Box>{page}</Box>
    </Layout>
  );
};

export default Now;

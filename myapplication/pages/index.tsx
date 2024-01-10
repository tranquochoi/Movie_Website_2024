import type { ReactElement } from "react";
import Layout from "@/components/landing_page/layout";
import { NextPageWithLayout } from "./_app";
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
import axios from "axios";
import useSWR from "swr";

interface User {
  name: string;
}

interface MovieList {
  results: Movie[];
}

interface Movie {
  id: string;
  title: string;
  poster_path: string;
}

const HomeDetail: NextPageWithLayout = () => {
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);
  const { data, isLoading, error } = useSWR<MovieList>(
    "/movie/upcoming",
    fetcher
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2
        }}
      >
        {isLoading && <CircularProgress />}
        {error && <Typography>Error loading data</Typography>}
        {data?.results.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <Link href={`/movie-detail/${movie.id}`} underline="none">
              <Card elevation={5} className="zoom-card small-card" sx={{ height: "95%", width: "290%" }}>
                <CardMedia
                  component="img"
                  sx={{
                    height: "100%",
                    objectFit: "cover",
                    width: "auto",
                  }}
                  image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <CardContent
                >
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Box>
    </>
  );
};

HomeDetail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default HomeDetail;

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
  const { data, error } = useSWR<MovieList>("/movie/upcoming", fetcher);

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
        overflowX: "auto",
        gap: 2,
      }}
    >
      {data.results.map((movie) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
          <Link href={`/movie-detail/${movie.id}`} underline="none">
            <Card
              elevation={5}
              className="zoom-card small-card"
              sx={{ height: "95%", width: "290%" }}
            >
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
              <CardContent></CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
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

// HomeDetail2.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <Layout>
//       {page}
//       <Layout2 />
//     </Layout>
//   );
// };

// export default HomeDetail2;

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

  const moviesToShow = data.results.slice(0, 6);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      {data?.results.map((movie) => (
        <Box
          key={movie.id}
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: 2,
            flexWrap: "nowrap",
          }}
        >
          <Box
            key={movie.id}
            sx={{
              display: "flex",
              flexDirection: "row", // Sử dụng column để đảm bảo Link và Box nằm trên cùng một hàng
              marginRight: 0.5,
            }}
          >
            <Link href={`/movie-detail/${movie.id}`} underline="none">
              <Card
                elevation={3}
                className="zoom-card small-card"
                sx={{
                  height: "220px",
                  width: "150px",
                  borderRadius: "16px",
                  marginBottom: 1, // Khoảng cách giữa Card và Typography
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
            <Box sx={{ marginLeft: "30px" }}>
              <Typography>{movie.title}</Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

TopRated.getLayout = function getLayout(page) {
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

export default TopRated;

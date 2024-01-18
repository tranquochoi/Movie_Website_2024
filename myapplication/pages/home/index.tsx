import type { ReactElement } from "react";
import Layout from "@/components/landing_page/layout";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import axios from "axios";
import useSWR from "swr";
import { NextPageWithLayout } from "../_app";
import Header from "@/components/landing_page/header";
import SearchBar from "@/components/landing_page/search";
import HomeMenu from "@/components/landing_page/homeLayoutMenu";
import StarBorderIcon from "@mui/icons-material/StarBorder";

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
      <Box sx={{ height: "21px" }}></Box>
      <Header />
      <Box sx={{ height: "21px" }}></Box>
      <SearchBar />
      <Box sx={{ height: "21px" }}></Box>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2,
          flexWrap: "nowrap",
        }}
      >
        {isLoading && <CircularProgress />}
        {error && <Typography>Error loading data</Typography>}
        {data?.results.map((movie) => (
          <Box
            key={movie.id}
            sx={{
              flex: "0 0 auto",
              marginRight: 2,
              height: "250px",

            }}
          >
            <Link href={`/movie-detail/${movie.id}`} underline="none">
              <Card
                elevation={5}
                className="small-card"
                sx={{
                  height: "200px",
                  width: "139.581px",
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
              <Box sx={{ position: "relative" }}>
                <Typography
                  sx={{
                    position: "absolute",
                    bottom: "-50px",
                    left: "-20px",
                    fontSize: "96px",
                    color: "#242A32",
                    padding: "4px 4px",
                    overflow: "visible",
                    textShadow: "1px 1px 4px #0296E5",
                  }}
                >
                  {data.results.indexOf(movie) + 1}
                </Typography>
              </Box>
            </Link>
          </Box>

        ))}
      </Box>
    </>
  );
};

HomeDetail.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
      <HomeMenu />
    </Layout>
  );
};

export default HomeDetail;

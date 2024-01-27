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
import { NextPageWithLayout } from "../../_app";
import Header from "@/components/landing_page/header";
import SearchBar from "@/components/landing_page/search";
import HomeMenu from "@/components/landing_page/homeLayoutMenu";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { MovieList } from "../../movie-detail/Models/Movies";
import Person from "@/components/Person";
import RenderMovieIndex from "./renderMovieIndex";

const HomeDetail: NextPageWithLayout = () => {
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);
  const { data, isLoading, error } = useSWR<MovieList>("/movie/upcoming");

  return (
    <>
      <Box sx={{ height: "21px" }}></Box>
      <Header />
      <Box sx={{ height: "21px", marginTop: "-8px" }}></Box>
      <SearchBar />
      <Box sx={{ height: "38px", marginTop: "-8px" }}></Box>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2,
          flexWrap: "nowrap",
          margin: "-14px",
          paddingLeft: "18px",
        }}
      >
        {isLoading && <CircularProgress />}
        {error && <Typography>Error loading data</Typography>}

        {data?.results.map((movie) => (
          <Box
            key={movie.id.toString()}
            sx={{
              flex: "0 0 auto",
              marginRight: 2,
              height: "250px",
            }}
          >
            <Link href={`/movie-detail/${movie.id}`} underline="none">
              <RenderMovieIndex data={movie} />

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

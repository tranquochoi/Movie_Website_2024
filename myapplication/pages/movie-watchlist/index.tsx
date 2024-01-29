import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import axios from "axios";
import { MovieList } from "../movie-detail/Models/Movies";
import RenderMovie from "../home/listMenu/renderMovie";
import { ListGenre } from "../movie-detail/Models/Geners";
import NavGenres from "@/components/landing_page/NavGenres";
import {
  Box,
  CircularProgress,
  Typography,
  Button,
  Popover,
  Grid,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NextPageWithLayout } from "../_app";
import RenderMovie2 from "../home/listMenu/renderMovie2";
import RenderMovie3 from "../home/listMenu/renderMovie3";
import RenderMovie4 from "../home/listMenu/renderMovie4";
import { getCookie } from "cookies-next";
import NavWatchlist from "@/components/landing_page/NavWatchlist";

const User: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  const [selectedGenre, setSelectedGenre] = useState(0);

  const [movies, setMovies] = useState<MovieList | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentOption, setCurrentOption] = useState("watchlist");
  const session_id = getCookie("session_id");
  const user_id = getCookie("user_id");

  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `account/${user_id}/watchlist/movies?language=en-US&page=1&session_id=${session_id}&sort_by=created_at.asc`
        );
        const newMovies = response.data;

        setMovies((prevMovies) => ({
          page: newMovies.page,
          results: prevMovies
            ? [
                ...prevMovies.results,
                ...newMovies.results.filter(
                  (newMovie: { id: Int16Array }) =>
                    !prevMovies.results.some(
                      (existingMovie) => existingMovie.id === newMovie.id
                    )
                ),
              ]
            : newMovies.results,
        }));
      } catch (error) {}
    };

    fetchMovies();
  }, [currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  if (!movies) {
    return <CircularProgress />;
  }

  const maxPopoverHeight = 10 * 20;

  return (
    <>
      <NavWatchlist/>
      <Box
        sx={{
          color: "#92929D",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          paddingLeft: "12px",
        }}
      ></Box>

      <Box
        sx={{
          color: "white",
          fontSize: "18px",
          textAlign: "center",
          padding: "10px",
          backgroundColor: "#161722",
          borderRadius: "0px",
          fontWeight: "bold",
        }}
      >
        My {currentOption}
      </Box>
      <Box sx={{ padding: "16px", textAlign: "center" }}>
        <Grid container spacing={1}>
          {movies.results?.map((movie) => (
            <Grid item xs={12} sm={4} md={4}>
              <RenderMovie4 data={movie} />
            </Grid>
          ))}
        </Grid>
        {movies.results && movies.results.length > 20 && (
          <Button
            onClick={handleLoadMore}
            style={{
              color: "white",
              backgroundColor: "#00BFFF",
              padding: "8px 16px",
              margin: "32px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              textTransform: "none",
              fontFamily: "Arial, sans-serif",
            }}
          >
            Load More
          </Button>
        )}

        {!movies.results ||
          (movies.results.length === 0 && (
            <Box
              sx={{
                color: "white",
                fontSize: "16px",
                marginTop: "20px",
              }}
            >
              Nothing to show.
            </Box>
          ))}
      </Box>
    </>
  );
};

export default User;

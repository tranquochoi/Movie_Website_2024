import React from "react";
import { Box, CircularProgress, Grid } from "@mui/material";
import MovieCard from "./MovieCard";
import { Movie } from "./Models/Movies";

interface MainContentProps {
  displayedMovies: Movie[];
  isLoading: boolean;
}

const MainContent: React.FC<MainContentProps> = ({
  displayedMovies,
  isLoading,
}) => (
  <Box>
    {isLoading && <CircularProgress />}
    <Grid container spacing={1}>
      {displayedMovies.map((movie) => (
        <Grid item key={movie.id} xs={12} sm={2} md={4} lg={3}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default MainContent;

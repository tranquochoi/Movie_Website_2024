import { Box, CircularProgress, Typography } from "@mui/material";
import useSWR from "swr";
import axios from "axios";
import { NextPageWithLayout } from "@/pages/_app";
import RenderMovie2 from "./renderMovie2";
import { Movie } from "@/components/Models/Movies";

import RenderMovie4 from "./renderMovie4";
import RenderMovieIndex from "./renderMovieIndex";
import RenderMovie from "./renderMovie";

const TopRated: NextPageWithLayout = () => {
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);
  const { data, error } = useSWR("/movie/top_rated", fetcher);

  if (!data) return <CircularProgress />;
  if (error) return <Typography>Error loading data</Typography>;

  const renderMovies = (start: number, end: number) => (
    <Box sx={{}}>
      {data.results.slice(start, end).map((movie: Movie) => (
        <RenderMovie4 data={movie} />
      ))}
    </Box>
  );
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      {renderMovies(0, 20)}
      <Box sx={{ height: "30px" }} />
    </Box>
  );
};

export default TopRated;

import { Box, CircularProgress, Typography } from "@mui/material";
import useSWR from "swr";
import axios from "axios";
import { NextPageWithLayout } from "@/pages/_app";
import RenderMovie from "./renderMovie";
import { Movie } from "@/components/Models/Movies";

const Now: NextPageWithLayout = () => {
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);
  const { data, error } = useSWR("/movie/now_playing", fetcher);

  if (!data) return <CircularProgress />;
  if (error) return <Typography>Error loading data</Typography>;

  const renderMovies = (start: number, end: number) => (
    <>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 1,
          flexWrap: "nowrap",
          margin: "-14px",
          paddingLeft: "18px",
          paddingRight: "16px",
        }}
      >
        {data?.results.slice(start, end).map((movie: Movie) => (
          <RenderMovie data={movie} />
        ))}
      </Box>
    </>
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
      {renderMovies(0, 10)}
      {renderMovies(10, 20)}
      <Box sx={{ height: "32px" }} />
    </Box>
  );
};

export default Now;

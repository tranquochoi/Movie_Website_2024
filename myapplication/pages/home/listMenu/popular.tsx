import { Box, CircularProgress, Typography } from "@mui/material";
import useSWR from "swr";
import axios from "axios";
import { NextPageWithLayout } from "@/pages/_app";
import RenderMovie2 from "./renderMovie2";
import { Movie } from "@/components/Models/Movies";
import RenderMovie3 from "./renderMovie3";
import RenderMovie from "./renderMovie";
import RenderMovie4 from "./renderMovie4";

const Popular: NextPageWithLayout = () => {
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);
  const { data, error } = useSWR("/movie/popular", fetcher);

  if (!data) return <CircularProgress />;
  if (error) return <Typography>Error loading data</Typography>;

  const renderMovies = (start: number, end: number) => (
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
      {data.results.slice(start, end).map((movie: Movie) => (
        <RenderMovie2 data={movie} />
      ))}
    </Box>
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
      {renderMovies(0, 6)}
      {renderMovies(6, 12)}
      <Box sx={{ height: "32px" }} />
    </Box>
  );
};

export default Popular;

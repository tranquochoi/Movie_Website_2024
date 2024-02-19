import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Movie } from "@/components/Models/Movies";
import RenderActress from "@/pages/movie-detail/ListComponent/RenderActress";
import RenderReview from "@/pages/movie-detail/ListComponent/RenderReview";
import RenderImages from "@/pages/movie-detail/ListComponent/RenderImages";
import { CardMedia, Link, Stack } from "@mui/material";
import config from "@/config";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { CircularProgress } from "@mui/material";
import RenderMovieRelate from "@/pages/home/listMenu/RenderMovieRelate";
function RenderAboutMV(props: { data: number }) {
  const { data, isLoading, error } = useSWR<Movie>(
    `/movie/${props.data}?language=en-US&append_to_response=videos,credits,reviews`
  );
  const [openDialog, setOpenDialog] = useState(false);
  const toggleDialog = () => {
    setOpenDialog(!openDialog);
  };
  const {
    data: similarMovies,
    isLoading: similarLoading,
    error: similarError,
  } = useSWR(`/movie/${props.data}/similar?language=en-US`);
  return (
    <>
      <IconButton
        onClick={toggleDialog}
        sx={{ color: "white", display: "flex", alignItems: "center" }}
      >
        <Box
          sx={{
            marginRight: "8px",
            fontFamily: "YourCustomFont, sans-serif",
            fontSize: "18px",
          }}
        >
          Introduce
        </Box>
        <ArrowCircleRightIcon />
      </IconButton>
      <Dialog open={openDialog} onClose={toggleDialog}>
        <DialogContent>
          <Box sx={{ fontSize: "1.5rem", height: "50px" }}>Introduce</Box>
          <Box>{`Movie Title: ${data?.overview}`}</Box>
        </DialogContent>
      </Dialog>
      <RenderImages id={props.data}></RenderImages>
      {similarLoading ? (
        <CircularProgress />
      ) : (
        <Stack direction="column" spacing={2} sx={{ mt: 5 }}>
          <Typography
            sx={{ color: "white", fontFamily: "YourCustomFont, sans-serif" }}
          >
            Related Movies
          </Typography>
          {similarLoading ? (
            <CircularProgress />
          ) : (
            <Stack direction="column" spacing={2}>
              {similarMovies?.results?.map((similarMovie: Movie) => (
                <RenderMovieRelate data={similarMovie} />
              ))}
            </Stack>
          )}
        </Stack>
      )}
    </>
  );
}
export default RenderAboutMV;

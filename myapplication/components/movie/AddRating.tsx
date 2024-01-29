import React, { useEffect, useState } from "react";
import { Person } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  Menu,
  MenuItem,
  Stack,
  Typography,
  DialogTitle,
  ListItem,
  List,
  ListItemButton,
  ListItemText,
  CircularProgress,
  Rating,
} from "@mui/material";
import { RequestTokenResponse, User } from "@/pages/movie-detail/Models/Auth";
import axios from "axios";
import useSWR from "swr";
import { getCookie, setCookie, deleteCookie } from "cookies-next";
import { useRouter } from "next/router";
import { MovieList } from "@/pages/movie-detail/Models/Movies";
import { initialize } from "next/dist/server/lib/render-server";
import { createInitialRouterState } from "next/dist/client/components/router-reducer/create-initial-router-state";
import IconFavorite from "@mui/icons-material/Favorite";
function IconAddRating(props: { id: Number }) {
  const [rating, setRating] = useState(0);

  const session_id = getCookie("session_id");
  const handleRateMovie = async (value: number) => {
    try {
      const response = await axios.post(
        `https://api.themoviedb.org/3/movie/${props.id}/rating?api_key=95c77b4ffbd4a5cc35c3b79d2b9aa4fb?session_id=${session_id}`,
        { value }
      );

      // Xử lý phản hồi từ API nếu cần
      console.log("Rating submitted successfully:", response.data);
    } catch (error) {
      console.error("Error rating the movie:", error);
    }
  };
  return (
    <>
      <Box>
        <Rating
          name="movie-rating"
          value={rating}
          precision={0.5}
          onChange={(event, newValue) => {
            setRating(newValue);
            handleRateMovie(newValue);
          }}
        />
      </Box>
    </>
  );
}
function AddRatingIcon(props: { id: Number }) {
  const session_id = getCookie("session_id");
  return <>{session_id ? <IconAddRating id={props.id} /> : null}</>;
}

export default AddRatingIcon;

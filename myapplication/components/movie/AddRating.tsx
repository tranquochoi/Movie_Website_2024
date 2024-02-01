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
import { RequestTokenResponse, User } from "@/components/Models/Auth";
import axios from "axios";
import useSWR from "swr";
import { getCookie, setCookie, deleteCookie } from "cookies-next";
import { useRouter } from "next/router";

import { initialize } from "next/dist/server/lib/render-server";
import { createInitialRouterState } from "next/dist/client/components/router-reducer/create-initial-router-state";
import IconStar from "@mui/icons-material/Star";
import { MovieList } from "@/components/Models/MovieRating";
function IconAddRating(props: { id: Number }) {
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  const session_id = getCookie("session_id");
  const user_id = getCookie("user_id");
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);
  const [isLiked, setIsLiked] = useState(false);
  const { data: movieRated, isLoading } = useSWR<MovieList>(
    session_id
      ? `account/${user_id}/rated/movies?language=en-US&page=1&session_id=${session_id}&sort_by=created_at.asc`
      : null,
    fetcher
  );
  const vl =
    movieRated?.results.find((movie) => movie.id == props.id)?.rating / 2;

  const [rating, setRating] = useState(0);

  const toggleBoxVisibility = () => {
    setIsBoxVisible(!isBoxVisible);
  };

  const handleRateMovie = async (value: number) => {
    try {
      value = value * 2;
      const response = await axios.post(
        `https://api.themoviedb.org/3/movie/${props.id}/rating?session_id=${session_id}`,
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
      <Box sx={{ display: "flex", flexDirection: "row", mt: "10px" }}>
        <Box sx={{ color: "#92929D", fontSize: "1rem", pl: "26px" }}>
          Your rating:
        </Box>
        <Button
          onClick={toggleBoxVisibility}
          sx={{ color: "#876", top: "-5px" }}
        >
          <Box>
            <Rating
              name="movie-rating"
              value={rating == 0 ? vl : rating}
              color="#7B61FF"
              precision={0.5}
              onChange={(event, newValue) => {
                setRating(newValue);
                handleRateMovie(newValue);
                toggleBoxVisibility;
              }}
            />
          </Box>
        </Button>
      </Box>
    </>
  );
}
function AddRatingIcon(props: { id: Number }) {
  const session_id = getCookie("session_id");
  return <>{session_id ? <IconAddRating id={props.id} /> : null}</>;
}

export default AddRatingIcon;

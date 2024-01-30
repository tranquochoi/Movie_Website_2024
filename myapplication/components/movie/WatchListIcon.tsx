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
} from "@mui/material";
import { RequestTokenResponse, User } from "@/components/Models/Auth";
import axios from "axios";
import useSWR from "swr";
import { getCookie, setCookie, deleteCookie } from "cookies-next";
import { useRouter } from "next/router";
import { MovieList } from "@/components/Models/Movies";
import { initialize } from "next/dist/server/lib/render-server";
import { createInitialRouterState } from "next/dist/client/components/router-reducer/create-initial-router-state";
import BookmarkIcon from "@mui/icons-material/Bookmark";
function IconWatchList(props: { id: Number }) {
  const session_id = getCookie("session_id");
  const user_id = getCookie("user_id");
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);
  const [isLiked, setIsLiked] = useState(false);
  const { data: movieWL, isLoading } = useSWR<MovieList>(
    session_id
      ? `account/${user_id}/watchlist/movies?language=en-US&page=1&session_id=${session_id}&sort_by=created_at.asc`
      : null,
    fetcher
  );
  useEffect(() => {
    if (movieWL && movieWL.results) {
      const liked = movieWL.results.find((movie) => movie.id === props.id);
      setIsLiked(liked !== undefined);
    }
  }, [movieWL, props.id]);
  const updateWatchList = async () => {
    try {
      const response = await axios.post(
        `https://api.themoviedb.org/3/account/${user_id}/watchlist?session_id=${session_id}&api_key=95c77b4ffbd4a5cc35c3b79d2b9aa4fb`,
        {
          media_type: "movie",
          media_id: props.id,
          watchlist: !isLiked,
        }
      );
      setIsLiked(!isLiked);
    } catch (error) {
      console.error("Error adding to favorite:", error);
    }
  };
  return (
    <>
      {isLiked ? (
        <Box
          onClick={updateWatchList}
          sx={{
            color: "YELLOW",
          }}
        >
          <BookmarkIcon />
        </Box>
      ) : (
        <Box
          onClick={updateWatchList}
          sx={{
            color: "#FFF",
          }}
        >
          <BookmarkIcon />
        </Box>
      )}
    </>
  );
}
function WatchListIcon(props: { id: Number }) {
  const session_id = getCookie("session_id");
  return <>{session_id ? <IconWatchList id={props.id} /> : null}</>;
}

export default WatchListIcon;

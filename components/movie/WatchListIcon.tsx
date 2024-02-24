import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import useSWR from "swr";
import { getCookie } from "cookies-next";
import { Movie, MovieList } from "@/components/Models/Movies";
import BookmarkIcon from "@mui/icons-material/Bookmark";
function IconWatchList(props: { id: Number }) {
  const session_id = getCookie("session_id");
  const user_id = getCookie("user_id");
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);
  const [isLiked, setIsLiked] = useState(false);
  const { data: movieFavorite, isLoading } = useSWR<Movie>(
    session_id
      ? `https://api.themoviedb.org/3/movie/${props.id}/account_states?session_id=${session_id}`
      : null,
    fetcher
  );

  useEffect(() => {
    if (movieFavorite) {
      const liked = movieFavorite.watchlist;
      setIsLiked(liked);
    }
  }, [movieFavorite, props.id]);
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

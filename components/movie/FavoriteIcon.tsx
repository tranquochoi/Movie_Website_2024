import React, { useEffect, useState } from "react";
import { Button, CircularProgress, Box } from "@mui/material";
import axios from "axios";
import useSWR from "swr";
import { getCookie } from "cookies-next";
import { Movie, MovieList } from "@/components/Models/Movies";
import HeartIcon from "@mui/icons-material/Favorite";

function IconFavorite(props: { id: Number }) {
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
      const liked = movieFavorite.favorite;
      setIsLiked(liked);
    }
  }, [movieFavorite, props.id]);

  const updateFavorite = async () => {
    try {
      await axios.post(
        `https://api.themoviedb.org/3/account/${user_id}/favorite?session_id=${session_id}&api_key=95c77b4ffbd4a5cc35c3b79d2b9aa4fb`,
        {
          media_type: "movie",
          media_id: props.id,
          favorite: !isLiked,
        }
      );
      setIsLiked(!isLiked);
    } catch (error) {
      console.error("Error updating favorite:", error);
    }
  };

  return (
    <Button
      onClick={updateFavorite}
      variant="outlined"
      color={isLiked ? "secondary" : "primary"}
      sx={{
        fontFamily: "Arial, sans-serif",
        textTransform: "none",
        color: isLiked ? "white" : "#888",
        padding: "8px",
        width: "8rem",
      }}
    >
      {isLiked ? (
        <>
          <HeartIcon sx={{ color: "#a82424", marginRight: "4px" }} /> Favorites
        </>
      ) : (
        <>Add Favorites</>
      )}
    </Button>
  );
}

function FavoriteIcon(props: { id: Number }) {
  const session_id = getCookie("session_id");
  return <>{session_id ? <IconFavorite id={props.id} /> : null}</>;
}

export default FavoriteIcon;

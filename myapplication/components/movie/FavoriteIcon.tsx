import React, { useEffect, useState } from "react";
import { Button, CircularProgress, Box } from "@mui/material";
import axios from "axios";
import useSWR from "swr";
import { getCookie } from "cookies-next";
import { MovieList } from "@/pages/movie-detail/Models/Movies";
import HeartIcon from "@mui/icons-material/Favorite";

interface IconFavoriteProps {
  id: number;
}

function IconFavorite(props: IconFavoriteProps): JSX.Element {
  const session_id = getCookie("session_id");
  const user_id = getCookie("user_id");
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);
  const [isLiked, setIsLiked] = useState(false);
  const { data: movieFavorite, isLoading } = useSWR<MovieList>(
    session_id
      ? `account/${user_id}/favorite/movies?language=en-US&page=1&session_id=${session_id}&sort_by=created_at.asc`
      : null,
    fetcher
  );

  useEffect(() => {
    if (movieFavorite && movieFavorite.results) {
      const liked = movieFavorite.results.find(
        (movie) => movie.id === props.id
      );
      setIsLiked(liked !== undefined);
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
        color: isLiked ? "red" : "#92929D",
        padding: "12px",
        width: "8rem",
      }}
    >
      {isLiked ? (
        <>
          <HeartIcon sx={{ color: "red", marginRight: "4px" }} /> Favorites
        </>
      ) : (
        <>
          <HeartIcon sx={{ color: "#92929D", marginRight: "4px" }} />  Favorites
        </>
      )}
    </Button>
  );
}

interface FavoriteIconProps {
  id: number;
}

function FavoriteIcon(props: FavoriteIconProps): JSX.Element {
  const session_id = getCookie("session_id");
  return <>{session_id ? <IconFavorite id={props.id} /> : null}</>;
}

export default FavoriteIcon;

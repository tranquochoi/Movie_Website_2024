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

function RenderMovieRelate(props: { data: Movie }) {
  const { data: movieGenres, error: genreError } = useSWR(
    `/genre/movie/list?language=en-US`
  );
  if (!movieGenres) {
    return null;
  }
  const getGenreNameById = (genreId: number) => {
    const genre = movieGenres.genres.find((g) => g.id === genreId);
    return genre ? genre.name : "Unknown Genre";
  };
  const formatDate = (dateString: string) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };
  const truncateMovieTitle = (title: string, maxLength: number) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    }
    return title;
  };
  const renderStarIcons = (voteAverage: number) => {
    const stars = [];
    const rating = voteAverage * 0.5;
    const roundedRating = Math.round(rating);

    for (let i = 1; i <= 5; i++) {
      if (i <= roundedRating) {
        stars.push(<StarIcon key={i} sx={{ fontSize: 24, color: "orange" }} />);
      } else {
        stars.push(
          <StarOutlineIcon key={i} sx={{ fontSize: 24, color: "orange" }} />
        );
      }
    }

    return stars;
  };
  return (
    <>
      <Link href={`/movie-detail/${props.data.id}`} underline="none">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            fontSize: "8px",
            color: "white",
            borderRadius: "4px",
            fontFamily: "YourCustomFont, sans-serif",
            borderBottom: "2px solid #888",
          }}
        >
          <Box sx={{ width: "205px" }}>
            <CardMedia
              style={{ borderRadius: "12px" }}
              component="img"
              alt={props.data.title}
              height="140"
              image={
                props.data.backdrop_path
                  ? "https://image.tmdb.org/t/p/w500" + props.data.backdrop_path
                  : "/nomovie.jpg"
              }
            />
          </Box>
          <Box sx={{ flex: 1, pl: 2 }}>
            <Typography
              sx={{
                color: "white",
                fontFamily: "YourCustomFont, sans-serif",
                fontSize: "14px",
              }}
            >
              {truncateMovieTitle(props.data.title, 15)}
            </Typography>
            <Box sx={{ height: "5px" }} />

            <Stack direction="row" alignItems="center">
              <Box
                sx={{
                  color: "#92929D",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                {props.data.genre_ids?.slice(0, 2).map((genreId) => (
                  <Link
                    key={genreId.toString()}
                    href={`/geners/${genreId}`}
                    underline="none"
                  >
                    <Box
                      sx={{
                        fontSize: "8px",
                        border: "2px solid #888",
                        color: "white",
                        padding: "4px 8px",
                        borderRadius: "4px",
                        fontFamily: "YourCustomFont, sans-serif",
                        transition: "border-color 0.3s",
                        "&:hover": {
                          borderColor: "#fff",
                          backgroundColor: "#333",
                        },
                      }}
                    >
                      {getGenreNameById(genreId)}
                    </Box>
                  </Link>
                ))}
              </Box>
            </Stack>
            <Box sx={{ height: "5px" }} />
            <Typography
              sx={{
                color: "white",
                fontFamily: "YourCustomFont, sans-serif",
                fontSize: "12px",
              }}
            >
              {formatDate(props.data.release_date)}
            </Typography>
            <Box sx={{ height: "10px" }} />
            <Box>{renderStarIcons(props.data.vote_average)}</Box>
          </Box>
        </Box>
      </Link>
    </>
  );
}
export default RenderMovieRelate;

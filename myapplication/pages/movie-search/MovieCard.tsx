import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import EventIcon from "@mui/icons-material/Event";
import { Movie } from "./Models/Movies";
import { format } from "date-fns";

interface MovieCardProps {
  movie: Movie;
}
const truncateText = (
  text: string,
  maxLines: number,
  maxCharsPerLine: number
) => {
  const lines = text.split("\n").slice(0, maxLines);
  const truncatedText = lines
    .map((line) =>
      line.length > maxCharsPerLine
        ? line.slice(0, maxCharsPerLine - 3) + "..."
        : line
    )
    .join("\n");
  return truncatedText;
};

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => (
  <Link href={`/movie-detail/${movie.id}`} underline="none">
    <Card
      sx={{
        boxShadow: "none",
        transition: "filter 0.2s",
        "&:hover": {
          filter: "brightness(1.3)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          bgcolor: "#242A32",
          color: "white",
          position: "relative",
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "/filmdefault.jpg"
          }
          alt={movie.title}
          sx={{
            flex: "1 1 auto",
            maxWidth: "105px",
            maxHeight: "167px",
            borderRadius: "16px",
            objectFit: "cover",
            objectPosition: "top",
          }}
        />
        <CardContent
          sx={{
            flex: "2 1 auto",
            padding: "10px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(100px)",
              zIndex: 0,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              marginBottom: "8px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              textAlign: "left",
              zIndex: 1,
              position: "relative",
              color: "white",
            }}
          >
            {truncateText(movie.title, 1, 25)}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            <StarIcon
              sx={{ fontSize: 20, color: "orange", marginRight: "4px" }}
            />
            <Typography>{(movie.vote_average * 0.5).toFixed(1)}</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "8px",
              position: "relative",
              zIndex: 1,
            }}
          >
            <EventIcon
              sx={{ fontSize: 20, color: "#fff", marginRight: "4px" }}
            />
            <Typography>
              {movie.release_date && (
                <>{format(new Date(movie.release_date), "yyyy/MM/dd")}</>
              )}
            </Typography>
          </Box>
          <Typography
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              zIndex: 1,
              position: "relative",
              color: "white",
              paddingTop: "15px",
              fontSize: "15px",
              maxHeight: "3em",
              lineHeight: "1.5em",
              textAlign: "left",
            }}
          >
            {truncateText(movie.overview, 1, 39)}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  </Link>
);

export default MovieCard;

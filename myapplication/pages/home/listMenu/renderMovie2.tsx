import { Movie } from "@/pages/movie-detail/Models/Movies";
import { Box, Card, CardContent, Link, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { ListGenre } from "@/pages/movie-detail/Models/Geners";
import axios from "axios";
import useSWR from "swr";

function RenderMovie2(props: { data: Movie }) {
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);

  const { data: gener } = useSWR<ListGenre>(
    "genre/movie/list?language=en",
    fetcher
  );

  const convertToStarRating = (voteAverage: number): string => {
    const starRating = voteAverage / 2;

    const shortenedRating = parseFloat(starRating.toFixed(1));

    return shortenedRating % 1 === 0 ? shortenedRating.toFixed(1) : shortenedRating.toString();
  };

  return (
    <Box
      key={props.data.id.toString()}
      sx={{
        flex: "0 0 auto",
        marginRight: 0.5,
        width: "232px",
      }}
    >
      <Link href={`/movie-detail/${props.data.id}`} underline="none">
        <Card
          elevation={3}
          sx={{
            height: "130px",
            width: "100%",
            borderRadius: "16px",
            boxShadow: "none",
            position: "relative",
          }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "16px",
              padding: "4px",
              top: "20%",
              left: "80%",
              position: "absolute",
              transform: "translate(-8%, -40%)",
              color: "white",
              fontSize: "12px",
            }}
          >
            <StarIcon sx={{ fontSize: 24, color: "orange" }} />
            {convertToStarRating(props.data.vote_average)}
          </Box>
          <Box
            sx={{
              backgroundColor: "rgba(255, 0, 0, 1)",
              padding: "4px",
              top: "20%",
              left: "2%",
              position: "absolute",
              transform: "translate(-8%, -40%)",
              color: "white",
              fontSize: "15px",
              fontWeight: "bold",
            }}
          >
            Recomend
          </Box>
          <Box
            component="img"
            sx={{
              height: "100%",
              width: "100%",
            }}
            src={`https://image.tmdb.org/t/p/w500${props.data.backdrop_path}`}
            alt={props.data.title}
          />

          <CardContent />
        </Card>
        <Typography
          sx={{
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
            marginBottom: "0px",
            marginLeft: "0px",
            marginTop: "8px",
            color: "#FFF",
            fontSize: "15px",
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          {props.data.title}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography
            sx={{
              marginLeft: "0px",
              overflow: "hidden",
              textAlign: "left",
              color: "#888",
              fontSize: "12px",
              width: "30%",
            }}
          >
            {props.data.release_date}
          </Typography>
          {gener?.genres
            .filter((gen) => props.data.genre_ids.includes(gen.id))
            .slice(0, 2)
            .map((gen) => (
              <Typography
                key={gen.id}
                sx={{
                  color: "#888",
                  marginRight: "12px",
                  fontSize: "12px",
                }}
              >
                | {gen.name}
              </Typography>
            ))}
        </Box>
      </Link>
    </Box>
  );
}

export default RenderMovie2;

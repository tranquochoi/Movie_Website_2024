import { Movie } from "@/components/Models/Movies";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

function RenderMovieIndex(props: { data: Movie }) {
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            marginTop: "20px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "8px",
            padding: "2px",
            left: "70%",
            position: "absolute",
            transform: "translate(-8%, -40%)",
            color: "white",
            fontSize: "12px",
          }}
        >
          <StarIcon sx={{ fontSize: 24, color: "orange" }} />
          {(props.data.vote_average * 0.5).toFixed(1)}
        </Box>
      </Box>
      <Card
        elevation={5}
        className="small-card"
        sx={{
          height: "200px",
          width: "139.581px",
          borderRadius: "16px",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: "100%",
            objectFit: "cover",
            width: "100%",
            borderRadius: "16px",
          }}
          image={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`}
          alt={props.data.title}
        />
        <CardContent />
      </Card>
    </>
  );
}

export default RenderMovieIndex;

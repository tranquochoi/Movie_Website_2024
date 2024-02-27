import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Movie } from "@/components/Models/Movies";

function RenderMovieIndex(props: { data: Movie }) {
  const voteAverage = props.data?.vote_average ?? 0; // Sử dụng optional chaining và nullish coalescing
  const posterPath = props.data?.poster_path || ""; // Kiểm tra và xử lý trường hợp poster_path không tồn tại
  const title = props.data?.title || ""; // Kiểm tra và xử lý trường hợp title không tồn tại

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
          {(voteAverage * 0.5).toFixed(1)}
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
          image={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title} // Sử dụng biến title đã kiểm tra
        />
        <CardContent />
      </Card>
    </>
  );
}

export default RenderMovieIndex;


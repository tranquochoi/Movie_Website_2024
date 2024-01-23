import { Movie } from "@/pages/movie-detail/Models/Movies";
import { Box, Card, CardContent, Link, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

function RenderMovie(props: { data: Movie }) {
  return (
    <Box
      key={props.data.id.toString()}
      sx={{
        flex: "0 0 auto",
        marginRight: 0.5,
        width: "120px",
      }}
    >
      <Link href={`/movie-detail/${props.data.id}`} underline="none">
        <Card
          elevation={3}
          sx={{
            height: "174px",
            width: "100%",
            borderRadius: "16px",
            boxShadow: "none",
            position: "relative",
          }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "8px",
              padding: "2px",
              top: "15%",
              left: "65%",
              position: "absolute",
              transform: "translate(-8%, -40%)",
              color: "white",
              fontSize: "12px",
            }}
          >
            <StarIcon sx={{ fontSize: 24, color: "orange" }} />
            {(props.data.vote_average * 0.5).toFixed(1)}
          </Box>
          <Box
            component="img"
            sx={{
              height: "100%",
              width: "100%",
            }}
            src={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`}
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
        <Typography
          sx={{
            marginLeft: "0px",
            overflow: "hidden",
            textAlign: "left",
            color: "#888",
            fontSize: "12px",
          }}
        >
          {props.data.release_date}
        </Typography>
      </Link>
    </Box>
  );
}

export default RenderMovie;

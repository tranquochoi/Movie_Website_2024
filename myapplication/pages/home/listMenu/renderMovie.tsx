import { Movie } from "@/pages/movie-detail/Models/Movies";
import { Box, Card, CardContent, Link, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const formatDate = (dateString: string) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

function RenderMovie(props: { data: Movie }) {
  const formattedReleaseDate = formatDate(props.data.release_date);

  return (
    <>
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
              borderBottomLeftRadius: "0px",
              borderBottomRightRadius: "0px",
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
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              borderBottomLeftRadius: "16px",
              borderBottomRightRadius: "16px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${props.data.backdrop_path})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(40px)",
                zIndex: 0,
              }}
            />
            <Typography
              sx={{
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 1,
                color: "#FFF",
                fontSize: "14px",
                textAlign: "left",
                fontWeight: "bold",
                pl: "5px",
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
                pl: "5px",
                pb: "5px"
              }}
            >
              {formattedReleaseDate}
            </Typography>
          </Box>
        </Link>
      </Box>
    </>

  );
}

export default RenderMovie;

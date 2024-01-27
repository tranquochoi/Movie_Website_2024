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
            borderBottomLeftRadius: "0px", // Góc bo tròn cho góc đáy bên trái
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
            borderRadius: "0px",
            borderBottomLeftRadius: "16px", // Góc bo tròn cho góc đáy bên trái
            borderBottomRightRadius: "16px",
            // Góc bo tròn cho hình nền
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
              filter: "blur(40px)", // Điều chỉnh độ mờ tại đây
              zIndex: 0,
            }}
          />
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
            }}
          >
            {props.data.release_date}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
}

export default RenderMovie;

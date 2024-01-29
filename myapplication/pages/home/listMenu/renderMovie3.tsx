import { Movie } from "@/pages/movie-detail/Models/Movies";
import { Box, Card, CardContent, Link, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { ListGenre } from "@/pages/movie-detail/Models/Geners";
import axios from "axios";
import useSWR from "swr";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
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
function RenderMovie3(props: { data: Movie }) {
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);

  const { data: gener } = useSWR<ListGenre>(
    "genre/movie/list?language=en",
    fetcher
  );

  return (
    <Box
      key={props.data.id.toString()}
      sx={{
        flex: "0 0 auto",
        marginRight: 0.5,
        width: "212px",
        position: "relative",
      }}
    >
      <Link href={`/movie-detail/${props.data.id}`} underline="none">
        <Card
          elevation={3}
          sx={{
            height: "256px",
            width: "100%",
            boxShadow: "none",
            position: "relative",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
          }}
        >
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
          {/* Pseudo-element để làm mờ ảnh nền */}

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
          ></Box>
          {renderStarIcons(props.data.vote_average)}
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
              pl: "8px",
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
              width: "100%",
              pl: "8px",
            }}
          >
            {props.data.release_date}
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "row", pl: "8px" }}>
            {gener?.genres
              .filter((gen) => props.data.genre_ids.includes(gen.id))
              .slice(0, 2)
              .map((gen) => (
                <Typography
                  key={gen.id}
                  sx={{
                    color: "#888",
                    marginRight: "12px",
                    fontSize: "15px",
                  }}
                >
                  {gen.name}
                </Typography>
              ))}
          </Box>
        </Box>
      </Link>
    </Box>
  );
}

export default RenderMovie3;

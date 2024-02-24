import { Movie } from "@/components/Models/Movies";
import { Box, Card, CardContent, Link, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { ListGenre } from "@/components/Models/Geners";
import axios from "axios";
import useSWR from "swr";
import ViewIcon from "@mui/icons-material/Visibility";
function formatNumber(num: number) {
  if (num >= 1) {
    return (num / 1).toFixed(1) + "k";
  }
  return num;
}
function RenderMovie2(props: { data: Movie }) {
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
        width: "232px",
      }}
    >
      <Link href={`/movie-detail/${props.data.id}`} underline="none">
        <Card
          elevation={3}
          sx={{
            height: "130px",
            width: "100%",

            boxShadow: "none",
            position: "relative",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "8px",
              padding: "3px",
              top: "15%",
              left: "60%",
              position: "absolute",
              transform: "translate(-8%, -40%)",
              color: "white",
              fontSize: "12px",
              width: "90px",
            }}
          >
            <ViewIcon sx={{ fontSize: 24, color: "#888" }} />
            {formatNumber(props.data.popularity)}
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
          />

          <Typography
            sx={{
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
              marginBottom: "0px",
              marginLeft: "15px",
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
              marginLeft: "15px",
              overflow: "hidden",
              textAlign: "left",
              color: "#888",
              fontSize: "12px",
              width: "30%",
            }}
          >
            {props.data.release_date}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pl: "15px" }}>
            {gener?.genres
              .filter((gen) => props.data.genre_ids.includes(gen.id))
              .slice(0, 3)
              .map((gen) => (
                <Typography
                  key={gen.id}
                  sx={{
                    color: "#888",
                    marginRight: "12px",
                    fontSize: "12px",
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

export default RenderMovie2;

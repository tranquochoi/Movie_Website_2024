import { Movie } from "@/pages/movie-detail/Models/Movies";
import { Box, Grid, Link, Typography, Paper } from "@mui/material";
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

function truncateText(text: string, maxLength: number) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
}

const formatDate = (dateString: string) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

function RenderMovie3(props: { data: Movie }) {
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);

  const { data: gener } = useSWR<ListGenre>(
    "genre/movie/list?language=en",
    fetcher
  );

  const formattedReleaseDate = formatDate(props.data.release_date);

  return (
    <Grid container spacing={4}>

      <Grid item xs={12}>
        <Box sx={{ paddingBottom: "10px" }} />
        <Paper elevation={4} sx={{
          borderRadius: "16px", backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}>

          <Link href={`/movie-detail/${props.data.id}`} underline="none">
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  width: "100px",
                  height: "auto",
                  objectFit: "cover",
                  borderTopLeftRadius: "16px",
                  borderBottomLeftRadius: "16px",
                  marginRight: 4,

                }}
                src={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`}
                alt={props.data.title}
              />

              <Box sx={{ textAlign: "left", flex: 1 }}>
                <Typography
                  sx={{
                    color: "#FFF",
                    fontSize: "15px",
                    fontWeight: "bold",
                    marginBottom: "5px",
                  }}
                >
                  {truncateText(props.data.title, 24)}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    marginBottom: "5px",
                  }}
                >
                  {renderStarIcons(props.data.vote_average)}
                </Box>
                <Box>
                  <Typography
                    sx={{ color: "#888", fontSize: "14px", }}
                  >
                    {formattedReleaseDate}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: "5px",

                  }}
                >
                  {gener?.genres
                    .filter((gen) =>
                      props.data.genre_ids.includes(parseInt(gen.id))
                    )
                    .slice(0, 2)
                    .map((gen) => (
                      <Typography
                        key={gen.id}
                        sx={{
                          fontSize: "12px",
                          border: "2px solid #888",
                          color: "white ",
                          padding: "2px 8px",
                          borderRadius: "4px",
                          marginRight: "4px",
                          marginTop: "10px",
                          transition: "border-color 0.3s",
                          '&:hover': {
                            borderColor: "#fff",
                            backgroundColor: "#333",
                          },
                        }}
                      >
                        {gen.name}
                      </Typography>
                    ))}
                </Box>
              </Box>
            </Box>
          </Link>
        </Paper>
      </Grid>
    </Grid >
  );
}

export default RenderMovie3;

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import useSWR from "swr";
import Layout from "@/components/landing_page/layout";
import axios from "axios";
import { NextPageWithLayout } from "@/pages/_app";
import HomeMenu from "@/components/landing_page/homeLayoutMenu";
import HomeDetail from "..";

interface MovieList {
  results: Movie[];
}

interface Movie {
  id: string;
  title: string;
  poster_path: string;
}

const Now: NextPageWithLayout = () => {
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);
  const { data, error } = useSWR<MovieList>("/movie/now_playing", fetcher);

  if (!data) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography>Error loading data</Typography>;
  }

  const moviesToShow = data.results.slice(0, 6);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 1,
          flexWrap: "nowrap",
        }}
      >
        {data?.results.slice(0, 6).map((movie) => (
          <Box
            key={movie.id}
            sx={{
              flex: "0 0 auto",
              marginRight: 0.5,
            }}
          >
            <Link href={`/movie-detail/${movie.id}`} underline="none">
              <Card
                elevation={3}
                className="zoom-card small-card"
                sx={{ height: "145px", width: "100px", borderRadius: "16px" }}
              >
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: "16px",
                    overflow: "hidden",
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
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 80,
                      left: 0,
                      width: "100%",
                      height: "45%",
                      background: "rgba(0, 0, 0, 0.5)", // Đặt màu đen trong suốt tại đây
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white", // Chữ màu trắng
                      borderBottomRadius: "16px",
                      textAlign: "center",
                      padding: "8px", // Padding để tạo khoảng cách giữa nền đen và nội dung
                    }}
                  >
                    <Typography variant="subtitle2">{movie.title}</Typography>
                    {/* Các thông tin khác có thể thêm vào đây */}
                  </Box>
                </Box>
                <CardContent />
              </Card>
            </Link>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 1,
          flexWrap: "nowrap",
        }}
      >
        {data?.results.slice(6, 12).map((movie) => (
          <Box
            key={movie.id}
            sx={{
              flex: "0 0 auto",
              marginRight: 0.5,
            }}
          >
            <Link href={`/movie-detail/${movie.id}`} underline="none">
              <Card
                elevation={3}
                className="zoom-card small-card"
                sx={{ height: "145px", width: "100px", borderRadius: "16px" }}
              >
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: "16px",
                    overflow: "hidden",
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
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 80,
                      left: 0,
                      width: "100%",
                      height: "45%",
                      background: "rgba(0, 0, 0, 0.5)", // Đặt màu đen trong suốt tại đây
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white", // Chữ màu trắng
                      borderBottomRadius: "16px",
                      textAlign: "center",
                      padding: "8px", // Padding để tạo khoảng cách giữa nền đen và nội dung
                    }}
                  >
                    <Typography variant="subtitle2">{movie.title}</Typography>
                    {/* Các thông tin khác có thể thêm vào đây */}
                  </Box>
                </Box>
                <CardContent />
              </Card>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

Now.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Box>
        <HomeDetail />
      </Box>
      <HomeMenu />
      <Box>{page}</Box>
    </Layout>
  );
};

export default Now;

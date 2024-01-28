import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import axios from "axios";
import { MovieList } from "../movie-detail/Models/Movies";
import RenderMovie from "../home/listMenu/renderMovie";
import { ListGenre } from "../movie-detail/Models/Geners";
import NavGenres from "@/components/landing_page/NavGenres";
import {
  Box,
  CircularProgress,
  Typography,
  Button,
  Popover,
  Grid,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NextPageWithLayout } from "../_app";

const Categories: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  const [selectedGenre, setSelectedGenre] = useState(0);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [movies, setMovies] = useState<MovieList | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `/movie/top_rated?page=${currentPage}` // Thay đổi endpoint và thêm tham số trang
        );
        const newMovies = response.data;
        setMovies((prevMovies) => ({
          page: newMovies.page,
          results: prevMovies
            ? [...prevMovies.results, ...newMovies.results]
            : newMovies.results,
        }));
      } catch (error) {
        // Xử lý lỗi nếu cần
      }
    };

    fetchMovies();
  }, [currentPage]);

  const { data: gener } = useSWR<ListGenre>(
    "genre/movie/list?language=en&page=3",
    fetcher
  );

  const movieGener = movies?.results.filter((movie) =>
    movie.genre_ids.includes(
      selectedGenre !== 0 ? selectedGenre : parseInt(id as string)
    )
  );

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  if (!movies) {
    return <CircularProgress />;
  }

  return (
    <>
      <NavGenres />
      <Box
        sx={{
          color: "#92929D",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          backgroundColor: "",
          padding: "6px",
        }}
      >
        <Button
          onClick={handleMenuOpen}
          sx={{ display: "flex", alignItems: "center", color: "white" }}
        >
          Thể loại <KeyboardArrowDownIcon />
        </Button>

        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          PaperProps={{
            style: {
              backgroundColor: "#242A32",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              padding: "6px",
            }}
          >
            {gener?.genres.map((genre) => (
              <Box
                key={genre.id.toString()}
                sx={{
                  border: "2px solid #888",
                  padding: "4px 8px",
                  borderRadius: "2px",
                  marginRight: "8px",
                  marginTop: "10px",
                  backgroundColor:
                    selectedGenre == genre.id ? "#4a92ff" : "transparent",
                  color: selectedGenre == genre.id ? "white" : "#949494",
                  "&:hover": {
                    backgroundColor: "#4a92ff",
                    cursor: "pointer",
                  },
                }}
                onClick={() => {
                  setSelectedGenre(genre.id);
                  handleMenuClose();
                }}
              >
                {genre.name}
              </Box>
            ))}
          </Box>
        </Popover>
      </Box>
      <Typography
        sx={{
          color: "white",
          fontSize: "18px",
          textAlign: "center",
          padding: "10px",
          backgroundColor: "#161722",
          borderRadius: "0px",
          fontWeight: "bold",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Selected:
        {
          gener?.genres.find(
            (tl) => tl.id == (selectedGenre != 0 ? selectedGenre : id)
          )?.name
        }
      </Typography>
      <Box sx={{ padding: "6px", textAlign: "center" }}>
        <Grid container spacing={3}>
          {movieGener?.map((movie, index) => (
            <Grid item xs={4} sm={3} md={4} key={index}>
              <RenderMovie data={movie} />
            </Grid>
          ))}
        </Grid>
        <Button onClick={handleLoadMore}>Load More</Button>
      </Box>
    </>
  );
};

export default Categories;

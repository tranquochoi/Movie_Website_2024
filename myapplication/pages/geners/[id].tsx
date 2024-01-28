import React, { useState, useEffect,useRef } from "react";
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


interface CategoriesProps {}

const Categories: React.FC<CategoriesProps> = () => {
  const router = useRouter();
  const { id } = router.query;
  const [selectedGenre, setSelectedGenre] = useState(0);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState<MovieList["results"] | null>(null);
  const [moviesPerPage, setMoviesPerPage] = useState(9);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);


  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const fetcher = (url: string) => axios.get(url).then((response) => response.data);

  // Sử dụng hook useEffect để theo dõi thay đổi của id trong URL
  useEffect(() => {
    // Kiểm tra xem id có tồn tại và là một số không
    if (id && !isNaN(parseInt(id as string))) {
      setSelectedGenre(parseInt(id as string));
    }
  }, [id]);

  const { data: genreData, isLoading: genreLoading, error: genreError } = useSWR<ListGenre>(
    "genre/movie/list?language=en&page=3",
    fetcher
  );

  const genre = genreData?.genres.find((g) => g.id === selectedGenre);

  const { data: movieData, isLoading: movieLoading, error: movieError } = useSWR<MovieList>(
    genre ? `/discover/movie?with_genres=${genre.id}&page=${currentPage}` : null,
    fetcher
  );

  useEffect(() => {
    if (movieData?.results) {
      setMovies((prevMovies) =>
        prevMovies ? [...prevMovies, ...movieData.results] : movieData.results
      );
    }
  }, [movieData]);

  const loadMoreMovies = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const displayedMovies = movies ? movies.slice(0, currentPage * moviesPerPage) : null;

  if (genreLoading || movieLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (genreError || movieError) {
    return <Typography>Error</Typography>;
  }

  if (!genreData) {
    return <>Không có dữ liệu về thể loại</>;
  }

  const movieGener = movies?.filter((movie) =>
    movie.genre_ids.includes(selectedGenre !== 0 ? selectedGenre : parseInt(id as string))
  );

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
            {genreData.genres.map((genre) => (
              <Box
                key={genre.id.toString()}
                sx={{
                  border: "2px solid #888",
                  padding: "4px 8px",
                  borderRadius: "2px",
                  marginRight: "8px",
                  marginTop: "10px",
                  backgroundColor:
                    selectedGenre === genre.id ? "#4a92ff" : "transparent",
                  color: selectedGenre === genre.id ? "white" : "#949494",
                  "&:hover": {
                    backgroundColor: "#4a92ff",
                    cursor: "pointer",
                  },
                }}
                onClick={() => {
                  setSelectedGenre(genre.id);
                  handleMenuClose();
                  setCurrentPage(1);
                  setMovies(null);
                  router.push(`/categories/${genre.id}`); // Chuyển trang với thể loại được chọn
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
        Selected: {genre?.name}
      </Typography>
      <Box sx={{ padding: "6px", textAlign: "center" }}>
        <Grid container spacing={3}>
          {movieGener?.map((movie, index) => (
            <Grid item xs={4} sm={3} md={4} key={index}>
              <RenderMovie data={movie} />
            </Grid>
          ))}
        </Grid>
        {movies && displayedMovies && displayedMovies.length < movies.length && (
          <Button onClick={loadMoreMovies} sx={{ color: "white", marginTop: "10px" }}>
            Load More
          </Button>
        )}
      </Box>
    </>
  );
};

export default Categories;
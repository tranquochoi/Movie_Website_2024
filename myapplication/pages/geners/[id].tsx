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
import RenderMovie2 from "../home/listMenu/renderMovie2";
import RenderMovie3 from "../home/listMenu/renderMovie3";
import RenderMovie4 from "../home/listMenu/renderMovie4";

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
          `/movie/top_rated?page=${currentPage}`
        );
        const newMovies = response.data;

        setMovies((prevMovies) => ({
          page: newMovies.page,
          results: prevMovies
            ? [
              ...prevMovies.results,
              ...newMovies.results.filter(
                (newMovie: { id: Int16Array }) =>
                  !prevMovies.results.some(
                    (existingMovie) => existingMovie.id === newMovie.id
                  )
              ),
            ]
            : newMovies.results,
        }));
      } catch (error) { }
    };

    fetchMovies();
  }, [currentPage]);

  const { data: gener } = useSWR<ListGenre>(
    "genre/movie/list?language=en&page=3",
    fetcher
  );

  const movieGener = movies?.results
    ?.filter((movie) =>
      movie.genre_ids.includes(
        selectedGenre !== 0 ? selectedGenre : parseInt(id as string)
      )
    )
    .filter(
      (movie, index, self) => index === self.findIndex((m) => m.id === movie.id)
    );

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  if (!movies) {
    return <CircularProgress />;
  }

  const maxPopoverHeight = 10 * 20;

  return (
    <>
      <NavGenres />
      <Box
        sx={{
          color: "#92929D",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          paddingLeft: "12px",
        }}
      >
        <Button
          onClick={handleMenuOpen}
          sx={{
            display: "flex",
            alignItems: "center",
            color: "white",
            textTransform: "none",
            fontSize: "18px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Genres <KeyboardArrowDownIcon />
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
              maxHeight: `${maxPopoverHeight}px`,
              overflowY: "auto",
              display: "flex", // Sử dụng flexbox để chia thành hai cột
              flexDirection: "row", // Sắp xếp các phần tử theo hàng ngang
              flexWrap: "wrap", // Cho phép các phần tử chuyển hàng khi không đủ chỗ
              justifyContent: "space-between", // Canh chỉnh các phần tử đều ra hai bên
              padding: "16px",
            },
          }}
        >
          <Box sx={{ width: "calc(50% - 16px)" }}>
            {/* Hiển thị các thể loại trong cột 1 */}
            {gener?.genres.slice(0, Math.ceil(gener.genres.length / 2)).map((genre) => (
              <Box
                key={genre.id.toString()}
                sx={{
                  border: "2px solid #888",
                  padding: "4px 8px",
                  borderRadius: "2px",
                  marginBottom: "8px",
                  backgroundColor:
                    selectedGenre == genre.id ? "#0CC2FF95" : "transparent",
                  color: selectedGenre == genre.id ? "white" : "#fff",
                  "&:hover": {
                    backgroundColor: "#333",
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
          <Box sx={{ width: "calc(50% - 16px)" }}>
            {/* Hiển thị các thể loại trong cột 2 */}
            {gener?.genres.slice(Math.ceil(gener.genres.length / 2)).map((genre) => (
              <Box
                key={genre.id.toString()}
                sx={{
                  border: "2px solid #888",
                  padding: "4px 8px",
                  borderRadius: "2px",
                  marginBottom: "8px",
                  backgroundColor:
                    selectedGenre == genre.id ? "#0CC2FF95" : "transparent",
                  color: selectedGenre == genre.id ? "white" : "#fff",
                  "&:hover": {
                    backgroundColor: "#333",
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
      <Box
        sx={{
          color: "white",
          fontSize: "18px",
          textAlign: "center",
          padding: "10px",
          backgroundColor: "#161722",
          borderRadius: "0px",
          fontWeight: "bold",
        }}
      >
        Selected:
        {
          gener?.genres.find(
            (tl) => tl.id == (selectedGenre != 0 ? selectedGenre : id)
          )?.name
        }
      </Box>
      <Box sx={{ padding: "16px", textAlign: "center" }}>
        <Grid container spacing={1}>
          {movieGener?.map((movie, index) => (
            <Grid item xs={12} sm={4} md={4} key={index}>
              <RenderMovie4 data={movie} />
            </Grid>
          ))}
        </Grid>
        {movieGener && movieGener.length > 0 && (
          <Button
            onClick={handleLoadMore}
            style={{
              color: "white",
              backgroundColor: "#00BFFF",
              padding: "8px 16px",
              margin: "32px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              textTransform: "none",
              fontFamily: "Arial, sans-serif",
            }}
          >
            Load More
          </Button>
        )}

        {!movieGener ||
          (movieGener.length === 0 && (
            <Box
              sx={{
                color: "white",
                fontSize: "16px",
                marginTop: "20px",
              }}
            >
              Nothing to show.
            </Box>
          ))}
      </Box>
    </>
  );
};

export default Categories;

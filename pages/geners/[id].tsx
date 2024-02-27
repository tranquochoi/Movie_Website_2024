import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import axios from "axios";
import { MovieList } from "../../components/Models/Movies";
import { ListGenre } from "../../components/Models/Geners";
import {
  Box,
  CircularProgress,
  Typography,
  Button,
  Popover,
  Grid,
  Select,
  MenuItem,
  colors,
} from "@mui/material";
import RenderMovie4 from "../home/listMenu/renderMovie4";

const Categories = () => {
  const router = useRouter();
  const { id } = router.query;
  const [selectedGenre, setSelectedGenre] = useState(0);
  const [al, setAl] = useState(false);

  useEffect(() => {
    if (!al && id) {
      setSelectedGenre(parseInt(id as string));
    }
  }, [id, al]);

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [movies, setMovies] = useState<MovieList | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const lastMovieRef = useRef<HTMLDivElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleGenreSelect = (genreId: number) => {
    setSelectedGenre(genreId);
    handleMenuClose();
  };

  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `/movie/popular?page=${currentPage}&per_page=${perPage}`
      );
      const newMovies = response.data;

      setMovies((prevMovies) => ({
        page: newMovies.page,
        results: prevMovies
          ? [
              ...prevMovies.results,
              ...newMovies.results.filter(
                (newMovie: { id: number }) =>
                  !prevMovies.results.some(
                    (existingMovie) => existingMovie.id === newMovie.id
                  )
              ),
            ]
          : newMovies.results,
      }));
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [currentPage, perPage]);

  const { data: gener } = useSWR<ListGenre>(
    "genre/movie/list?language=en&page=3",
    fetcher
  );

  const allGenre = { id: 0, name: "All" };
  const genresWithAll = gener?.genres ? [allGenre, ...gener.genres] : [];

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
    setPerPage(10);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        handleLoadMore();
      }
    }, options);

    if (lastMovieRef.current) {
      observer.observe(lastMovieRef.current);
    }

    return () => {
      if (lastMovieRef.current) {
        observer.unobserve(lastMovieRef.current);
      }
    };
  }, [lastMovieRef.current, handleLoadMore]);

  if (!movies || !gener) {
    return (
      <Box sx={{ textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Select sx={{backgroundColor:'white'}}
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(parseInt(e.target.value as string))}
        
      >
        {gener?.genres.map((genre) => (
          <MenuItem key={genre.id} value={genre.id}>
            {genre.name}
          </MenuItem>
        ))}
      </Select>
      <Box
        sx={{
          color: "#92929D",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          paddingLeft: "12px",
        }}
      >
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
              maxHeight: `300px`,
              overflowY: "auto",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              padding: "14px",
              width: "100%",
            },
          }}
        >
          <Box sx={{ width: "calc(50% - 16px)" }}>
            {genresWithAll
              .slice(0, Math.ceil(genresWithAll.length / 2))
              .map((genre) => (
                <Box
                  key={genre.id.toString()}
                  sx={{
                    border: "2px solid #888",
                    padding: "4px 8px",
                    borderRadius: "2px",
                    marginBottom: "8px",
                    backgroundColor:
                      selectedGenre === genre.id ? "#0CC2FF95" : "transparent",
                    color: selectedGenre === genre.id ? "white" : "#fff",
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
                  {genre.id === 0 ? "All" : genre.name}
                </Box>
              ))}
          </Box>
          <Box sx={{ width: "calc(50% - 16px)" }}>
            {genresWithAll
              .slice(Math.ceil(genresWithAll.length / 2))
              .map((genre) => (
                <Box
                  key={genre.id.toString()}
                  sx={{
                    border: "2px solid #888",
                    padding: "4px 8px",
                    borderRadius: "2px",
                    marginBottom: "8px",
                    backgroundColor:
                      selectedGenre === genre.id ? "#0CC2FF95" : "transparent",
                    color: selectedGenre === genre.id ? "white" : "#fff",
                    "&:hover": {
                      backgroundColor: "#333",
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => {
                    setSelectedGenre(genre.id);
                    setAl(true);
                    handleMenuClose();
                  }}
                >
                  {genre.id === 0 ? "All" : genre.name}
                </Box>
              ))}
          </Box>
        </Popover>
      </Box>

      <Box sx={{ padding: "16px", textAlign: "center" }}>
        <Grid container spacing={1}>
          {movieGener?.map((movie, index) => (
            <Grid item xs={12} sm={4} md={4} key={index}>
              {/* Assign the ref to the last movie element */}
              {index === movieGener.length - 1 ? (
                <div ref={lastMovieRef}>
                  <RenderMovie4 data={movie} />
                </div>
              ) : (
                <RenderMovie4 data={movie} />
              )}
            </Grid>
          ))}
        </Grid>
        {movieGener && movieGener.length > 0 && (
          <Button
            onClick={handleLoadMore}
            style={{
              color: "white",
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
            Loading...
          </Button>
        )}
      </Box>
    </>
  );
};

export default Categories;

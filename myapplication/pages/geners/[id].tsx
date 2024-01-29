<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useState, useEffect, useRef } from "react";
>>>>>>> origin/feature/home
import { useRouter } from "next/router";
import useSWR from "swr";
import axios from "axios";
import { MovieList } from "../movie-detail/Models/Movies";
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
<<<<<<< HEAD
import { initializeTraceState } from "next/dist/trace";
=======
import RenderMovie4 from "../home/listMenu/renderMovie4";
>>>>>>> origin/feature/home

const Categories: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  const [selectedGenre, setSelectedGenre] = useState(0);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
<<<<<<< HEAD
=======
  const [movies, setMovies] = useState<MovieList | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const lastMovieRef = useRef<HTMLDivElement>(null);
>>>>>>> origin/feature/home

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
<<<<<<< HEAD
  const { data, isLoading, error } = useSWR<MovieList>(
    "/movie/now_playing",
    fetcher
  );
=======

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `/movie/top_rated?page=${currentPage}&per_page=${perPage}`
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

  useEffect(() => {
    fetchMovies();
  }, [currentPage, perPage]);
>>>>>>> origin/feature/home

  const { data: gener } = useSWR<ListGenre>(
    "genre/movie/list?language=en&page=3",
    fetcher
  );
  const movieGener = data?.results.filter((movie) =>
    movie.genre_ids.includes(
      selectedGenre != 0 ? selectedGenre : parseInt(id as string)
    )
  );

<<<<<<< HEAD
  if (isLoading) {
    return <Typography>{isLoading && <CircularProgress />}</Typography>;
=======
  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    setPerPage(10); // Set lại số lượng phim muốn hiển thị mỗi lần khi ấn "Load More"
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the target is visible
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        handleLoadMore();
      }
    }, options);

    // Attach the observer to the last movie element
    if (lastMovieRef.current) {
      observer.observe(lastMovieRef.current);
    }

    // Clean up the observer when component unmounts
    return () => {
      if (lastMovieRef.current) {
        observer.unobserve(lastMovieRef.current);
      }
    };
  }, [lastMovieRef.current, handleLoadMore]);

  if (!movies) {
    return <CircularProgress />;
>>>>>>> origin/feature/home
  }

  if (error) {
    return <Typography sx={{ color: "red" }}>Error</Typography>;
  }

  if (!data) {
    return <>Không có dữ liệu</>;
  }

  return (
    <>
      <NavGenres
        handleMenuOpen={handleMenuOpen}
        gener={gener}
        selectedGenre={selectedGenre}
        handleGenreSelect={handleGenreSelect}
      />
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
<<<<<<< HEAD
        <Button
          onClick={handleMenuOpen}
          sx={{ display: "flex", alignItems: "center", color: "white" }}
        >
          Thể loại <KeyboardArrowDownIcon />
        </Button>

=======
>>>>>>> origin/feature/home
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
<<<<<<< HEAD
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
=======
              maxHeight: `${maxPopoverHeight}px`,
              overflowY: "auto",
              display: "flex", 
              flexDirection: "row", 
              flexWrap: "wrap", 
              justifyContent: "space-between", 
              padding: "16px",
            },
          }}
        >
          <Box sx={{ width: "calc(50% - 16px)" }}>
           
            {gener?.genres.slice(0, Math.ceil(gener.genres.length / 2)).map((genre) => (
>>>>>>> origin/feature/home
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
<<<<<<< HEAD
                    backgroundColor: "#4a92ff",
=======
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
>>>>>>> origin/feature/home
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
<<<<<<< HEAD
            <Grid item xs={4} sm={3} md={4} key={index}>
              <RenderMovie data={movie} />
            </Grid>
          ))}
        </Grid>
=======
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
>>>>>>> origin/feature/home
      </Box>
    </>
  );
};

export default Categories;

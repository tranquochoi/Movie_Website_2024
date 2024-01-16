import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  InputBase,
  Link,
  Typography,
  Autocomplete,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import useSWR from "swr";
import { NextPageWithLayout } from "../_app";
import Layout from "@/components/landing_page/layout";
import axios from "axios";
import {
  AccessTime,
  CalendarToday,
  ArrowBack,
  Info,
} from "@mui/icons-material";
import StarBorderIcon from "@mui/icons-material/StarBorder";

interface MovieSearch {
  results: Movie[];
}

interface Movie {
  id: string;
  title: string;
  poster_path: string;
  vote_average: number;
  genre: string[];
  release_date: string;
  runtime: number;
}

const SearchDetail: NextPageWithLayout = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);
  const { data, error } = useSWR<MovieSearch>("/movie/upcoming", fetcher);

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const response = await axios.get(`/search/movie?query=${searchTerm}`);
        setSearchResults(response.data.results);
      } catch (error) {
        console.error("Error searching for movies:", error);
      }
    };

    handleSearch();
  }, [searchTerm]);

  const filteredResults = searchTerm
    ? searchResults.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : searchResults;

  if (!data) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography>Error loading data</Typography>;
  }

  const getOptions = () => {
    if (searchTerm === "") {
      return [];
    } else {
      return searchResults
        .filter((movie) =>
          movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((movie) => movie.title);
    }
  };

  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#242A32",
          marginBottom: "20px",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back">
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Search
          </Typography>
          <IconButton edge="end" color="inherit" aria-label="info">
            <Info />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "100%",
          borderRadius: 20,
          position: "relative", // Add this line to position the search icon
          "@media (max-width: 600px)": {
            width: "100%",
          },
        }}
      >
        <Autocomplete
          freeSolo
          options={getOptions()}
          renderInput={(params) => (
            <InputBase
              {...params}
              sx={{
                borderRadius: "16px",
                background: "#3A3F47",
                width: "318px",
                height: "42px",
                flexShrink: 0,
                color: "#67686D",
                padding: "8px",
                border: "1px solid #67686D",
              }}
              placeholder="Search"
              inputProps={{
                ...params.inputProps,
                "aria-label": "search movies",
              }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          )}
        />
        <img
          src="/Search (1).png"
          alt="Search"
          style={{
            width: "15.807px",
            height: "16px",
            position: "absolute",
            top: "50%",
            right: "16px",
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
        />
      </Box>

      <Grid container spacing={3}>
        {filteredResults.map((movie) => (
          <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ boxShadow: "none", marginTop: "20px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  bgcolor: "#242A32",
                  border: "none",
                  borderRadius: 0,
                  color: "white",
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  sx={{
                    flex: "1 1 auto",
                    maxWidth: "95px",
                    maxHeight: "120px",
                  }}
                />
                <CardContent sx={{ flex: "2 1 auto" }}>
                  <Typography variant="h6">{movie.title}</Typography>
                  <Typography>
                    <StarBorderIcon sx={{ fontSize: 30, color: "orange" }} />{" "}
                    {movie.vote_average}
                  </Typography>
                  <Typography>
                    <CalendarToday /> {movie.release_date}
                  </Typography>
                  <Typography>
                    <AccessTime /> {movie.runtime} minutes
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

SearchDetail.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default SearchDetail;

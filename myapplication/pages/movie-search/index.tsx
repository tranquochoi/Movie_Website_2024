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
  Paper,
  Typography,
  Autocomplete, // Import Autocomplete component
} from "@mui/material";
import useSWR from "swr";
import { NextPageWithLayout } from "../_app";
import Layout from "@/components/landing_page/layout";
import axios from "axios";
import {
  AccessTime, // Thời lượng icon
  CalendarToday,
} from "@mui/icons-material";
import StarBorderIcon from "@mui/icons-material/StarBorder";

interface MovieSearch {
  results: Movie[];
}

interface Movie {
  id: string;
  title: string;
  poster_path: string;
  vote_average: number; // Điểm đánh giá
  genre: string[]; // Mảng các thể loại, có thể sử dụng kiểu dữ liệu phù hợp hơn
  release_date: string; // Năm sản xuất
  runtime: number; // Thời lượng phim (phút)
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

    handleSearch(); // Gọi hàm handleSearch khi searchTerm thay đổi
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
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "100%",
          borderRadius: 20,
          "@media (max-width: 600px)": {
            width: "100%",
          },
        }}
      >
        <Autocomplete
          freeSolo
          options={getOptions()} // Sử dụng hàm getOptions để lấy danh sách gợi ý
          renderInput={(params) => (
            <InputBase
              {...params}
              sx={{ ml: 1, flex: 1 }}
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
      </Paper>

      <Grid container spacing={3}>
        {filteredResults.map((movie) => (
          <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
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
                  }} // Điều chỉnh kích thước ảnh
                />
                <CardContent sx={{ flex: "2 1 auto", textAlign: "left" }}>
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

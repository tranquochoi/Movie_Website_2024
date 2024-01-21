import type { ReactElement } from "react";
import Layout from "@/components/landing_page/layout";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import axios from "axios";
import useSWR from "swr";
import { NextPageWithLayout } from "../_app";
import Header from "@/components/landing_page/header";
import SearchBar from "@/components/landing_page/search";
import HomeMenu from "@/components/landing_page/homeLayoutMenu";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import Person from "@/components/Person";
import { MovieList } from "../movie-detail/Models/Movies";

const HomeDetail: NextPageWithLayout = () => {
  // Function to fetch data from the API
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);

  // Use SWR hook to fetch data and manage loading and error states
  const { data, isLoading, error } = useSWR<MovieList>("/movie/upcoming");

  return (
    <>
      {/* Add some empty space at the top */}
      <Box sx={{ height: "21px" }}></Box>

      {/* Render the Header component */}
      <Header />

      {/* Add some empty space with negative margin to adjust layout */}
      <Box sx={{ height: "21px", marginTop: "-8px" }}></Box>

      {/* Render the SearchBar component */}
      <SearchBar />

      {/* Add some empty space with negative margin to adjust layout */}
      <Box sx={{ height: "38px", marginTop: "-8px" }}></Box>

      {/* Display a horizontal scrollable container for movie cards */}
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2,
          flexWrap: "nowrap",
          margin: "-14px", // Adjust margin to compensate for negative margin in previous elements
          paddingLeft: "18px",
        }}
      >
        {/* Display loading indicator if data is still being fetched */}
        {isLoading && <CircularProgress />}

        {/* Display error message if there's an issue fetching data */}
        {error && <Typography>Error loading data</Typography>}

        {/* Map through movie data and render individual movie cards */}
        {data?.results.map((movie, index) => (
          <Box
            key={movie.id.toString()}
            sx={{
              flex: "0 0 auto",
              marginRight: 2,
              height: "250px",
            }}
          >
            {/* Create a link to the movie detail page */}
            <Link href={`/movie-detail/${movie.id}`} underline="none">
              {/* Container for the movie card */}
              <Box sx={{ position: "relative" }}>
                {/* Display rating and background overlay */}
                <Box
                  sx={{
                    marginTop: "20px",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    borderRadius: "8px",
                    padding: "2px",
                    left: "70%",
                    position: "absolute",
                    transform: "translate(-8%, -40%)",
                    color: "white",
                    fontSize: "12px",
                  }}
                >
                  {/* Display star icon and movie rating */}
                  <StarIcon sx={{ fontSize: 24, color: "orange" }} />
                  {movie.vote_average}
                </Box>
              </Box>

              {/* Movie card with elevation, size, and rounded corners */}
              <Card
                elevation={5}
                className="small-card"
                sx={{
                  height: "200px",
                  width: "139.581px",
                  borderRadius: "16px",
                  overflow: "hidden", // Ensure image corners are rounded
                }}
              >
                {/* Movie poster with specified height, width, and rounded corners */}
                <CardMedia
                  component="img"
                  sx={{
                    height: "100%",
                    objectFit: "cover",
                    width: "100%",
                    borderRadius: "16px",
                    boxSizing: "border-box", // Ensure no white border around the image
                  }}
                  loading="lazy" // Optimize image loading
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </Card>

              {/* Position indicator number at the bottom left of the card */}
              <Box sx={{ position: "relative" }}>
                {/* Display the position number with styling */}
                <Typography
                  sx={{
                    position: "absolute",
                    bottom: "-50px",
                    left: "-20px",
                    fontSize: "96px",
                    color: "#242A32",
                    padding: "4px 4px",
                    overflow: "visible",
                    textShadow: "1px 1px 4px #0296E5",
                  }}
                >
                  {/* Display the position index */}
                  {index + 1}
                </Typography>
              </Box>
            </Link>
          </Box>
        ))}
      </Box>
    </>
  );
};

// Define the layout for the page including the HomeMenu component
HomeDetail.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
      <HomeMenu />
    </Layout>
  );
};

// Export the HomeDetail component as the default export
export default HomeDetail;

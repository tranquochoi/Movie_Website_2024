import React, { useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import {
  Box,
  CardMedia,
  CircularProgress,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import config from "@/config";
import { NextPageWithLayout } from "../_app";
import { People } from "../movie-detail/Models/People";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import JobOnIcon from "@mui/icons-material/RecentActors";
import NavProfile from "@/components/landing_page/NavProfile";

const PeopleDetail: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useSWR<People>(
    `/person/${id}?language=en-US&append_to_response=images,external_ids,movie_credits`
  );

  const [showFullBiography, setShowFullBiography] = useState(false);
  const [showFullFilmList, setShowFullFilmList] = useState(false);

  if (isLoading) {
    return (
      <Typography fontSize={"250px"} textAlign={"center"}>
        {isLoading && <CircularProgress />}
      </Typography>
    );
  }

  if (error) {
    return <Typography sx={{ color: "red" }}>Error</Typography>;
  }

  if (!data) {
    return <>Không có dữ liệu</>;
  }

  const sortedListFilm = data.movie_credits.cast.sort(
    (a, b) => parseInt(b.release_date.slice(0, 4)) - parseInt(a.release_date.slice(0, 4))
  );

  
  const shortBiography = data.biography.split(" ").slice(0, 15).join(" ");
  const profileImagePath = data.images.profiles && data.images.profiles.length > 0
    ? config.image_path + data.images.profiles[0].file_path
    : '/default.jpg';

  return (
    <>
      <NavProfile />
      <Box sx={{ padding: "18px" }}>
        <Stack spacing={3} sx={{ alignItems: "center" }}>
          <Box
            component="img"
            sx={{
              height: "100px",
              width: "100px",
              objectFit: "cover",
              borderRadius: "150px",
            }}
            src={profileImagePath}
            alt={"none"}
          />

          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "monospace",
              fontSize: "30px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            {data.name}
          </Typography>

          <Typography
            sx={{
              color: "white",
              fontFamily: "Inter",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "87.523%",
            }}
          >
            <LocationOnIcon />
            {data.place_of_birth}
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Inter",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "87.523%",
            }}
          >
            <JobOnIcon />
            {data.known_for_department}
          </Typography>

          <Stack direction="row" spacing={8}>
            <Box>
              <Typography
                sx={{
                  color: "gold",
                  fontFamily: "Inter",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "87.523%",
                }}
              >
                Popularity:
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Inter",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "87.523%",
                  textAlign: "center",
                }}
              >
                {data.popularity}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "gold",
                  fontFamily: "Inter",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "87.523%",
                }}
              >
                Twitter:
              </Typography>
              <Typography
                sx={{
                  color: "#FFF",
                  fontFamily: "Inter",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "87.523%",
                }}
              >
                @{data.external_ids.twitter_id}
              </Typography>
            </Box>
          </Stack>

          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Inter",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              textAlign: "justify",
              maxHeight: showFullBiography ? "none" : "100px",
              overflow: "hidden",
            }}
          >
            {showFullBiography ? data.biography : shortBiography}

            {data.biography.split(" ").length > 20 && (
              <Link
                onClick={() => setShowFullBiography(!showFullBiography)}
                sx={{
                  textDecoration: "underline",
                  color: "#00F",
                  cursor: "pointer",
                  display: "block",
                  marginTop: 1,
                }}
              >
                {showFullBiography ? "Read less" : "Read more"}
              </Link>
            )}
          </Typography>
        </Stack>
        <Box sx={{ mt: 3, borderTop: "1px solid #777" }}>
          <Typography
            sx={{
              color: "greenyellow",
              fontFamily: "Inter",
              fontSize: "24px",
              fontWeight: 600,
              lineHeight: "87.523%",
            }}
          >
            Acting for:
          </Typography>
          {sortedListFilm.slice(0, showFullFilmList ? sortedListFilm.length : 5).map((ig, index) => (
            <Box key={index}>
              <Link
                href={`/movie-detail/${ig.id}`}
                underline="none"
                sx={{
                  textDecoration: "none",
                  textAlign: "center",
                  color: "#FFF",
                  "&:hover": {
                    color: "#00F",
                  },
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Roboto",
                    fontSize: "24px",
                    fontWeight: 700,
                    lineHeight: "normal",
                    display: "inline-block",
                    marginRight: "8px",
                    maxWidth: "calc(100% - 100px)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {ig.release_date && ig.release_date.slice(0, 4)}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Roboto",
                    fontSize: "24px",
                    fontWeight: 700,
                    lineHeight: "normal",
                    display: "inline-block",
                    maxWidth: "calc(100% - 100px)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {ig.title}
                </Typography>
              </Link>
            </Box>
          ))}
          {sortedListFilm.length > 5 && (
            <Link
              onClick={() => setShowFullFilmList(!showFullFilmList)}
              sx={{
                textDecoration: "underline",
                color: "#00F",
                cursor: "pointer",
                display: "block",
                marginTop: 1,
              }}
            >
              {showFullFilmList ? "Show less movies" : "Show more movies"}
            </Link>
          )}
        </Box>
      </Box>
    </>
  );
};

export default PeopleDetail;

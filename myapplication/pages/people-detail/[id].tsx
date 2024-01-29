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
  Paper,
} from "@mui/material";
import config from "@/config";
import { NextPageWithLayout } from "../_app";
import { People } from "../movie-detail/Models/People";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import JobOnIcon from "@mui/icons-material/RecentActors";
import NavProfile from "@/components/landing_page/NavProfile";
import { Instagram } from "@mui/icons-material";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const PeopleDetail: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useSWR<People>(
    `/person/${id}?language=en-US&append_to_response=images,external_ids,movie_credits`
  );

  const [showFullBiography, setShowFullBiography] = useState(false);

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

  const handleInstagramClick = () => {
    const instagramId = data.external_ids.instagram_id;
    if (instagramId) {
      const url = `https://www.instagram.com/${instagramId}`;
      window.open(url, "_blank");
    }
  };

  return (
    <>
      <NavProfile />
      <Paper sx={{ backgroundColor: "rgba(255, 255, 255, 0.9)", padding: "18px" }}>
        <Stack spacing={3} sx={{ alignItems: "center" }}>
          <Box
            component="img"
            sx={{
              height: "150px",
              width: "150px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            src={profileImagePath}
            alt={"none"}
          />

          <Box
            sx={{
              color: "#000",
              fontWeight: 600,
              fontSize: "24px",
            }}
          >
            {data.name}
          </Box>

          <Box
            sx={{
              color: "#333",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
            }}
          >
            <LocationOnIcon sx={{ marginRight: "5px" }} />
            {data.place_of_birth}
          </Box>
          <Box
            sx={{
              color: "#333",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
            }}
          >
            <JobOnIcon sx={{ marginRight: "5px" }} />
            {data.known_for_department}
          </Box>



          <Stack direction="row" spacing={8}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <PeopleAltIcon sx={{ color: "#000", fontSize: "20px" }} />
              <Box
                sx={{
                  color: "#333",
                  fontWeight: 500,
                  fontSize: "16px",
                  textAlign: "center",
                }}
              >
                {data.popularity}
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }} onClick={handleInstagramClick}>
              <Instagram sx={{ color: "#000", fontSize: "20px" }} />
              <Box
                sx={{
                  color: "#333",
                  fontWeight: 500,
                  fontSize: "16px",
                  textAlign: "center",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                    color: "#0084ff",
                  },
                }}
              >
                {data.external_ids.instagram_id}
              </Box>
            </Box>

          </Stack>
        </Stack>
        <Box
          sx={{
            marginTop: "20px",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
          }}
        >
          Gender
        </Box>
        <Box>{data.gender === 1 ? 'Female' : 'Male'}</Box>
        <Box
          sx={{
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
          }}
        >
          Age
        </Box>
        <Box>{new Date().getFullYear() - new Date(data.birthday).getFullYear()} </Box>
        <Box
          sx={{
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
          }}
        >
          Date of Birth
        </Box>
        <Box>{data.birthday}</Box>
        <Box
          sx={{
            fontWeight: 700, color: "black", marginTop: "20px", marginBottom: "10px", fontSize: "20px",
          }}
        >
          Biography
        </Box>
        <Box >

          {showFullBiography ? data.biography : shortBiography}

          {data.biography.split(" ").length > 20 && (
            <Link
              onClick={() => setShowFullBiography(!showFullBiography)}
              sx={{
                textDecoration: "none",
                color: "#0084ff",
                cursor: "pointer",
                display: "block",
              }}
            >
              {showFullBiography ? "Read less" : "Read more"}
            </Link>
          )}
        </Box>
        <Box sx={{ mt: 5, borderTop: "1px solid #ccc" }}>
          <Box
            sx={{
              fontWeight: 700,
              color: "black",
              fontSize: "20px"
            }}
          >
            Acting
          </Box>
          <Box
            sx={{
              marginTop: "10px",
            }}
          >
            {sortedListFilm.map((ig, index) => (
              <Box
                key={index}
              >
                <Link
                  href={`/movie-detail/${ig.id}`}
                  underline="none"
                >
                  <Stack direction="row" spacing={1}>
                    <Box
                      sx={{
                        color: "#666",
                        fontWeight: 500,
                        fontSize: "14px",
                        maxWidth: "100%",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {ig.release_date ? ig.release_date.slice(0, 4) : "........."}
                    </Box>

                    <Box
                      sx={{
                        color: "#666",
                        fontWeight: 500,
                        fontSize: "14px",
                        maxWidth: "100%",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        "&:hover": {
                          color: "#0084ff",
                        },
                      }}
                    >
                      {ig.title}
                    </Box>
                  </Stack>
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      </Paper >
    </>
  );
};

export default PeopleDetail;

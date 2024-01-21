import { Box, Grid, Link, Typography } from "@mui/material";
import { Cast } from "../Models/Credits";
import useSWR from "swr";
import { ListImage, Movie } from "../Models/Movies";
import axios from "axios";
import { PlayArrow } from "@mui/icons-material";
function RenderImages(props: { id: Int16Array }) {
  const { data, isLoading, error } = useSWR<ListImage>(
    `/movie/${props.id}/images`
  );
  const { data: video, isLoading: loadingVideo } = useSWR<Movie>(
    `/movie/${props.id}?language=en-US&append_to_response=videos`
  );
  const teaserVideo = video?.videos.results.find((video) =>
    video.name.includes("ailer")
  );
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <Box
        sx={{
          paddingTop: "24px",
          display: "flex",
          overflowX: "auto",
          gap: 1,
          flexWrap: "nowrap",
          margin: "-14px",
          paddingLeft: "18px",
          paddingRight: "16px",
        }}
      >
        <Box
          sx={{
            flex: "0 0 auto",
            marginRight: 0.5,
            width: "100%",
            height: "176px",
          }}
        >
          <Box
            sx={{
              backgroundImage: `url('https://i.ytimg.com/vi/${teaserVideo?.key}/hqdefault.jpg')`,
              width: 1,
              height: {
                xs: "100%",
                sm: "100%",
              },
              backgroundPosition: "center center",
              backgroundRepeat: "false",
              backgroundSize: "cover",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link
              href={`https://www.youtube.com/watch?v=Fbb4e_Q6wR8`}
              target="_blank"
              rel="noopener"
            >
              <Box
                bgcolor="white"
                borderRadius={12}
                width={40}
                height={40}
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  opacity: "50%",
                }}
              >
                <PlayArrow />
              </Box>
            </Link>
          </Box>
        </Box>

        {data?.backdrops.slice(0, 10).map((ig) => (
          <Box
            sx={{
              flex: "0 0 auto",
              marginRight: 0.5,
              width: "300px",
              height: "176px",
            }}
          >
            <Box
              component="img"
              sx={{
                height: "100%",
                width: "100%",
              }}
              src={`https://image.tmdb.org/t/p/w500${ig.file_path}`}
              alt={"None"}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
export default RenderImages;

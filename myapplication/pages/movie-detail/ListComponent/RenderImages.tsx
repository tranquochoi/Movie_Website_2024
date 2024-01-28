import { Box } from "@mui/material";
import { ListImage, Movie } from "../Models/Movies";
import useSWR from "swr";
import { useState, useRef } from "react";

interface RenderImagesProps {
  id: number;
}

const RenderImages: React.FC<RenderImagesProps> = (props) => {
  const { data, isLoading, error } = useSWR<ListImage>(
    `/movie/${props.id}/images`
  );
  const { data: video, isLoading: loadingVideo } = useSWR<Movie>(
    `/movie/${props.id}?language=en-US&append_to_response=videos`
  );
  const teaserVideo = video?.videos.results.find((video) =>
    video.name.includes("ailer")
  );

  const youtubeVideoUrl = teaserVideo
    ? `https://www.youtube.com/embed/${teaserVideo?.key}?enablejsapi=1`
    : null;

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const openImage = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeImage = () => {
    setSelectedImageIndex(null);
  };

  const videoRef = useRef<HTMLIFrameElement | null>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.contentWindow) {
        videoRef.current.contentWindow.postMessage(
          '{"event":"command","func":"togglePlayPause","args":""}',
          "*"
        );
      }
    }
  };

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
        {youtubeVideoUrl && (
          <Box
            sx={{
              flex: "0 0 auto",
              marginRight: 0.5,
              width: "100%",
              height: "200px",

            }}
          >
            <iframe

              style={{
                borderRadius: "16px",
              }}
              title="teaserVideo"
              ref={videoRef}
              width="100%"
              height="100%"
              src={youtubeVideoUrl}
              allowFullScreen
            />
          </Box>
        )}

        {data?.backdrops.slice(0, 10).map((ig, index) => (
          <Box
            key={index}
            sx={{
              flex: "0 0 auto",
              marginRight: 0.5,
              width: "350px",
              height: "200px",
              cursor: "pointer",
              "&:hover": {
                opacity: 0.8,
              },
            }}
            onClick={() => openImage(index)}
          >
            <Box
              component="img"
              sx={{
                height: "100%",
                width: "auto",
                objectFit: "cover",
                borderRadius: "16px",

              }}
              src={`https://image.tmdb.org/t/p/w500${ig.file_path}`}
              alt={"None"}
            />
          </Box>
        ))}
      </Box>

      {selectedImageIndex !== null && (
        <Box
          onClick={closeImage}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <Box
            sx={{
              maxWidth: "95%",
              maxHeight: "95%",
            }}
          >
            <Box
              component="img"
              src={`https://image.tmdb.org/t/p/w500${data?.backdrops[selectedImageIndex].file_path}`}
              alt={"None"}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default RenderImages;

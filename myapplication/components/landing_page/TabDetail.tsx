import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Movie } from "@/components/Models/Movies";
import RenderActress from "@/pages/movie-detail/ListComponent/RenderActress";
import RenderReview from "@/pages/movie-detail/ListComponent/RenderReview";
import RenderImages from "@/pages/movie-detail/ListComponent/RenderImages";
import { CardMedia, Link, Stack } from "@mui/material";
import config from "@/config";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { CircularProgress } from "@mui/material";
import RenderMovieRelate from "../../pages/home/listMenu/RenderMovieRelate";
import RenderAboutMV from "@/pages/movie-detail/ListComponent/RenderAboutMV";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1} sx={{ textAlign: "left", color: "#FFF" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function TabDetail() {
  const [openDialog, setOpenDialog] = useState(false); // Set to false initially
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useSWR<Movie>(
    `/movie/${id}?language=en-US&append_to_response=videos,credits,reviews`
  );
  const {
    data: similarMovies,
    isLoading: similarLoading,
    error: similarError,
  } = useSWR(`/movie/${id}/similar?language=en-US`);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const toggleDialog = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <Box sx={{ width: "100%", paddingLeft: "10px", paddingRight: "10px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ "& .MuiTabs-indicator": { backgroundColor: "#3A3F47" } }}
        >
          <Tab
            label="About Movie"
            {...a11yProps(0)}
            style={{
              color: "white",
              textTransform: "none",
              fontFamily: " sans-serif",
            }}
          />
          <Tab
            label="Reviews"
            {...a11yProps(1)}
            style={{
              color: "white",
              textTransform: "none",
              fontFamily: " sans-serif",
            }}
          />
          <Tab
            label="Cast"
            {...a11yProps(2)}
            style={{
              color: "white",
              textTransform: "none",
              fontFamily: "sans-serif",
            }}
          />
        </Tabs>
      </Box>

      <Dialog open={openDialog} onClose={toggleDialog}>
        <DialogContent>
          <Box sx={{ fontSize: "1.5rem", height: "50px" }}>Introduce</Box>
          <Box>{`Movie Title: ${data?.overview}`}</Box>
        </DialogContent>
      </Dialog>

      <CustomTabPanel value={value} index={0}>
        <RenderAboutMV data={parseInt(id as string)} />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <div
          style={{ fontFamily: "YourCustomFont, sans-serif", fontSize: "14px" }}
        >
          <RenderReview data={data?.reviews.results}></RenderReview>
        </div>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <div
          style={{ fontFamily: "YourCustomFont, sans-serif", fontSize: "14px" }}
        >
          <RenderActress data={data?.credits.cast}></RenderActress>
        </div>
      </CustomTabPanel>

      <Box sx={{ height: "30px" }} />
    </Box>
  );
}

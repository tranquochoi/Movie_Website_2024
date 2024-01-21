import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Movie } from "@/pages/movie-detail/Models/Movies";
import RenderActress from "@/pages/movie-detail/ListComponent/RenderActress";
import RenderReview from "@/pages/movie-detail/ListComponent/RenderReview";

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
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useSWR<Movie>(
    `/movie/${id}?language=en-US&append_to_response=videos,credits,reviews`
  );
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
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
              fontFamily: "YourCustomFont, sans-serif",
            }}
          />
          <Tab
            label="Reviews"
            {...a11yProps(1)}
            style={{
              color: "white",
              textTransform: "none",
              fontFamily: "YourCustomFont, sans-serif",
            }}
          />
          <Tab
            label="Cast"
            {...a11yProps(2)}
            style={{
              color: "white",
              textTransform: "none",
              fontFamily: "YourCustomFont, sans-serif",
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {data?.overview}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <RenderReview data={data?.reviews.results}></RenderReview>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <RenderActress data={data?.credits.cast}></RenderActress>
      </CustomTabPanel>
    </Box>
  );
}

export default TabDetail;

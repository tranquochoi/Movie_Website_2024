import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { Info } from "@mui/icons-material";

interface AppBarComponentProps {
  onBackClick: () => void;
  onInfoClick: () => void;
}

const AppBarComponent: React.FC<AppBarComponentProps> = ({
  onBackClick,
  onInfoClick,
}) => (
  <AppBar
    position="static"
    sx={{
      backgroundColor: "#242A32",
      marginBottom: "20px",
      boxShadow: "none",
    }}
  >
    <Toolbar>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="back"
        onClick={onBackClick}
      >
        <ArrowBackIosNewOutlinedIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Search
      </Typography>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="info"
        onClick={onInfoClick}
      >
        <Info />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default AppBarComponent;

import React from "react";
import Box from "@mui/system/Box";
import Person from "../Person";
import AvatarView from "../movie/AvatarView";
import { Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          marginLeft: "6px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#FFF",
          fontSize: "20px",
          fontWeight: 600,
        }}
      >
        <Box>The Movie</Box>
        <AvatarView />
      </Box>
    </>
  );
};

export default Header;

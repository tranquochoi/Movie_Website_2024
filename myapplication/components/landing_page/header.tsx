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
        <Typography>What do you want to watch huh?</Typography>
        <AvatarView />
      </Box>
    </>
  );
};

export default Header;

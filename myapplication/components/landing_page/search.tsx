import React from "react";
import InputBase from "@mui/material/InputBase";

const SearchBar = () => {
  return (
    <div style={{ position: "relative", width: "327px" }}>
      <InputBase
        sx={{
          borderRadius: "16px",
          background: "#3A3F47",
          width: "100%",
          height: "42px",
          flexShrink: 0,
          color: "#67686D",
          padding: "8px",
          border: "1px solid #67686D",
        }}
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
      />
      <img
        src="/Search (1).png"
        alt="Search"
        style={{
          width: "15.807px",
          height: "16px",
          position: "absolute",
          top: "50%",
          right: "16px",
          transform: "translateY(-50%)",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default SearchBar;

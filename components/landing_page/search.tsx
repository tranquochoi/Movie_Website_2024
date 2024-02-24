import React from "react";
import InputBase from "@mui/material/InputBase";
import { useRouter } from "next/router";
import { Box } from "@mui/material";

const SearchBar = () => {
  const router = useRouter();

  const handleSearchClick = () => {
    router.push("/movie-search");
  };

  return (
    <Box
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        padding: "2px",
        width: "100%",
      }}
      onClick={handleSearchClick}
    >
      <InputBase
        sx={{
          borderRadius: "16px",
          background: "#3A3F47",
          width: "100%",
          height: "42px",
          color: "#67686D",
          padding: "8px",
          border: "1px solid #67686D",
          cursor: "pointer",
        }}
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
      />
      <Box
        component="div" // Chọn loại thẻ HTML bạn muốn sử dụng (div, span, etc.)
        sx={{
          width: "15.807px",
          height: "16px",
          backgroundColor: 'url("/Search (1).png")', // Đặt ảnh làm nền
          backgroundSize: "cover", // Có thể điều chỉnh kiểu hiển thị ảnh
          position: "absolute",
          top: "50%",
          right: "15px",
          transform: "translateY(-50%)",
          cursor: "pointer",
        }}
      />
    </Box>
  );
};

export default SearchBar;

import React from "react";
import { Box, Pagination } from "@mui/material";

interface PaginationComponentProps {
  currentPage: number;
  totalPageCount: number;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  currentPage,
  totalPageCount,
  onPageChange,
}) => (
  <Box
    sx={{
      textAlign: "center",
      marginTop: "20px",
      paddingBottom: "70px",
      width: "100%",
      justifyContent: "center",
    }}
  >
    <Pagination
      count={totalPageCount}
      page={currentPage}
      onChange={onPageChange}
      variant="outlined"
      shape="rounded"
      sx={{
        "& .MuiPaginationItem-root": {
          color: "white",
          borderColor: "#67686D",
        },
        "& .MuiPaginationItem-root.Mui-selected": {
          backgroundColor: "#0296E5",
        },
        "& .MuiPaginationItem-root:hover": {
          backgroundColor: "rgba(0, 0, 0, 0)",
        },
        "& .MuiPaginationItem-icon": {
          backgroundColor: "#67686D",
          fontSize: "30px",
        },
      }}
    />
  </Box>
);

export default PaginationComponent;

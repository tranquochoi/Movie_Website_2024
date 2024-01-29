import * as React from "react";
import { useRouter } from "next/router";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Popover from "@mui/material/Popover";
import { ListGenre } from "../movie-detail/Models/Geners";

interface NavGenresProps {
  selectedGenre: number;
  handleMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  handleMenuClose: () => void;
  gener: ListGenre | undefined;
  setSelectedGenre: React.Dispatch<React.SetStateAction<number>>;
  anchorEl: HTMLElement | null; // Define anchorEl prop
}

const NavGenres: React.FC<NavGenresProps> = ({
  selectedGenre,
  handleMenuOpen,
  handleMenuClose,
  gener,
  setSelectedGenre,
  anchorEl, // Accept anchorEl prop
}) => {
  const router = useRouter();

  const maxPopoverHeight = 10 * 30;

  return (
    <Box sx={{ position: "sticky", top: -2, zIndex: 1000 }}>
      <AppBar
        position="static"
        id="appbar"
        sx={{
          backgroundColor: "#242A32",
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="back"
            onClick={() => router.back()}
          >
            <ArrowBackIosNewOutlinedIcon />
          </IconButton>

          <Button
            onClick={handleMenuOpen}
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "20px",
              color: "white",
              textTransform: "none",
              fontSize: "18px",
              fontFamily: "Arial, sans-serif",
            }}
          >
            Genres <KeyboardArrowDownIcon />
          </Button>

          {/* Genre selection popover */}
          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            PaperProps={{
              style: {
                backgroundColor: "#242A32",
                maxHeight: `${maxPopoverHeight}px`,
                overflowY: "auto",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
                padding: "32px",
              },
            }}
          >
            {/* Genre list */}
            <Box sx={{ width: "calc(50% - 16px)" }}>
              {gener?.genres
                .slice(0, Math.ceil(gener.genres.length / 2))
                .map((genre) => (
                  <Box
                    key={genre.id.toString()}
                    sx={{
                      border: "2px solid #888",
                      padding: "4px 8px",
                      borderRadius: "2px",
                      marginBottom: "8px",
                      backgroundColor:
                        selectedGenre == genre.id ? "#0CC2FF95" : "transparent",
                      color: selectedGenre == genre.id ? "white" : "#fff",
                      "&:hover": {
                        backgroundColor: "#333",
                        cursor: "pointer",
                      },
                    }}
                    onClick={() => {
                      setSelectedGenre(genre.id);
                      handleMenuClose();
                    }}
                  >
                    {genre.name}
                  </Box>
                ))}
            </Box>
            <Box sx={{ width: "calc(50% - 16px)" }}>
              {gener?.genres
                .slice(Math.ceil(gener.genres.length / 2))
                .map((genre) => (
                  <Box
                    key={genre.id.toString()}
                    sx={{
                      border: "2px solid #888",
                      padding: "4px 8px",
                      borderRadius: "2px",
                      marginBottom: "8px",
                      backgroundColor:
                        selectedGenre == genre.id ? "#0CC2FF95" : "transparent",
                      color: selectedGenre == genre.id ? "white" : "#fff",
                      "&:hover": {
                        backgroundColor: "#333",
                        cursor: "pointer",
                      },
                    }}
                    onClick={() => {
                      setSelectedGenre(genre.id);
                      handleMenuClose();
                    }}
                  >
                    {genre.name}
                  </Box>
                ))}
            </Box>
          </Popover>
          {/* End of genre selection popover */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavGenres;

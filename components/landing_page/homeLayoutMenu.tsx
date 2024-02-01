import React, { useState } from "react";

import {
  AppBar,
  Box,
  Button,
  MenuItem,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { title } from "process";
import { Upcoming } from "@mui/icons-material";
import Now from "@/pages/home/listMenu/now";
import UpComing from "@/pages/home/listMenu/upComing";
import TopRated from "@/pages/home/listMenu/topRated";
import Popular from "@/pages/home/listMenu/popular";

interface MenuItemObject {
  title: string;
}
export default function HomeMenu({ }: {}) {
  const menu: MenuItemObject[] = [
    { title: "Now playing" },
    { title: "Up comming" },
    { title: "Top rated" },
    { title: "Popular" },
  ];
  const typographyStyle = {
    color: "#FFF",
    fontSize: "14px",
    fontWeight: 500,
  };
  const [currentMenu, setCurrentMenu] = useState(0);

  const renderComponent = () => {
    switch (currentMenu) {
      case 0:
        return <Now />;
      case 1:
        return <UpComing />;
      case 2:
        return <TopRated />;
      case 3:
        return <Popular />;
      default:
        return null;
    }
  };
  return (
    <>
      <Toolbar sx={{ mb: "26px" }}>
        <Box>
          <Stack direction="row" gap={2}>
            {menu.map((item, index) => (
              <Box
                key={item.title}
                style={{
                  textDecoration: "none",
                  borderBottom:
                    index === currentMenu ? "3px solid #FFF" : "none",
                  paddingBottom: "10px",
                }}
                onClick={() => setCurrentMenu(index)}
              >
                <Typography sx={typographyStyle}>{item.title}</Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </Toolbar>
      {renderComponent()}
    </>
  );
}

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

interface MenuItemObject {
  title: string;
  url: string;
}
export default function HomeMenu({}: {}) {
  const menu: MenuItemObject[] = [
    { title: "Now playing", url: "/home/listMenu/now" },
    { title: "Up comming", url: "/home/listMenu/upComing" },
    { title: "Top rated", url: "/home/listMenu/topRated" },
    { title: "Popular", url: "/home/listMenu/popular" },
  ];
  const typographyStyle = {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  };
  const [currentMenu, setCurrentMenu] = useState(0);

  return (
    <Toolbar>
      <Box>
        <Stack direction="row" gap={1}>
          {menu.map((item, index) => (
            <Link
              key={item.url}
              href={item.url}
              style={{
                textDecoration: "none",
                borderBottom: index === currentMenu ? "3px solid #FFF" : "none", // 2px và màu sắc có thể được điều chỉnh
                paddingBottom: "10px", // Khoảng cách xích xuống dưới
              }}
              onClick={() => setCurrentMenu(index)}
            >
              <Typography sx={typographyStyle}>{item.title}</Typography>
            </Link>
          ))}
        </Stack>
      </Box>
    </Toolbar>
  );
}

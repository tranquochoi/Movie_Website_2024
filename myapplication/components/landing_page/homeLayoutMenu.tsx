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

  const [currentMenu, setCurrentMenu] = useState(0);

  return (
    <Toolbar>
      <Box>
        <Stack direction="row" gap={2}>
          {menu.map((item, index) => (
            <Link
              key={item.url}
              href={item.url}
              style={{ color: `${currentMenu == index ? "red" : "gray"}` }}
              onClick={() => setCurrentMenu(index)}
            >
              {item.title}
            </Link>
          ))}
        </Stack>
      </Box>
    </Toolbar>
  );
}

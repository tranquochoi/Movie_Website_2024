import React, { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  Stack,
  Toolbar,
  Typography,
  Divider,
} from "@mui/material";
import Link from "next/link";

interface MenuItemObject {
  title: string;
  url: string;
  icons: { normal: string; active: string };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const menu: MenuItemObject[] = [
    {
      title: "Home",
      url: "./home",
      icons: { normal: "/Home.png", active: "/ActiveHome.png" },
    },
    {
      title: "Search",
      url: "./movie-search",
      icons: { normal: "/Search.png", active: "/ActiveSearch.png" },
    },
    {
      title: "Watch list",
      url: "./movie-watchlist",
      icons: { normal: "/Save.png", active: "/ActiveSave.png" },
    },
  ];

  const [currentMenu, setCurrentMenu] = useState(0);

  return (
    <Container maxWidth="sm">
      <main>
        <Box p={2} bgcolor="#242A32" color="white" textAlign="center">
          {children}
        </Box>

        <AppBar
          position="fixed"
          style={{ top: "auto", bottom: 0, backgroundColor: "#242A32" }}
        >
          <Divider sx={{ borderColor: "#0296E5", height: "1px" }} />

          <Toolbar>
            <Grid container justifyContent="space-around" alignItems="center">
              <ImageList gap={8} cols={menu.length}>
                {menu.map((item, index) => (
                  <ImageListItem key={item.url}>
                    <Stack alignItems="center" textAlign="center">
                      <Link href={item.url} passHref>
                        <IconButton
                          sx={{
                            color: "#67686D",
                            padding: "8px 44px",
                          }}
                          onClick={() => setCurrentMenu(index)}
                          disableRipple
                        >
                          <img
                            src={
                              currentMenu === index
                                ? item.icons.active
                                : item.icons.normal
                            }
                            alt={item.title}
                            style={{
                              width: "21.739px",
                              height: "24px",
                            }}
                          />
                        </IconButton>
                      </Link>
                      <Link href={item.url} passHref>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: `${
                              currentMenu === index ? "#0296E5" : "#67686D"
                            }`,
                          }}
                          onClick={() => setCurrentMenu(index)}
                        >
                          {item.title}
                        </Typography>
                      </Link>
                    </Stack>
                  </ImageListItem>
                ))}
              </ImageList>
            </Grid>
          </Toolbar>
        </AppBar>
        <Box pb={10} />
      </main>
    </Container>
  );
}

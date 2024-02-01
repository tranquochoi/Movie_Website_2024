import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  AppBar,
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
interface MenuItemObject {
  title: string;
  url: string;
  icon: React.ReactNode;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const menu: MenuItemObject[] = [
    { title: "Home", url: "/home", icon: <HomeIcon /> },
    { title: "Search", url: "/movie-search", icon: <SearchIcon /> },
    { title: "Users", url: "/users", icon: <AccountCircleIcon /> },
  ];

  const router = useRouter();
  const [currentMenu, setCurrentMenu] = useState(0);

  useEffect(() => {
    // Get the current route and update the currentMenu state
    const currentRouteIndex = menu.findIndex(
      (item) => item.url === router.pathname
    );
    if (currentRouteIndex !== -1) {
      setCurrentMenu(currentRouteIndex);
    }
  }, [router.pathname]);

  return (
    <Container maxWidth="sm">
      <main>
        <Box bgcolor="#242A32" color="#FFF" textAlign="center">
          {children}
        </Box>

        <AppBar
          position="fixed"
          style={{ top: "auto", bottom: -1, backgroundColor: "#242A32" }}
        >
          <Toolbar>
            <Grid container justifyContent="space-around" alignItems="center">
              <Stack direction="row" gap={3}>
                {menu.map((item, index) => (
                  <Link href={item.url} key={item.url}>
                    <Box
                      onClick={() => setCurrentMenu(index)}
                      style={{ textAlign: "center", cursor: "pointer" }}
                    >
                      <IconButton
                        sx={{
                          color: `${currentMenu === index ? "#0296E5" : "#67686D"
                            }`,
                          padding: "12px 40px",
                          height: "24px",
                        }}
                      >
                        {item.icon}
                      </IconButton>
                      <Typography
                        variant="caption"
                        color={`${currentMenu === index ? "#0296E5" : "#67686D"
                          }`}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  </Link>
                ))}
              </Stack>
            </Grid>
          </Toolbar>
        </AppBar>
      </main>
    </Container>
  );
}

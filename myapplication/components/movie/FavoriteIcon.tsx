import React, { useState } from "react";
import { Person } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  Menu,
  MenuItem,
  Stack,
  Typography,
  DialogTitle,
  ListItem,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { RequestTokenResponse, User } from "@/pages/movie-detail/Models/Auth";
import axios from "axios";
import useSWR from "swr";
import { getCookie, setCookie, deleteCookie } from "cookies-next";
import { useRouter } from "next/router";
import { MovieList } from "@/pages/movie-detail/Models/Movies";

function LoggedInAvatar(props: { data: User }) {
  const avatar_path = props.data.avatar.tmdb.avatar_path;
  const username = props.data.username;
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleDialogClose = (value: string) => {
    setOpenDialog(false);
    if (value == "YES") {
      deleteCookie("session_id");
      deleteCookie("user_id");
      router.reload();
    }
  };
  const { data, isLoading, error } = useSWR<User>(
    `/account/${getCookie("user_id")}?session_id=${getCookie("session_id")}`
  );

  return (
    <>
      <Button onClick={handleMenuClick} variant="text" sx={{ color: "white" }}>
        <Stack direction="row" gap={1}>
          {avatar_path ? <Box component="img" src={avatar_path} /> : <Person />}
          <Typography>{data?.username}</Typography>
        </Stack>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleMenuClose();
            setOpenDialog(true);
          }}
        >
          Log out{getCookie("session_id")}
        </MenuItem>
      </Menu>
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Set backup account</DialogTitle>
        <List>
          <ListItem disableGutters>
            <ListItemButton autoFocus onClick={() => handleDialogClose("YES")}>
              <ListItemText primary="YES" />
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton autoFocus onClick={() => handleDialogClose("NO")}>
              <ListItemText primary="NO" />
            </ListItemButton>
          </ListItem>
        </List>
      </Dialog>
    </>
  );
}

function NotLoggedInAvatar() {
  return (
    <Person
      onClick={() => {
        axios
          .get<RequestTokenResponse>("authentication/token/new")
          .then((res) =>
            window.open(
              `https://www.themoviedb.org/authenticate/${res.data.request_token}?redirect_to=http://localhost:3000/movie/authorize`,
              "_blank",
              "noopener,noreferrer"
            )
          );
      }}
    />
  );
}
function IconFavorite(props: { id: Number }) {
  const session_id = getCookie("session_id");
  const user_id = getCookie("user_id");
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data);
  const { data: movieFavorite } = useSWR<MovieList>(
    session_id
      ? `account/${user_id}/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`
      : null,
    fetcher
  );
  const isLiked = movieFavorite?.results.some((movie) => movie.id == props.id);
  const [like, setLike] = useState(isLiked);

  return (
    <>
      {like ? <Typography>Love</Typography> : <Typography>Not Love</Typography>}
    </>
  );
}
function FavoriteIcon(props: { id: Number }) {
  const session_id = getCookie("session_id");
  return (
    // <>{session_id ? <IconFavorite id={props.id} /> : <Box>Box2</Box>}</>
    <>{session_id ? <IconFavorite id={props.id} /> : <Box>Box2</Box>}</>
  );
}

export default FavoriteIcon;

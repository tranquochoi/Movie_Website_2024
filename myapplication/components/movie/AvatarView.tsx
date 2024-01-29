import React from "react";
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
  Link,
} from "@mui/material";
import { RequestTokenResponse, User } from "@/pages/movie-detail/Models/Auth";
import axios from "axios";
import useSWR from "swr";
import { getCookie, setCookie, deleteCookie } from "cookies-next";
import { useRouter } from "next/router";

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
          <Link sx={{ color: 'black', textDecoration: 'none' }} href={"/movie-favorite"}>My favorite movies</Link>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleMenuClose();
            setOpenDialog(true);
          }}
        >
          Log out
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

const AvatarView = () => {
  const session_id = getCookie("session_id");

  const fetcher = (url: string) =>
    axios.get(url).then((res) => {
      setCookie("user_id", res.data.id);
      return res.data;
    });

  const { data } = useSWR<User>(
    session_id ? `/account?${session_id}` : null,
    fetcher
  );

  return <>{data ? <LoggedInAvatar data={data} /> : <NotLoggedInAvatar />}</>;
  // return (
  //   <>
  //     <Box>Hello22</Box>
  //   </>
  // );
};

export default AvatarView;

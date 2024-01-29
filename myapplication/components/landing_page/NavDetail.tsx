import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import TurnedInOutlinedIcon from '@mui/icons-material/TurnedInOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import { useRouter } from 'next/router';
import WatchListIcon from '../movie/WatchListIcon';
import { CircularProgress } from '@mui/material';
import useSWR from 'swr';
import { Movie } from '@/pages/movie-detail/Models/Movies';


export default function NavDetail() {
    const router = useRouter();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const { id } = router.query;
    const { data, isLoading, error } = useSWR<Movie>(
        `/movie/${id}?language=en-US&append_to_response=videos,credits`
    );

    if (isLoading) {
        return (
            <Typography fontSize={"250px"} textAlign={"center"}>
                {isLoading && <CircularProgress />}
            </Typography>
        );
    }

    if (error) {
        return <Typography sx={{ color: "red" }}>Error</Typography>;
    }

    if (!data) {
        return <>Not Data</>;
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (

        <AppBar
            position="static"
            sx={{
                backgroundColor: "#242A32",
                marginTop: "10px",
                marginBottom: "10px",
                boxShadow: "none",
                textAlign: "center"
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
                <Box sx={{ flexGrow: 1, }}>
                    Detail
                </Box>
                <IconButton size='large' edge="end" color="inherit" aria-label="info" sx={{ marginBottom: "8px" }}>
                    <WatchListIcon id={data.id} />
                </IconButton>
            </Toolbar>
        </AppBar >

    );
}

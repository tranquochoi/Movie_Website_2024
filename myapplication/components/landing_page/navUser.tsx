import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ListIcon from '@mui/icons-material/List';
import { useRouter } from 'next/router';


export default function NavUser() {
    const router = useRouter();

    return (

        <AppBar
            position="static"
            sx={{
                backgroundColor: "#242A32",
                marginBottom: "20px",
                boxShadow: "none",
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
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    User
                </Typography>
                <IconButton edge="end" color="inherit" aria-label="info">
                    <ListIcon />
                </IconButton>
            </Toolbar>
        </AppBar>

    );
}


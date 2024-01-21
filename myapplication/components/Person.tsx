import * as React from 'react';
import { Box, IconButton, Menu, MenuItem, ClickAwayListener, Popper, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LoginIcon from '@mui/icons-material/Login';

export default function Person() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickAway = () => {
        setAnchorEl(null);
    };

    React.useEffect(() => {
        const handleBodyOverflow = () => {
            document.body.style.overflow = anchorEl ? 'hidden' : 'auto';
        };

        document.addEventListener('scroll', handleBodyOverflow);

        return () => {
            document.removeEventListener('scroll', handleBodyOverflow);
        };
    }, [anchorEl]);

    return (
        <Box>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{}}
            >
                <AccountCircleIcon style={{ fontSize: 42 }} />
            </IconButton>
            <Popper
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                placement="bottom-end"
            >
                <ClickAwayListener onClickAway={handleClickAway}>
                    <Box>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>
                                <Typography
                                    sx={{
                                        fontSize: 16,
                                        marginRight: 1,
                                    }}
                                >
                                    <AccountBoxIcon />
                                </Typography>
                                My account
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Typography
                                    sx={{
                                        fontSize: 16,
                                        color: 'green',
                                        marginRight: 1,
                                    }}
                                >
                                    <LoginIcon />
                                </Typography>
                                Login
                            </MenuItem>
                        </Menu>
                    </Box>
                </ClickAwayListener>
            </Popper>
        </Box>
    );
}

import * as React from 'react';
import { Box, Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function Person() {
    return (
        <Box textAlign="center">
            <AccountCircle style={{ fontSize: 42 }} />
        </Box>
    );
}

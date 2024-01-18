import * as React from 'react';
import { Box, Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function Person() {
    return (
        <Box textAlign="center">
            <Box style={{ borderRadius: '50%', overflow: 'hidden', display: 'inline-block' }}>
                <AccountCircle style={{ fontSize: 42 }} />
            </Box>
            <Box paddingTop="5px">
                <Button variant="outlined" size="medium" style={{ textTransform: "none" }}>
                    Login
                </Button>
            </Box>
        </Box>
    );
}

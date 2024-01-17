
import React from 'react';
import Box from '@mui/system/Box';

const Header = () => {
    return (
        <Box sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
            width: "317px",
            color: "#FFF",
            fontSize: "20px",
            fontWeight: 600,
            lineHeight: "normal",


        }}>
            What do you want to watch?
        </Box>
    );
};

export default Header;

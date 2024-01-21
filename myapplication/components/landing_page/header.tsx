import React from 'react';
import Box from '@mui/system/Box';
import Person from '../Person';

const Header = () => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#FFF",
            fontSize: "20px",
            fontWeight: 600,
        }}>
            What do you want to watch?
            <Person />
        </Box>

    );
};

export default Header;

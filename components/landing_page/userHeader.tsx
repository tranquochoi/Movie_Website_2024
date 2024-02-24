import React from "react";
import Box from "@mui/system/Box";
import ErrorIcon from '@mui/icons-material/Error';

const UserHeader = () => {
    return (
        <>
            <Box sx={{ marginTop: "14rem" }}><ErrorIcon /> You need to </Box>
        </>
    );
};

export default UserHeader;

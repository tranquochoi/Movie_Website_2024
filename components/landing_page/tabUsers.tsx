import React from "react";
import { Tab, Tabs, styled } from "@mui/material";
import FavoriteMovie from "@/pages/users/Favorite";
import Watchlist from "@/pages/users/Watchlist";

const MyTabs = styled(Tabs)({
    marginLeft: "5rem",
    display: "flex",
    justifyContent: "center",
    "& button": {
        backgroundColor: "transparent",
        color: "white",
        textTransform: "none",
        fontFamily: "Arial, sans-serif",
        "&.Mui-selected": {
            backgroundColor: "#ffffff",
            color: "#000000",
        },
    },
    "& .MuiTabs-indicator": {
        backgroundColor: "white",
    },
});

const IndexPage = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
        setValue(newValue);
    };

    return (
        <div>
            <MyTabs value={value} onChange={handleChange} aria-label="Tabs User" indicatorColor="primary">
                <Tab label="Favorites" />
                <Tab label="WatchLists" />
            </MyTabs>
            <div role="tabpanel" hidden={value !== 0}>
                {value === 0 && <FavoriteMovie />}
            </div>
            <div role="tabpanel" hidden={value !== 1}>
                {value === 1 && <Watchlist />}
            </div>
        </div>
    );
};

export default IndexPage;

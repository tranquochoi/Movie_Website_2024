import Layout from "@/components/landing_page/layout";
import React, { useEffect, useState } from "react";
import { NextPageWithLayout } from "../_app";
import IndexPage from "@/components/landing_page/tabUsers";
import NavUsers from "@/components/landing_page/NavUsers";
import { Box, Button } from "@mui/material";
import AvatarView from "@/components/movie/AvatarView";
import { getCookie } from "cookies-next";
import axios from "axios";
import { RequestTokenResponse } from "@/components/Models/Auth";
import UserHeader from "@/components/landing_page/userHeader";

const Users: NextPageWithLayout = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const session_id = getCookie("session_id");
        setIsLoggedIn(!!session_id);
    }, []);

    return (
        <>
            <NavUsers />

            {!isLoggedIn && <UserHeader />
            }
            {!isLoggedIn && (
                <Button sx={{
                    textTransform: "none", fontFamily: "Arial, sans-serif",
                }} onClick={() => {
                    axios
                        .get<RequestTokenResponse>("authentication/token/new")
                        .then((res) =>
                            window.open(
                                `https://www.themoviedb.org/authenticate/${res.data.request_token}?redirect_to=http://localhost:3000/movie/authorize`,
                                "_blank",
                                "noopener,noreferrer"
                            )
                        );
                }}>
                    Log in
                </Button >
            )}
            {isLoggedIn && <IndexPage />}
            <Box sx={{ height: "64px" }} />

        </>
    );
};

Users.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default Users;

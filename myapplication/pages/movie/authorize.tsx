import { CreateSessionInput, SessionResponse } from "@/components/Models/Auth";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { setCookie } from "cookies-next";
import { redirect, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";

const Authorize = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const requestToken = searchParams.get("request_token");

  const createSession = ({ url, token }: CreateSessionInput) =>
    axios
      .post<SessionResponse>(url, {
        request_token: token,
      })
      .then((res) => {
        setCookie("session_id", res.data.session_id);
        return res.data;
      });

  const { data, isLoading } = useSWR(
    requestToken
      ? { url: "authentication/session/new", token: requestToken }
      : null,
    createSession
  );

  if (isLoading)
    return (
      <>
        <Box sx={{ pt: "250px" }}>
          <Typography sx={{ color: "white" }} textAlign="center">
            Authorizing ...{" "}
          </Typography>
          ;
        </Box>
      </>
    );

  if (data?.success == true) {
    router.push("/home");
  }

  return (
    <>
      {data ? (
        <></>
      ) : (
        <Typography sx={{ color: "white" }} textAlign="center">
          Sorry could not log in{" "}
        </Typography>
      )}
    </>
  );
};

export default Authorize;

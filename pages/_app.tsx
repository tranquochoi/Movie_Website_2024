import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import axios from "axios";
import { ThemeProvider, createTheme } from "@mui/material";
import { SWRConfig } from "swr";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway", "san-serif"].join(","),
  },
});

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWM3N2I0ZmZiZDRhNWNjMzVjM2I3OWQyYjlhYTRmYiIsInN1YiI6IjY1NmQ4NTJmODgwNTUxMDBhZWU5ZWVhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RWLZ8jyDiYhzKP1QSQADAny36mv6cHaG6uAVlEQBNTU";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <ThemeProvider theme={theme}>
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            axios.get(resource, init).then((res) => res.data),
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </ThemeProvider>
  );
}

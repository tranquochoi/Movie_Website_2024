import "@/styles/globals.css";
import { SWRConfig } from "swr";
import type { AppProps } from "next/app";
import type { ReactNode } from "react";
import type { NextPage } from "next";
import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzYxZTM4YjM5NTMwYjU3OTc3MzlkYzBhOGRmN2UwNSIsInN1YiI6IjU4OTdlOWYzYzNhMzY4NzcwZTAwMzU3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.86yfgjl1aDWXL3e09Ab2VgrE_6NJ_USUA2CneAkyQBA";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SWRConfig value={{}}>{getLayout(<Component {...pageProps} />)}</SWRConfig>
  );
}

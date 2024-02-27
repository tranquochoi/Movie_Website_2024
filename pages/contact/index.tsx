import type { ReactElement } from "react";
import Layout from "@/components/landing_page/layout";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import axios from "axios";
import useSWR from "swr";
import { NextPageWithLayout } from "../_app";
import Header from "@/components/landing_page/header";
import SearchBar from "@/components/landing_page/search";
import HomeMenu from "@/components/landing_page/homeLayoutMenu";
import StarIcon from "@mui/icons-material/Star";
import Person from "@/components/Person";
import { MovieList } from "../../components/Models/Movies";
// import { ContactUs } from "@/components/Feedback";

const Contact: NextPageWithLayout = () => {
  return (
    <>
      {/* <ContactUs /> */}
    </>
  );
};

Contact.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Contact;

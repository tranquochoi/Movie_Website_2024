import { ReactElement } from "react";
import Layout from "@/components/landing_page/layout";
import { NextPageWithLayout } from "../_app";
import HomeMenu from "@/components/landing_page/homeLayoutMenu";
import NavUser from "@/components/landing_page/navUser";
import Person from "@/components/Person";
import Watch from "@/components/watchList";

const User: NextPageWithLayout = () => {
  return (
    <>
      <NavUser />
      <Person />
      <Watch />
    </>
  );
};

User.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default User;

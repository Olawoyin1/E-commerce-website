import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const SharedLayout = ({ count, setOpenNav, modal, setModal }) => {
  return (
    <>

    
      <Header count={count} />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;

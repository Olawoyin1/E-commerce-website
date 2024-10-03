import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const SharedLayout = ({ openNav, setOpenNav, modal, setModal }) => {
  return (
    <>

    
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;

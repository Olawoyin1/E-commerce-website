import React from "react";
import { Outlet } from "react-router-dom";
// import Header from "./Header";
// import Footer from "./Footer";

const ShopLayout = ({ openNav, setOpenNav, modal, setModal }) => {
  return (
    <>

    
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default ShopLayout;

import React from "react";
import RootNav from "../navigation/root_nav/RootNav";
import Footer from "../footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="font-dm">
      <RootNav />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;

import React from "react";
import RootNav from "../common/navigation/root_nav/RootNav";
import Footer from "../common/footer/Footer";

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

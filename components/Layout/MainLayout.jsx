import React from "react";
import Footer from "../common/Footer/Footer";
import Navbar from "../common/Navbar/Navbar";
import Modal from "../home/Modal/Modal";

const MainLayout = ({ children }) => {
  return (
    <div className="font-dm">
      
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;

import React, { FC } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

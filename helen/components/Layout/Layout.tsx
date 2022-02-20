import React, { FC } from "react";
import Appbar from "../Appbar";
import Footer from "../Footer";
import Navbar from "../Navbar";
import styles from './Layout.module.scss'

const Layout: FC = ({ children }) => {
  return (
    <>
      <Appbar />
      <div className={styles.container}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;

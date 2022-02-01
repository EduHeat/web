import React, { FC } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import styles from './Layout.module.scss'

const Layout: FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

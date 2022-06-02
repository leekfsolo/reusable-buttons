import React from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";

import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <main id={styles.main}>
      <Sidebar />
      <Content />
    </main>
  );
};

export default Layout;

import React from "react";

import styles from "./Layout.module.scss";

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.logo}>
        <span className={styles.variant}>Dev</span>
        <span>challenges.io</span>
      </div>

      <ul>
        <li>colors</li>
        <li>typography</li>
        <li>spaces</li>
        <li className={styles.active}>buttons</li>
        <li>inputs</li>
        <li>grid</li>
      </ul>
    </nav>
  );
};

export default Sidebar;

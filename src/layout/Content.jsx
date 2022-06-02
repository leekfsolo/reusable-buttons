import React from "react";
import ButtonsPage from "./ButtonsPage";

import styles from "./Layout.module.scss";

const Content = () => {
  return (
    <div className={styles.content}>
      <ButtonsPage />
    </div>
  );
};

export default Content;

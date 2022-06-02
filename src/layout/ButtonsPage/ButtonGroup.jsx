import React from "react";

import styles from "../Layout.module.scss";

const ButtonGroup = (props) => {
  const { title = "", variant = "black", children } = props;

  return (
    <section className={styles["btn-group"]}>
      <p className={`${styles['variant-' + variant]} ${title === 'hidden' ? styles.hidden : ""}`}>{title}</p>
      {children}
    </section>
  );
};

export default ButtonGroup;

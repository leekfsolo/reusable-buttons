import React from "react";
import { ButtonVariant } from "./enum";
import styles from "./Button.module.scss";

import { ReactComponent as LocalGroceryStore } from "../assets/images/add_shopping_cart_white_24dp.svg";

const Button = (props) => {
  const {
    disableShadow = false,
    disabled = false,
    startIcon = null,
    endIcon = null,
    variant = null,
    size = null,
    color = null,
    children = <span>Default</span>,
    active = false,
  } = props;

  if (disabled) {
    if (variant === ButtonVariant.TEXT) {
      return (
        <div
          className={`${styles.btn} ${styles.md} ${styles["variant-text"]} ${styles.disabled}`}
        >
          {children}
        </div>
      );
    } else
      return (
        <div className={`${styles.btn} ${styles.md} ${styles.disabled}`}>
          {children}
        </div>
      );
  }

  const className = `${styles.btn} ${size ? styles[size] : styles.md} ${
    color ? styles[color] : styles["btn-default"]
  } ${active ? styles.active : ""} ${
    disableShadow ? styles.disableShadow : ""
  } ${variant ? styles[variant] : ""} ${
    startIcon || endIcon ? styles.icon : ""
  }`;

  return (
    <div className={className}>
      {startIcon === "local_grocery_store" && !endIcon ? (
        <LocalGroceryStore />
      ) : null}
      {children}
      {endIcon === "local_grocery_store" && !startIcon ? (
        <LocalGroceryStore />
      ) : null}
    </div>
  );
};

export default Button;

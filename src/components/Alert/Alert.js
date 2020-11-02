import React from "react";
import styles from "./Alert.module.css";

function Alert() {
  return (
    <div className={styles.alert}>
      <p className={styles.alertText}>Contact already exists!</p>
    </div>
  );
}
export default Alert;

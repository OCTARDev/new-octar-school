import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import logo from "../../assets/logo.svg";


export default function Loader(){
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.imageContainer}>
        <div className={styles.loader}></div>
        <Image src={logo} alt="logo"></Image>
      </div>
    </div>
  );
};


import React from "react";
import Logo from "../Logo/Logo";
import styles from "./NavBar.module.css";
import Button from "../Button/Button";
import { Search } from "../Search/Search";

const NavBar = ({ data, logo = false, feedback = false, search = false }) => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search data={data} placeholder="Search a album of your choice" />
      <Button children="Give feedBack" />
    </nav>
  );
};

export default NavBar;

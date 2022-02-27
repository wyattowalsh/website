/* Gatsby.js base layout for my personal website */

import * as React from "react";
import { styles } from "./base.module.scss";

const Layout = ({ children }) => {
	<div className={styles.layout}>{children}</div>;
};

export default Layout;

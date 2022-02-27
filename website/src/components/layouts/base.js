/* Gatsby.js base layout for my personal website */

import * as React from "react";
import "./base.module.scss";


const Layout = ({ children }) => {
	return (
		<div className={"layout"}>{children}</div>
	);
};

export default Layout;

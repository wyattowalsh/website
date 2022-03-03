/* Gatsby.js base layout for my personal website */

import * as React from "react";
import "./base.module.scss";
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from '../../styles/theme.js'
import CssBaseline from '@mui/material/CssBaseline';

const Layout = ({ children }) => {
	return (
		<ThemeProvider theme={Theme}>
            <CssBaseline />
            <div className={"layout"}>{children}</div>
        </ThemeProvider>
	);
};

export default Layout;

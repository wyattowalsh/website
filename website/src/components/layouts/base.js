/* Gatsby.js base layout for my personal website */

import * as React from "react";
import "./base.module.scss";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Helmet } from "react-helmet"

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#6a9fb5',
    },
    secondary: {
      main: '#b5826a',
    },
    tertiary: {
      main: '#b5a76a',
    },
    quaternary: {
      main: '#9b6ab5',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: '#6a9fb5',
        color: '#fff',
      },
    },
    MuiSwitch: {
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: 8,
      },
      switchBase: {
        padding: 1,
        '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
          transform: 'translateX(16px)',
          color: '#fff',
          '& + $track': {
            opacity: 1,
            border: 'none',
          },
        },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 13,
        border: '1px solid #bdbdbd',
        backgroundColor: '#fafafa',
        opacity: 1,
        transition:
          'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      },
    },
    MuiButton: {
      root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      },
    },
  },
  props: {
    MuiAppBar: {
      color: 'inherit',
    },
    MuiList: {
      dense: true,
    },
    MuiMenuItem: {
      dense: true,
    },
    MuiTable: {
      size: 'small',
    },
    MuiButton: {
      size: 'small',
    },
    MuiButtonGroup: {
      size: 'small',
    },
    MuiCheckbox: {
      size: 'small',
    },
    MuiFab: {
      size: 'small',
    },
    MuiFormControl: {
      margin: 'dense',
      size: 'small',
    },
    MuiFormHelperText: {
      margin: 'dense',
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiInputBase: {
      margin: 'dense',
    },
    MuiInputLabel: {
      margin: 'dense',
    },
    MuiRadio: {
      size: 'small',
    },
    MuiSwitch: {
      size: 'small',
    },
    MuiTextField: {
      margin: 'dense',
      size: 'small',
    },
    MuiTooltip: {
      arrow: true,
    },
  },
  typography: {
    h1: {
      fontFamily: 'Roboto Serif',
    },
    h2: {
      fontFamily: 'Roboto Serif',
    },
  },
})

const Layout = ({ children }) => {
	return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <link rel="apple-touch-icon" sizes="180x180" href="data/images/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="data/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="data/images/favicon-16x16.png"/>
        <link rel="manifest" href="data/images/site.webmanifest"/>
      </Helmet>
        <CssBaseline />
        <div className={"layout"}>{children}</div>
    </ThemeProvider>
	);
};

export default Layout;

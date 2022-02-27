/* layout component for individual interest pages for my personal website (Gatsby.js w/ MUI) */
import React from "react"
import { Link, graphql } from "gatsby"
import "./interest.module.scss"
import { Container, Typography } from "@material-ui/core"
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Theme } from '../../styles/theme.js'

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline />
            <div className={"layout"}>{children}</div>
        </ThemeProvider>
    );
};

export default function Interest(props) {
    return (
        <Layout>
            <Container maxWidth="md" style={{"backgroundImage": "url('../../' + ${props.data.image})">
                <Typography className={"interest-title"} variant="h4" component="h1">
                    {props.data.title}
                </Typography>
                <Typography className={"interest-description"} variant="body1" component="p">
                    {props.data.description}
                </Typography>
    )
}
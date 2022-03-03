/* Socials component for use on my personal website (Gatsby.js) */

import * as React from "react"
import * as styles from "./socials.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faTwitter, faMedium, faKaggle, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Grid from '@mui/material/Grid';
import { ClickAwayListener, Container, Tooltip, Typography } from '@mui/material';

const Socials = () => {
    return (
        <Container className={styles.container}>
            <Grid className={styles.socials} style={{ flexGrow: 1 }} container spacing={4}>
                <Grid item className={styles.social}>
                    <Tooltip disableFocusListener disableTouchListener title="Visit my LinkedIn Profile">
                    <a className={styles.link} href="https://www.linkedin.com/in/wyattowalsh/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FontAwesomeIcon className={styles.icon} icon={faLinkedinIn} style={{ color: "#0A66C2" }}/>
                        </a>
                        </Tooltip>
                </Grid>
                <Grid item className={styles.social}>
                    <Tooltip disableFocusListener disableTouchListener title="Visit my GitHub Profile">
                    <a className={styles.link} href="https://www.github.com/wyattowalsh" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FontAwesomeIcon className={styles.icon} icon={faGithub} style={{ color: "#181717" }}/>
                    </a>
                    </Tooltip>
                </Grid>
            <Grid item className={styles.social}>
                <Tooltip disableFocusListener disableTouchListener title="Visit my Twitter Profile">
                    <a className={styles.link} href="https://twitter.com/wyattowalsh" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FontAwesomeIcon className={styles.icon} icon={
                            faTwitter} style={{ color: "#1DA1F2" }}/>
                </a>
                </Tooltip>
                </Grid>
            <Grid item className={styles.social}>
                <Tooltip disableFocusListener disableTouchListener title="Visit my Medium Blog Profile">
                    <a className={styles.link} href="https://medium.com/@wyattowalsh" target="_blank" rel="noopener noreferrer" aria-label="Medium">
                        <FontAwesomeIcon className={styles.icon} icon={faMedium} style={{ color: "#000000" }}/>
                </a>
                </Tooltip>
                </Grid>
            <Grid item className={styles.social}>
                <Tooltip disableFocusListener disableTouchListener title="Visit my Kaggle Data Profile">
                    <a className={styles.link} href="https://www.kaggle.com/wyattowalsh" target="_blank" rel="noopener noreferrer" aria-label="Kaggle">
                        <FontAwesomeIcon className={styles.icon} icon={faKaggle} style={{ color: "#20BEFF" }}/>
                </a>
                </Tooltip>
                </Grid>
                <Grid item className={styles.social}>
                <Tooltip disableFocusListener disableTouchListener title="Visit my Spotify Profile">
                    <a className={styles.link} href="https://open.spotify.com/user/122096382?si=773364699d0045eb" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                        <FontAwesomeIcon className={styles.icon} icon={faSpotify} style={{ color: "#1DB954" }}/>
                    </a>
                </Tooltip>
                </Grid>
                <Grid item className={styles.social}>
                <Tooltip disableFocusListener disableTouchListener title="Send me a email">
                    <a className={styles.link} href="mailto:wyattowalsh@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                        <FontAwesomeIcon className={styles.icon} icon={faPaperPlane} style={{ color: "#6a9fb5" }}/>
                    </a>
                </Tooltip>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Socials;
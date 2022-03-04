/* Intro component for landing page of my personal website (Gatsby.js) */

import * as React from "react"
import * as styles from "./intro.module.scss"
import Socials from "./socials"
import { Grid, Container, Typography } from '@mui/material';

const Intro = () => {
    return (
        <Grid container className={styles.container}>
            <Grid container className={styles.introContainer}>
                <Grid container className={styles.intro}>
                    <Typography variant="h1" className={styles.greeting}>
                        Hi there! <span className={styles.wave} ><span className={styles.emoji}>👋</span></span>
                    </Typography><br/>
                    <Typography variant="h2" className={styles.introName}>
                        My name is <span className={styles.w}>W</span><span className={styles.name}>yatt</span> <span className={styles.w}>W</span><span className={styles.name}>alsh</span>
                    </Typography>
                </Grid>
                <Grid container className={styles.slogan}>
                    <Typography variant="h3" className={styles.subtitle}>
                            A hopeful technologist optimizing towards a better future with data, software, and decisions.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container className={styles.socialsContainer}>
                <Typography variant="h4" className={styles.connect}>
                    Feel free to reach out!
                </Typography>
                <Socials />
            </Grid>
        </Grid>
    )
}

export default Intro;
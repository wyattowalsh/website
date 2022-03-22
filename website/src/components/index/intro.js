/* Intro component for landing page of my personal website (Gatsby.js) */

import * as React from "react"
import * as styles from "./intro.module.scss"
import Socials from "./socials"
import { Grid, Container, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

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
            <FontAwesomeIcon icon={faChevronDown} className="fa-bounce" size="5x" sx="--fa-bounce-start-scale-x: 1; --fa-bounce-start-scale-y: 1;--fa-bounce-jump-scale-x: 1; --fa-bounce-jump-scale-y: 1; --fa-bounce-land-scale-x: 1; --fa-bounce-land-scale-y: 1; --fa-bounce-rebound: 0.3;" />
        </Grid>
    )
}

export default Intro;
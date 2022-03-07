/* Gatsbyjs React function to add a hero section for a particular input title, subtitle, and image. */
import * as React from "react"
import * as styles from "./hero.module.scss"
import { Container, Typography, Divider } from '@mui/material';

function Hero( props ){
    return (
        <div className={styles.hero} style={{ "backgroundImage": `url(${props.image}` }}>
            <Container className={styles.heroContainer}>
                <Typography variant="h1" className={styles.title}>
                    {props.title}
                </Typography>
                <Typography variant="h2" className={styles.subtitle}>
                    {props.subtitle}
                </Typography>
            </Container>
            <Divider className={styles.divider} />
        </div>
    )
}

export default Hero;
/* Gatsbyjs React function to add a hero section for a particular input title, subtitle, and image. */
import * as React from "react"
import * as styles from "./header.module.scss"
import { Container, Typography, Divider } from '@mui/material';
import { GatsbyImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faClone, faTags, faHourglass } from '@fortawesome/free-regular-svg-icons'

function Header(props) {
    return (
        <div className={styles.header}>
            <div className={styles.imageContainer}>
                <GatsbyImage image={props.banner} alt={props.title} className={styles.image} layout="fullWidth" objectPosition={props.bannerPosition} />
            </div>
            <Container className={styles.container}>
                <Typography variant="h1" className={styles.title}>
                    {props.title}
                </Typography>
                <Typography variant="h2" className={styles.tagline}>
                    {props.tagline}
                </Typography>
                <div className={styles.meta}>
                    <FontAwesomeIcon icon={faCalendarCheck} className={styles.icons} />
                    <div className={styles.metaTime}>
                        <Typography variant="p" className={styles.time}>
                            <span className={styles.metaLabel}>Created:</span>  {props.created}
                        </Typography>
                        <Typography variant="p" className={styles.time}>
                            <span className={styles.metaLabel}>Updated:</span> {props.updated}
                        </Typography>
                    </div>
                    <FontAwesomeIcon icon={faHourglass} className={styles.centerIcons} /> 
                    <Typography variant="p" className={styles.timeToRead}>
                        <span className={styles.metaLabel}>Reading Time:</span>  {props.timeToRead} minutes
                    </Typography>
                    <FontAwesomeIcon icon={faClone} className={styles.centerIcons} />
                    <Typography variant="p" className={styles.aliases}>
                        <span className={styles.metaLabel}>Aliases:</span> {props.aliases.sort().map((alias, index) => {
                            return (
                                <span key={index} className={styles.alias}>
                                    {alias}
                                </span>
                            )
                        })}
                    </Typography>
                </div>
            </Container>
        </div>
    )
}

export default Header;
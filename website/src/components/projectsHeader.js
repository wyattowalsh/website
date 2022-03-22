/* Gatsbyjs React function to add a hero section for a particular input title, subtitle, and image. */
import * as React from "react"
import * as styles from "./projectsHeader.module.scss"
import { Container, Typography, Tooltip, Grid } from '@mui/material';
import { GatsbyImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faHourglass } from '@fortawesome/free-regular-svg-icons'
import { faTags, faLink, faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

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
                <Grid container spacing={{ sm:1.5, lg:2 }} direction="row" justifyContent="start" alignItems="start" className={styles.meta}>
                    <Grid item className={styles.metaItem}>
                            <FontAwesomeIcon icon={faCalendarCheck} className={styles.icons} />
                        <div className={styles.metaInfo}>
                            <span className={styles.metaLabel}>Created:</span>  {props.created} 
                            <br/>
                                <span className={styles.metaLabel}>Updated:</span> {props.updated}
                        </div>
                    </Grid>
                    <Grid item className={styles.metaItem}>
                            <FontAwesomeIcon icon={faHourglass} className={styles.icons} /> 
                        <div className={styles.metaInfo}>
                            <span className={styles.metaLabel}>Reading Time:</span> {props.timeToRead} minutes
                        </div>
                    </Grid>
                    <Grid item className={styles.metaItem}>
                        <FontAwesomeIcon icon={faTags} className={styles.icons} />
                        <Typography variant="p" className={styles.tags}>
                            <span className={styles.metaLabel}>Tags:</span> {props.tags.sort().map((alias, index) => {
                                return (
                                    <span key={index} className={styles.tag}>
                                        {alias}
                                    </span>
                                )
                            })}
                        </Typography>
                    </Grid>
                    <Grid item className={styles.metaItem}>
                        <FontAwesomeIcon icon={faLayerGroup} className={styles.icons} />
                        <Typography variant="p" className={styles.skills}>
                            <span className={styles.metaLabel}>Skills:</span> {props.skills.sort().map((skill, index) => {
                                return (
                                    <span key={index} className={styles.skill}>
                                        {skill}
                                    </span>
                                )
                            })}
                        </Typography>
                    </Grid>
                    <Grid item className={styles.metaItem}>
                        <FontAwesomeIcon icon={faLink} className={styles.icons} />
                        <span className={styles.metaLabel}>Links:</span>
                        <div className={styles.metaInfo}>
                            <Tooltip disableFocusListener disableTouchListener title="Visit the project on GitHub">
                                <a href={props.links.github} target="_blank" rel="noopener noreferrer" className={styles.links}>
                                <FontAwesomeIcon icon={faGithub} className={styles.gh} />
                            </a>
                            </Tooltip>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Header;
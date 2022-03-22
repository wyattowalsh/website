/* Gatsbyjs React function to add a hero section for a particular input title, subtitle, and image. */
import * as React from "react"
import * as styles from "./toc.module.scss"
import { Container, Typography, Divider, List, ListItemButton, ListItemText, Collapse, ListSubheader } from '@mui/material';
import { Link } from "gatsby"
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

function TocHelper(props) {
        const [open, setOpen] = React.useState(true);

        const handleClick = () => {
            setOpen(!open);
        };

        const data = props.data
        const inset = props.inset
        if (data.items?.length > 0) {
            return (
                <>
                    <ListItemButton component={Link} to={data.url} onClick={handleClick}>
                        <ListItemText primary={data.title}/>
                            {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={!open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                        {data.items?.map((item) => {
                            return (
                                <TocHelper data={item} inset="true" />
                            )
                        })
                        }
                        </List>
                    </Collapse>
                </>
            )
        } else {
        return (
                <>
            <ListItemButton component={Link} to={data.url}>
                <ListItemText primary={data.title} inset={inset} />
                </ListItemButton>
            </>
        )
        }
    }

function Toc(props) {
    return (
        <div className={styles.toc}>
            <Container className={styles.container}>
                <List
                    sx={{ bgcolor: 'Background.paper'}}
                    component="nav"
                    aria-labelledby="toc"
                    subheader={
                        <ListSubheader component="div" className={styles.tocTitle}>
                        Contents
                        </ListSubheader>
                    }
                >
                    {props.data.items?.map((item) => {
                        return (
                            <TocHelper data={item} inset="false"/>
                        )
                    })}
                                         </List>
            </Container>
        </div>
    )
};

export default Toc;
/* Gatsbyjs React function to add a hero section for a particular input title, subtitle, and image. */
import * as React from "react"
import * as styles from "./sidebar.module.scss"
import { Container, Typography, Tooltip, Grid } from '@mui/material';
import { Link, graphql } from "gatsby"

function Sidebar({ data, props }) {
    var sidebar = {
        interests: {
            titles: [],
            paths: []
        },
        projects: {
            titles: [],
            paths: []
        },
        blog: {
            titles: [],
            paths: []
        },
    }
    for (var i = 0; i < data.allMdx.edges.length; i++) {
        var path = data.allMdx.edges[i].node.fileAbsolutePath
        var title = data.allMdx.edges[i].node.frontmatter.title
        if (path.includes("interests")) {
            sidebar.interests.titles.push(title)
            sidebar.interests.paths.push(path)
        } else if (path.includes("projects")) {
            sidebar.projects.titles.push(title)
            sidebar.projects.paths.push(path)
        } else if (path.includes("blog")) {
            sidebar.blog.titles.push(title)
            sidebar.blog.paths.push(path)
        }
    }
    return (
        <div className={styles.sidebar}>
            <Container className={styles.container}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h6" className={styles.title}>
                            {props.kind}
                        </Typography>
                    </Grid>
                    {sidebar[props.kind].titles.map((title, index) => {
                        return (
                            <Grid item xs={12} key={index}>
                                <Link to={sidebar[props.kind].paths[index]}>
                                    <Typography variant="body1" className={styles.link}>
                                        {title}
                                    </Typography>
                                </Link>
                            </Grid>
                        )
                    }
                    )}
                </Grid>
            </Container>
        </div>
    )
}

export default Sidebar;

export const SidebarQuery = graphql`
  query {
    allMdx(
    filter: {fileAbsolutePath: {regex: "/interests|projects|blog/[0-9a-z]*.mdx/"}}
  ) {
    edges {
      node {
        fileAbsolutePath
      }
    }
  }
  }
`
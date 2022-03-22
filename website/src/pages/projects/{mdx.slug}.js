/* layout component for individual interest pages for my personal website (Gatsby.js w/ MUI) */
import React from "react"
import { Link, graphql } from "gatsby"
import * as styles from "./projects.module.scss"
import { Container, Typography } from "@mui/material"
import Layout from "../../components/layouts/base"
import { Helmet } from "react-helmet"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Header from "../../components/projectsHeader"
import Nav from "../../components/nav"
import Toc from "../../components/toc"
import Sidebar from "../../components/sidebar"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Project = ({ data }) => {
    const banner = getImage(data.mdx.frontmatter.banner)
    return (
        <Layout>
            <Helmet>
                <title>{data.mdx.frontmatter.title} | Wyatt Walsh's Personal Site</title>
                <meta name="description" content={data.mdx.frontmatter.description} />
            </Helmet>
            <Nav />
            <Header
                title={data.mdx.frontmatter.title}
                tagline={data.mdx.frontmatter.tagline}
                banner={banner}
                bannerPosition={data.mdx.frontmatter.bannerPosition}
                links={data.mdx.frontmatter.links}
                created={data.mdx.frontmatter.created}
                updated={data.mdx.frontmatter.updated}
                tags={data.mdx.frontmatter.tags}
                skills={data.mdx.frontmatter.skills}
                timeToRead={data.mdx.timeToRead}
            />
            <div className={styles.contentContainer}>
                <Sidebar kind="projects"/>
                <Toc data={data.mdx.tableOfContents} />
                <Container className={styles.container}>
                    <hr/>
                    <MDXRenderer>{data.mdx.body}</MDXRenderer>
                </Container>
            </div>
        </Layout>
    )
}

export const ProjectQuery = graphql`
  query ($slug: String!) {
    mdx(slug: {eq: $slug}) {
        frontmatter {
            title
            tagline
            banner {
                childImageSharp {
                    gatsbyImageData
           }
                }
            created(formatString: "dddd, MMMM Do, YYYY")
            updated(formatString: "dddd, MMMM Do, YYYY")
            tags
            skills
            bannerPosition
            links {
                github
            }
        }
        tableOfContents
        timeToRead
        body
    }
  }
`

export default Project
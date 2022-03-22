/* layout component for individual interest pages for my personal website (Gatsby.js w/ MUI) */
import React from "react"
import { Link, graphql } from "gatsby"
import * as styles from "./interests.module.scss"
import { Container, Typography } from "@mui/material"
import Layout from "../../components/layouts/base"
import { Helmet } from "react-helmet"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Header from "../../components/header"
import Nav from "../../components/nav"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Interest = ({ data }) => {
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
                aliases={data.mdx.frontmatter.aliases}
                created={data.mdx.frontmatter.created}
                updated={data.mdx.frontmatter.updated}
                tags={data.mdx.frontmatter.tags}
                timeToRead={data.mdx.timeToRead}
            />
            <div className={styles.content}>
                <Container className={styles.container}>
                    <MDXRenderer>{data.mdx.body}</MDXRenderer>
                </Container>
            </div>
        </Layout>
    )
}

export const InterestQuery = graphql`
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
            aliases
            created(formatString: "dddd, MMMM Do, YYYY")
            updated(formatString: "dddd, MMMM Do, YYYY")
            tags
            bannerPosition
        }
        tableOfContents
        timeToRead
        body
    }
  }
`

export default Interest
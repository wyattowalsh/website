/* layout component for individual interest pages for my personal website (Gatsby.js w/ MUI) */
import React from "react"
import { Link, graphql } from "gatsby"
import "./interests.module.scss"
import { Container, Typography } from "@material-ui/core"
import { Layout } from "./base"
import Hero from "../components/hero"

export default ({ data }) => {

    const { frontmatter, tableOfContents, timeToRead, html } = data.allMdx.edges.node
    return (
        <Layout>
        </Layout>
    )
}

export const query = graphql`
  {
    mdx(filter: {slug: {glob: "*/interests/*"}}) {
          frontmatter {
            aliases
            cover_path
            date
            image {
              publicURL
              relativePath
            }
            title
            tags
            tagline
            last_updated
          }
          tableOfContents
          timeToRead
          html
    }
  }
`
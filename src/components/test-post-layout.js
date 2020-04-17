import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from './layout'

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
    return (
        <Layout>
            <MDXProvider components={shortcodes}>
                <h1>{mdx.frontmatter.title}</h1>
                <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
        </Layout>
    )
}

export const pageQuery = graphql`
    query BlogPostQuery($id: String) {
        mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                title
            }
        }
    }
`
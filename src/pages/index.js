import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql, Link } from 'gatsby';

export const query = graphql`
    query PostQuery {
        allMdx {
            edges {
                node {
                    frontmatter {
                        title
                        slug
                    }
                    id
                }
            }
        }
    }
`

export default function Index ({ data }) {
    const { edges: posts } =  data.allMdx;

    return (
        <Layout>
            <SEO />
            <p>Hello world, I'm Asa.</p>
            <p>
                I'm in the process of creating a space where I can collect and share
                what I'm learning, reading, enjoying. It will most likely be a
                random collection of thoughts that may or may not be coherent.
                Thanks for joining me!
            </p>
            <ul>
                {
                    posts.map(post => {
                        return (
                            <li key={post.node.id}>
                                <Link to={`${post.node.frontmatter.slug}`}>
                                    {post.node.frontmatter.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </Layout>
    );
}

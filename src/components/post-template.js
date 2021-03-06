import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from './layout';
import SEO from './seo';

const shortcodes = { Link }; // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
	return (
		<Layout>
			<SEO title={mdx.frontmatter.title} description={mdx.frontmatter.title} />
			<MDXProvider components={shortcodes}>
				<h1>{mdx.frontmatter.title}</h1>
				<p>{mdx.frontmatter.date}</p>
				<MDXRenderer>{mdx.body}</MDXRenderer>
			</MDXProvider>
		</Layout>
	);
}

export const pageQuery = graphql`
	query BlogPostQuery($id: String) {
		mdx(id: { eq: $id }) {
			body
			id
			frontmatter {
				date
				title
			}
		}
	}
`;

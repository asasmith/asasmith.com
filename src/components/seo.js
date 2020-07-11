import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export default function SEO({ title, description }) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						defaultTitle: title
						defaultDescription: description
						siteUrl: url
						titleTemplate
						twitterHandle
					}
				}
			}
		`
	);

	const {
		defaultTitle,
		defaultDescription,
		siteUrl,
		titleTemplate,
		twitterHandle,
	} = site.siteMetadata;

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		url: siteUrl,
	};

	return (
		<Helmet title={seo.title} titleTemplate={titleTemplate}>
			<meta name="description" content={seo.description} />
			{seo.url && <meta property="og:url" content={seo.url} />}
			{seo.title && <meta property="og:title" content={seo.title} />}
			{seo.description && (
				<meta property="og:description" content={seo.description} />
			)}
			{twitterHandle && <meta name="twitter:creator" content={twitterHandle} />}
			{seo.title && <meta name="twitter:title" content={seo.title} />}
			{seo.description && (
				<meta name="twitter:description" content={seo.description} />
			)}
		</Helmet>
	);
}

SEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
};

SEO.defaultProps = {
	description: null,
	title: null,
};

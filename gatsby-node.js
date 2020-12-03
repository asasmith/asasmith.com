const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions;

	// TODO: convert MDX to MD?

	const result = await graphql(`
		query {
			allMdx {
				edges {
					node {
						id
						frontmatter {
							slug
						}
					}
				}
			}
		}
	`);

	if (result.errors) {
		reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
	}

	const posts = result.data.allMdx.edges;

	posts.forEach(({ node }, index) => {
		createPage({
			path: node.frontmatter.slug,
	    	component: path.resolve(`./src/components/post-template.js`),
			context: { id: node.id },
		});
	});
};

module.exports = {
    siteMetadata: {
        title: `Asa Smith | My Digital Garden`,
        description: `Random thoughts and musings`,
        author: `asasmith`
    },
    plugins: [
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
    ],
}
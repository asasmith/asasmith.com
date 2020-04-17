module.exports = {
    siteMetadata: {
        title: `Asa Smith | My Digital Garden`,
        description: `Random thoughts and musings`,
        author: `asasmith`
    },
    plugins: [
        // {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //         name: `pages`,
        //         path: `${__dirname}/src/pages/`,
        //     },
        // }, 
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "posts",
                path: `${__dirname}/content/posts/`,
            },
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        {
           resolve: `gatsby-plugin-mdx`,
           options: {
               defaultLayouts: { 
                    default: require.resolve(`./src/components/layout.js`)
               },
           },
        },
    ],
}
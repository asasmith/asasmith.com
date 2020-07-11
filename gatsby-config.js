module.exports = {
    siteMetadata: {
        title: `Asa Smith`,
        titleTemplate: `%s | Digital Garden`,
        description: `Random thoughts and musings`,
        url: `https://www.asasmith.com`,
        twitterHandle: `@asa_smith`,
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
        `gatsby-plugin-react-helmet`,
    ],
}
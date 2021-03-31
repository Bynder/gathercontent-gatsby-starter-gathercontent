require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    flags: { PRESERVE_WEBPACK_CACHE: true },
    plugins: [
        `gatsby-plugin-postcss`,
        {
            resolve: "gatsby-source-gathercontent",
            options: {
                email: process.env.GATSBY_GC_EMAIL,
                apiKey: process.env.GATSBY_GC_API_KEY,
                projectId: process.env.GATSBY_GC_PROJECT_ID,
            },
        },
        {
            resolve: `gatsby-plugin-page-creator`,
            options: {
                path: `${__dirname}/src/pages`,
                ignore: {
                    // Example: Ignore `file.example.js`, `dir/s/file.example.tsx`
                    patterns: [`node_modules`],
                },
            },
        },
    ]
}
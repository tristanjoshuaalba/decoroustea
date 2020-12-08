require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })

module.exports = {
    siteMetadata: {
        title: `Decorous Tea`,
        name: `decoroustea.xyz`,
        siteUrl: `http://decoroustea.xyz`,
        description: `This is a sandbox portfolio + tech blog by Tristan Joshua Alba.`,
        hero: {
            heading: `Hi there, I'm Tristan! 👋 This is my sandbox learning portfolio site.`,
            maxWidth: 652,
        },
        social: [{
                name: `twitter`,
                url: `https://twitter.com/tristanjalba`,
            },
            {
                name: `github`,
                url: `https://github.com/tristanjoshuaalba`,
            },
            {
                name: `instagram`,
                url: `https://www.instagram.com/tristan.j.alba/`,
            },
            {
                name: `linkedin`,
                url: `https://www.linkedin.com/in/tristanjoshuaalba/`,
            },
            {
                name: `dribbble`,
                url: `https://dribbble.com/`,
            },
        ],
    },
    plugins: [{
            resolve: "@narative/gatsby-theme-novela",
            options: {
                contentPosts: "content/posts",
                contentAuthors: "content/authors",
                basePath: "/",
                authorsPage: true,
                sources: {
                    local: true,
                    contentful: false,
                },
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Decorous Tea`,
                short_name: `decoroustea`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#fff`,
                display: `standalone`,
                icon: `src/assets/decoroustea-icon.png`,
            },
        },
        {
            resolve: `gatsby-plugin-netlify-cms`,
            options: {},
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
              // The property ID; the tracking code won't be generated without it
              trackingId: process.env.GA_TRACKING_ID,
            },
        },
    ],
};
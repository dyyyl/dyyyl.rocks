module.exports = {
  siteMetadata: {
    title: 'ディイル。 岩',
    description: '"It\'s my blog!" -Wayne Gretzky',
    author: 'Dyl 🦊',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-csp',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Noto Sans JP:700,900:japanese', 'PT Sans:400,700'],
        },
      },
    },
    'gatsby-remark-reading-time',
    {
      resolve: '@danbruegge/gatsby-plugin-stylelint',
      options: { files: ['**/*.{js,jsx}'] },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
              wrapperStyle: 'margin: 3rem auto;',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-js',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          'X-Content-Type-Options': 'nosniff',
          'Content-Security-Policy': "frame-ancestors 'none'",
          'X-Frame-Options': 'DENY',
          'X-XSS-Protection': '1; mode=block',
        }, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'dyyyl-rocks',
        short_name: 'dyyyl.rocks',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/shared/images/myFace.jpg', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

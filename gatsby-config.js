module.exports = {
  siteMetadata: {
    title: 'ディイル。 岩',
    description: '"It\'s my blog!" -Wayne Gretzky',
    author: 'Dyl 🦊',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Noto Sans JP:700,900:japanese', 'PT Sans:400,700'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#d64292',
        showSpinner: false,
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
          '/*': [
            'X-Content-Type-Options: nosniff',
            "Content-Security-Policy: frame-ancestors 'self'; script-src 'self'; object-src 'none'; default-src 'none'; base-uri 'self';  form-action 'self'",
            'X-Frame-Options: DENY',
            'X-XSS-Protection: 1; mode=block',
          ],
        },
        allPageHeaders: [],
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
        transformHeaders: headers => headers,
        generateMatchPathRewrites: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'simple-and-charming',
        short_name: 'dyyyl.rocks',
        start_url: '/',
        background_color: '#FBFBFB',
        theme_color: '#d64292',
        display: 'minimal-ui',
        icon: 'src/shared/images/myFace.jpg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};

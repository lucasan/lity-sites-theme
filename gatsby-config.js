module.exports = ({
  baseUrl = 'http://127.0.0.1:8002',
  protocol = 'http',
  hostingWPCOM = false,
  useACF = true,
  sourceUrl = 'http://127.0.0.1:8002/',
  replacementUrl = 'http://127.0.0.1:8000/'
}) => ({
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: baseUrl,
        protocol: protocol,
        hostingWPCOM: hostingWPCOM,
        useACF: useACF,
        verboseOutput: true,
        perPage: 100,
        searchAndReplaceContentUrls: {
          sourceUrl: sourceUrl,
          replacementUrl: replacementUrl,
        },
        concurrentRequests: 10,
        includedRoutes: [
          '**/posts',
          '**/pages',
          '**/media',
          '**/categories',
          '**/tags',
          '**/users',
          '**/blocks',
          '**/types',
          '**/statuses',
          '**/site-custom/v2/*',
          '**/wp-api-menus/v2/*'
        ],
        normalizer: function ({ entities }) {
          return entities
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Lucas Torres",
        short_name: "Lucas Torres",
        start_url: "/",
        background_color: "rgba(0,8,28,0.93)",
        theme_color: "rgba(255,255,255,0)",
        display: "standalone",
        icon: "src/images/icon.png",
        crossOrigin: `use-credentials`,
      }
    },
    `@rhysforyou/gatsby-plugin-react-helmet-async`,
    `gatsby-plugin-sass`
  ],
})
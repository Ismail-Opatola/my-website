const activeEnv =
 process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: ${activeEnv}`)

require("dotenv").config({
 path: `.env.${process.env.NODE_ENV}`,
})

// ================================================
/*
 * Robot.txt -- disable crawlers for deploy-previews
 * https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt/
 */
const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = process.env.SITE_URL,
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
 } = process.env,
 isNetlifyProduction = NETLIFY_ENV === "production",
 siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL
// ================================================

module.exports = {
 siteMetadata: {
  title: "Ismail Opatola",
  description:
   "Web Developer | Full Stack React Developer living in Lagos, Nigeria",
  developer: "Ismail Opatola",
  image: "src/assets/me.jpg",
  twitterUsername: "@opatolaismail",
  siteUrl: "https://www.ismailopatola.io",
 },
 plugins: [
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-sass",
  "gatsby-plugin-catch-links",
  "gatsby-transformer-remark",
  {
   resolve: "gatsby-plugin-nprogress",
   options: {
    // Setting a color is optional.
    color: "tomato",
    // Disable the loading spinner.
    showSpinner: false,
   },
  },
  {
   resolve: "gatsby-source-contentful",
   options: {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
   },
  },
  {
   resolve: `gatsby-plugin-disqus`,
   options: {
    shortname: process.env.DISCUS_SHORTNAME,
   },
  },
  {
   resolve: "gatsby-plugin-material-ui",
   // If you want to use styled components you should change the injection order.
   options: {
    /*
     * StylesProvider: {
     *   injectFirst: true,
     * },
     */
   },
  },
  {
   resolve: "gatsby-plugin-react-svg",
   options: {
    rule: {
     include: /\.inline\.svg$/,
    },
   },
  },
  {
   resolve: "gatsby-source-filesystem",
   options: {
    name: "images",
    path: `${__dirname}/src/assets`,
   },
  },
  {
   resolve: "gatsby-source-filesystem",
   options: {
    name: "pages",
    path: `${__dirname}/src/pages`,
   },
  },
  {
   resolve: "gatsby-source-filesystem",
   options: {
    name: "util",
    path: `${__dirname}/src/util`,
   },
  },
  "gatsby-transformer-sharp",
  "gatsby-plugin-sharp",
  {
   resolve: "gatsby-plugin-manifest",
   options: {
    name: "gatsby-starter-default",
    short_name: "starter",
    start_url: "/",
    background_color: "#663399",
    theme_color: "#663399",
    display: "minimal-ui",
    icon: "src/assets/icon.png", // This path is relative to the root of the site.
   },
  },

  /*
   * This (optional) plugin enables Progressive Web App + Offline functionality
   * To learn more, visit: https://gatsby.dev/offline
   * `gatsby-plugin-offline`,
   */

  {
   resolve: "gatsby-plugin-sitemap",
   options: {
    output: "/some-other-sitemap.xml",

    /*
     * Exclude specific pages or groups of pages using glob parameters
     * See: https://github.com/isaacs/minimatch
     * The example below will exclude the single `path/to/page` and all routes beginning with `category`
     */
    exclude: ["/category/*", "/path/to/page"],
    query: `
        {
            site {
                siteMetadata {
                    siteUrl
                }
            }

            allSitePage {
                edges {
                    node {
                        path
                    }
                }
            }
        }`,
    serialize: ({ site, allSitePage }) =>
     allSitePage.edges.map(edge => ({
      url: site.siteMetadata.siteUrl + edge.node.path,
      changefreq: "daily",
      priority: 0.7,
     })),
   },
  },
  {
   resolve: "gatsby-plugin-robots-txt",
   options: {
    query: `{
          site {
            siteMetadata {
              siteUrl
            }
          }
        }`,
    host: ({ site }) => `${site.siteMetadata.siteUrl}`,
    sitemap: ({ site }) => `${site.siteMetadata.siteUrl}/sitemap.xml`,
    // ResolveEnv: () => process.env.GATSBY_ENV,
    resolveEnv: () => NETLIFY_ENV,
    env: {
     development: {
      policy: [{ userAgent: "*", disallow: ["/"] }],
     },
     production: {
      policy: [{ userAgent: "*" }],
     },
     "branch-deploy": {
      policy: [{ userAgent: "*", disallow: ["/"] }],
      sitemap: null,
      host: null,
     },
     "deploy-preview": {
      policy: [{ userAgent: "*", disallow: ["/"] }],
      sitemap: null,
      host: null,
     },
    },
   },
  },
  {
   resolve: `gatsby-plugin-google-analytics`,
   options: {
    trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_ID,
    // Defines where to place the tracking script - `true` in the head and `false` in the body
    head: false,
    // // Setting this parameter is optional
    // anonymize: true,
    // // Setting this parameter is also optional
    // respectDNT: true,
    // // Avoids sending pageview hits from custom paths
    exclude: ["/preview/**"],
    // // Delays sending pageview hits on route update (in milliseconds)
    // pageTransitionDelay: 0,
    // // Enables Google Optimize using your container Id
    // // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
    // // // Enables Google Optimize Experiment ID
    // // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
    // // // Set Variation ID. 0 for original 1,2,3....
    // // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
    // // Any additional optional fields
    // sampleRate: 5,
    // siteSpeedSampleRate: 10,
    // cookieDomain: 'aquasar.io',
   },
  },
 ],
}

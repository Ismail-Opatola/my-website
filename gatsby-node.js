/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// const { graphql } = require("gatsby")
const path = require(`path`)

// const notes = require("./src/util/notes")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions


  // const blogPost = path.resolve(`./src/templates/blog-post.js`)
  return graphql(
    `
      {
        allContentfulBlogPost(
          limit: 500
          sort: { fields: timestamp, order: DESC }
        ) {
          nodes {
            id
            slug
            title
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allContentfulBlogPost.nodes

    // posts.forEach((post, index) => {
    //   const previous = index === posts.length - 1 ? null : posts[index + 1]
    //   const next = index === 0 ? null : posts[index - 1]
    //
    //   createPage({
    //     path: post.slug,
    //     component: blogPost,
    //     context: {
    //       slug: post.slug,
    //       previous,
    //       next,
    //     },
    //   })
    // })

    // Create blog post list pages
    const postsPerPage = 4;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: path.resolve('./src/templates/blogList.js'),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1
        },
      });
    });
  })
}
exports.onCreateNode = async ({ node, actions }) => {
  try {
    const { createNodeField } = actions

    if (
      node.internal.type === "File" &&
      node.internal.mediaType === "application/javascript"
    ) {
      createNodeField({
        node,
        name: "notes",
        value: require("./src/util/notes"),
      })
    }
  } catch (error) {
    if (error) return Promise.reject(error)
  }
}

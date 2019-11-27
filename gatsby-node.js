/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// const { graphql } = require("gatsby")
const path = require(`path`);
// const { slugify } = require("./src/util/utilityFunctions");

// const notes = require("./src/util/notes")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

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

    posts.forEach((post, index) => {
      const previousPost = index === posts.length - 1 ? null : posts[index + 1]
      const nextPost = index === 0 ? null : posts[index - 1]

      createPage({
        path: post.slug,
        component: path.resolve(`./src/templates/blog_post.js`),
        context: {
          slug: post.slug,
          previousPost,
          nextPost,
        },
      })
    })

    // Create blog post list pages
    const postsPerPage = 4;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: path.resolve('./src/templates/blog_list.js'),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1
        },
      });
    });

  })
  // .then(() => {
  // TODO: fetch tags and tag-post-list in graphgql above
  // TODO: grab tags object result in this callback 
  //   // =========================
  //   // Tag 
  //   // ===================
  //   let tags = ['react', 'hooks', 'app security'];
  //   const postsPerPage = 4;
    
  //   tags.map((tag) => {
  //     const numPages = Math.ceil(tag.posts.length / postsPerPage);

  //     Array.from({ length: numPages }).forEach((_, i) => {
  //       createPage({
  //         path: i === 0 ? `/tag/${slugify(tag)}}` : `/tag/${slugify(tag)}/${i + 1}`,
  //         component: path.resolve('./src/templates/tag_post_list.js'),
  //         context: {
  //           limit: postsPerPage,
  //           skip: i * postsPerPage,
  //           numPages: numPages,
  //           currentPage: i + 1,
  //           slug: slugify(tag)
  //         },
  //       });
  //     });
  //   })
  // })
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

// tags
// should goto /tags/<tag>
// should support pagination /tags/<tag>/<num>
// process
// - fetch all contentful tags
// -- create a page for each tag
  // each tag page should support pagination
// --- create a paginated tag_post_list
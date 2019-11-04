/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// const { graphql } = require("gatsby")
const notes = require("./src/util/notes")

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
        value: notes,
      })
    }
  } catch (error) {
    if (error) return Promise.reject(error)
  }
}

// exports.onCreateNode = async ({ node, actions }) => {
//   const { createNodeField } = actions

//   if (
//     node.internal.type === "File" &&
//     node.internal.mediaType === "application/javascript"
//   ) {
//     // projects.map(project => {
//     //     if (node.relativePath === project.image) {
//     //         project.image = node.childImageSharp.src
//     //     }
//     // })

//     try {
//       await projects
//         .map(async project => {
//           const res = await graphql(customQuery, {
//             options: () => {
//               return {
//                 variables: {
//                   projImg: project.image,
//                 },
//               }
//             },
//           })
// ====================================================
//           // const res = await graphql(`
//           //   {
//           //     file(relativePath: {eq: $projImg }) {
//           //         childImageSharp {
//           //             fluid(maxWidth: 600) {
//           //                 ...GatsbyImageSharpFluid
//           //             }
//           //         }
//           //     }
//           // }
//           // `)
// ====================================================

//           project.image = res.childImageSharp.fluid
//         })
//         .then(() => {
//           createNodeField({
//             node,
//             name: "projects",
//             value: projects,
//           })
//           createNodeField({
//             node,
//             name: "team",
//             value: team,
//           })
//         })
//     } catch (error) {
//       if (error) return Promise.reject(error)
//     }
//   }
// }

// const customQuery = graphql`
//   query customQuery($projImg: String!) {
//     file(relativePath: { eq: $projImg }) {
//       childImageSharp {
//         fluid(maxWidth: 600) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `
// ===================================================
/*
graphql(getBookQuery, {
  options: props => {
    return {
      variables: {
        id: props.bookId
      }
    };
  }
})

const getBookQuery = gql`
  query($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author{
        id
        name
        age
        books{
          name
          id
        }
      }
    }
  }
`;


*/

// ====================================================================
// exports.onCreateNode = async ({ node, actions, graphql }) => {
//   const { createNodeField } = actions

//   if (
//     node.internal.type === "File" &&
//     node.internal.mediaType === "application/javascript"
//   ) {

//     try {
//       await graphql(`allFile(filter: {relativePath: {ne: "property"}, extension: {eq: "jpg"}, dir: {regex: "/images/"}}) {
//     nodes {
//       id
//       childImageSharp {
//         fluid(maxWidth: 600) {
//           src
//         }
//       }
//     }
//   }`).then(res => {
//         console.log(res)
//         createNodeField({
//           node,
//           name: "projects",
//           value: projects,
//         })
//         createNodeField({
//           node,
//           name: "team",
//           value: team,
//         })
//       })
//     } catch (error) {
//       if (error) return Promise.reject(error)
//     }
//   }
// }

import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
// MUI
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
// NATIVE COMPONENTS
import Layout from "../components/layout/Layout"
import SEO from "../components/seo"
import BlogCard from "../components/blog/BlogCard"
import BlogLayout from "../components/blog/BlogLayout"
import Paginate from "../components/blog/Paginate"

const useStyles = makeStyles(theme => ({
 section: {
  display: "Grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
  gridRowGap: theme.spacing(8),
  gridColumnGap: theme.spacing(4),
  "& > article": {
   backgroundColor: "inherit",
   color: "#c5c1b9",
  },
 },
}))

const TagPage = props => {
 const classes = useStyles()

 const {
  data: { allRelatedPosts },
  pageContext: { currentPage, numPages, slug, name },
 } = props

 const isFirst = currentPage === 1
 const isLast = currentPage === numPages
 const prevPage = currentPage - 1 === 1 ? `/` : (currentPage - 1).toString()
 const nextPage = (currentPage + 1).toString()

//  console.log(allRelatedPosts.nodes)
 return (
  <Layout>
   <SEO
    title={`Tag — ${name}`}
    description={`Related tutorials, articles on ${slug} and more web developments`}
    slug={`https://ismailopatola.io/tag/${slug}`}
   />

   <BlogLayout {...props}>
    <Grid item component="section" className={classes.section}>
     {allRelatedPosts
      ? allRelatedPosts.nodes.map(post => (
         <BlogCard post={post} key={post.id} />
        ))
      : <Typography>...fetching Data</Typography>}
    </Grid>

    <Paginate
     isFirst={isFirst}
     isLast={isLast}
     currentPage={currentPage}
     prevPage={prevPage}
     nextPage={nextPage}
     numPages={numPages}
     tag_list
     tag_slug={slug}
    />
   </BlogLayout>
  </Layout>
 )
}

export const TagQuery = graphql`
  query tagQuery($skip: Int!, $limit: Int!, $slug: String!) {
    allRelatedPosts: allContentfulBlogPost(
      limit: $limit
      skip: $skip
      sort: { fields: timestamp, order: DESC }
      filter: {tags: {elemMatch: {slug: {eq: $slug}}}}
    ) {
      nodes {
        id
        slug
        title
        timestamp(formatString: "MMMM Do YYYY")
        description
        blogImage {
          title
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        author {
          bio
          name
          avatar {
            title
            fluid {
            ...GatsbyContentfulFluid       
            }
          }
        }
      }
    }
  }
`

export default TagPage

TagPage.propTypes = {
 classes: PropTypes.object,
 data: PropTypes.shape({
  allRelatedPosts: PropTypes.shape({
   nodes: PropTypes.arrayOf(PropTypes.object),
  }),
 }),
 pageContext: PropTypes.shape({
  currentPage: PropTypes.number,
  numPages: PropTypes.number,
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
 }),
}

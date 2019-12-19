import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
// MUI
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
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
  //@blog_layout xl dowm --
  // blog_list is 3fr of 1100px = 700, 700/2 = our gridTemplateColumn minmax 350 1fr
  //@ lg dowm -- 600/2 = 300 1fr
  // + spacing = 290
  gridRowGap: theme.spacing(8),
  gridColumnGap: theme.spacing(4),
  "& > article": {
   backgroundColor: "inherit",
   color: "#c5c1b9",
  },
  [theme.breakpoints.dowm("xs")]: {
    gridTemplateColumns: "100%",
    gridColumnGap: theme.spacing(0),
  }
 },
}))

const BlogList = props => {
 const classes = useStyles()

 const {
  data: {
   allpost,
   site: {
    siteMetadata: { siteUrl },
   },
  },
  pageContext: { currentPage, numPages },
 } = props

 const isFirst = currentPage === 1
 const isLast = currentPage === numPages
 const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
 const nextPage = (currentPage + 1).toString()

 console.log(allpost.nodes)
 return (
  <Layout>
   <SEO
    title="Blog | Tutorials on Javascript, React, Nodejs, Firebase and more web developments"
    slug={`blog`}
   />

   <BlogLayout {...props}>
    <Grid item component="section" className={classes.section}>
     {allpost
      ? allpost.nodes.map(post => (
         <BlogCard post={post} siteUrl={siteUrl} key={post.id} />
        ))
      : "...fetching Data"}
    </Grid>

    <Paginate
     isFirst={isFirst}
     isLast={isLast}
     currentPage={currentPage}
     prevPage={prevPage}
     nextPage={nextPage}
     numPages={numPages}
     blog_list
    />
   </BlogLayout>
  </Layout>
 )
}

export const BlogListQuery = graphql`
 query blogListQuery($skip: Int!, $limit: Int!) {
  allpost: allContentfulBlogPost(
   limit: $limit
   skip: $skip
   sort: { fields: timestamp, order: DESC }
  ) {
   nodes {
    id
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
    blogImage {
     title
     fluid {
      ...GatsbyContentfulFluid
     }
    }
    slug
    title
    timestamp(formatString: "MMMM Do YYYY")
    description
   }
  }
  site: site {
   siteMetadata {
    siteUrl
   }
  }
 }
`

export default BlogList

BlogList.propTypes = {
 classes: PropTypes.object,
 data: PropTypes.shape({
  allpost: PropTypes.shape({
   nodes: PropTypes.arrayOf(PropTypes.object),
  }),
  site: PropTypes.shape({
   siteMetadata: PropTypes.shape({
    siteUrl: PropTypes.string,
   }),
  }),
 }),
 pageContext: PropTypes.shape({
  currentPage: PropTypes.number,
  numPages: PropTypes.number,
 }),
}

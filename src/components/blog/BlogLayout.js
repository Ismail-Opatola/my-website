import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// MUI
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
// NATIVE COMPONENTS
// import Searchbar from "../Searchbar"
import Tags from "../Tags"
import Typography from "@material-ui/core/Typography"

/**
xs, extra-small: 0px
sm, small: 600px
md, medium: 960px
lg, large: 1280px
xl, extra-large: 1920px*/

const useStyles = makeStyles(theme => ({
 root: {
  color: "#c5c1b9",
  margin: "auto",
  padding: theme.spacing(8, 4),
  display: "grid",
  gridRowGap: theme.spacing(8),
  gridColumnGap: theme.spacing(8),
  boxSizing: "border-box",
  [theme.breakpoints.up("xl")]: {
   maxWidth: "1400px",
   gridTemplateColumns: "2fr 1fr",
  },
  [theme.breakpoints.down("xl")]: {
   maxWidth: "1100px",
   gridTemplateColumns: "3fr 1fr",
  },
  [theme.breakpoints.down("lg")]: {
   maxWidth: "1000px",
   gridTemplateColumns: "3fr 1fr",
  },
  [theme.breakpoints.down("md")]: {
   maxWidth: "650px",
   gridTemplateColumns: "1fr",
  },
  [theme.breakpoints.down("sm")]: {
   maxWidth: "500px",
   gridTemplateColumns: "1fr",
  },
  [theme.breakpoints.down("xs")]: {
   gridTemplateColumns: "1fr",
   gridColumnGap: theme.spacing(0),
  },
 },
 h4: {
   marginBottom: theme.spacing(2),
 },
 aside: {
  position: "relative",
 },
}))

export default function BlogLayout({ children }) {
 const classes = useStyles()
 const data = useStaticQuery(graphql`
  query {
   allTags: allContentfulTag {
    nodes {
     id
     name
     slug
     blog_post {
      id
     }
    }
   }
  }
 `)
 

 return (
  <Grid className={classes.root} component="section">
   <Grid component="section">{children}</Grid>

   <Grid component="aside" className={classes.aside}>
    {/* <Searchbar /> */}
    <Typography variant="h4" align={"center"} className={classes.h4}>Filter by categories</Typography>
    {data.allTags.nodes.map(
     tag => tag.blog_post !== null && <Tags tag={tag} />
    )}
    {/* only show tags that has at least a post linked to it */}
   </Grid>
  </Grid>
 )
}

BlogLayout.propTypes = {
 children: PropTypes.node.isRequired,
 data: PropTypes.shape({
  allTags: PropTypes.shape({
   nodes: PropTypes.arrayOf(PropTypes.object),
  }),
 }),
}

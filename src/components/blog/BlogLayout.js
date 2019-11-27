import React from "react"
import PropTypes from "prop-types"
// MUI
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
// NATIVE COMPONENTS
// import Searchbar from "../Searchbar"
import Tags from "../Tags"

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

 aside: {
  position: "relative",
 },
}))

export default function BlogLayout({ children }) {
 const classes = useStyles()

 return (
  <Grid className={classes.root} component="section">
   <Grid component="section">{children}</Grid>

   <Grid component="aside" className={classes.aside}>
    {/* <Searchbar /> */}
    {["React", "Node", "Firebase", "app security"].map(tag => (
     <Tags tag={tag} key={tag} />
    ))}
   </Grid>
  </Grid>
 )
}

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
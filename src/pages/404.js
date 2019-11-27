import React from "react"
// import PropTypes from "prop-types"
import clsx from "clsx"

import SEO from "../components/seo"
import Link from "../components/Link"

import {
 makeStyles,
 createMuiTheme,
 MuiThemeProvider,
 responsiveFontSizes,
} from "@material-ui/core/styles"
import { lighten } from "@material-ui/core/styles/colorManipulator"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Box from "@material-ui/core/Box"

import "../styles/index.scss"
import theme from "../util/theme"

const logoText = responsiveFontSizes(
 createMuiTheme({
  typography: {
   useNextVariants: true,
   fontFamily: '"Audiowide", cursive',
   fontSize: 18,
   fontWeightLight: 300,
   fontWeightRegular: 400,
   fontWeightMedium: 500,
   color: "#193F4C",
  },
 })
)
const text1 = responsiveFontSizes(
 createMuiTheme({
  typography: {
   useNextVariants: true,
   fontSize: 30,
   fontWeightLight: 678,
   fontWeightRegular: 678,
   fontWeightMedium: 678,
   textShadow: "0px 3px 6px #00000029",
  },
  palette: {
   text: {
    primary: "#c5c1b9",
   },
  },
 })
)

const useStyles = makeStyles(theme => ({
 mainBox: {
  height: "100vh",
  overflow: "hidden",
  padding: theme.spacing(2),
  display: "grid",
  gridTemplateRows: "1fr 4fr",
  textAlign: "center",
 },
 box2: {
  textAlign: "center",
  display: "grid",
  gridTemplateRows: "3fr 1fr 3fr",
  gridTemplateColumns: "1fr",
  gridRowGap: theme.spacing(2),
 },
 title: {
  color: "#193F4C",
  "-webkit-text-stroke-width": "1px",
  "-webkit-text-stroke-color": "#09C4FF",
  padding: theme.spacing(4, 2),
  margin: "auto",
 },
 link: {
  textDecoration: "none",
  "&:hover": {
   textDecoration: "none",
   color: lighten(theme.palette.text.primary, 0.5),
  },
 },
 ul: {
  textAlign: "center",
  display: "Grid",
  gridTemplateColumns: "1fr 1fr",
  padding: "auto",
  margin: "auto",
  marginTop: 0,
 },
 f404: {
  letterSpacing: 0,
  textShadow: "0px 3px 6px #00000029",
  opacity: 1,
  lineHeight: 0,
  padding: theme.spacing(2, 2),
  margin: "auto",
  // TODO: parallex effects
 },
}))

const NotFoundPage = () => {
 const classes = useStyles()
 const mixedClasses = clsx(classes.mainBox)
 const mixedClasses2 = clsx(classes.box2)
 const mixedClasses3 = clsx(classes.f404)

 return (
  <>
   <SEO title="404: Not found" />
   <MuiThemeProvider theme={theme}>
    <div className={mixedClasses}>
     <Box>
      <Toolbar>
       <MuiThemeProvider theme={logoText}>
        <Typography variant="h6" className={classes.title}>
         ISMAILOPATOLA.IO
        </Typography>
       </MuiThemeProvider>
      </Toolbar>
     </Box>

     <Box className={mixedClasses2}>
      <MuiThemeProvider theme={text1}>
       <Typography variant="h1" color="textPrimary" className={mixedClasses3}>
        404
       </Typography>
      </MuiThemeProvider>

      <Typography color="textPrimary" paragraph>
       You just hit a route that doesn&#39;t exist... the sadness.
      </Typography>

      <List component="ul" className={classes.ul}>
       <ListItem key={"Home"}>
        <Link color="textSecondary" to="/" className={classes.link}>
         <ListItemText primary="HOME" />
         <ListItemText primary="←" align="right" />
        </Link>
       </ListItem>
       <ListItem key={"Blog"}>
        <Link color="textSecondary" to="/blog" className={classes.link}>
         <ListItemText primary="BLOG" />
         <ListItemText primary="→" />
        </Link>
       </ListItem>
      </List>
     </Box>
    </div>
   </MuiThemeProvider>
  </>
 )
}

export default NotFoundPage

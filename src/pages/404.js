import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"

import SEO from "../components/seo"
import Link from "../components/Link"

import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Grid from "@material-ui/core/Grid"
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
      fontFamily: '"Segoe UI", sans-serif',
      fontSize: 200,
      fontWeightLight: 678,
      fontWeightRegular: 678,
      fontWeightMedium: 678,
      textShadow: "0px 3px 6px #00000029",
    },
  })
)
const text2 = responsiveFontSizes(
  createMuiTheme({
    typography: {
      useNextVariants: true,
      fontFamily: '"Caveat", cursive',
      fontSize: 20,
      fontWeight: 900,
    },
  })
)

const useStyles = makeStyles(theme => ({
  mainBox: {
    position: "relative",
    maxHeight: "100vh",
    height: "100vh",
    boxSizing: "border-box",
    overflow: "hidden",
  },
  box1: {
    maxHeight: "58.9vh",
    height: "50vh",
    // height: "58.9vh",
    backgroundColor: "#000",
    color: "#fff",
  },
  box2: {
    maxHeight: "49.1vh",
    height: "50vh",
    // height: "49.1vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",

    textAlign: "center"
  },
  title: {
    flexGrow: 1,
    color: "#193F4C",
    "-webkit-text-stroke-width": "1px",
    "-webkit-text-stroke-color": "#09C4FF",
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(10),
  },
  link: {
    textDecoration: "none",
    borderBottom: "2px solid",
    color: "#fff",
    "&:hover": {
      textDecoration: "none",
      color: "yellow",
    },
  },
  ul: {
    display: "flex",
  },
  f404: {
    letterSpacing: 0,
    color: "#FFFFFF",
    textShadow: "0px 3px 6px #00000029",
    opacity: 1,
    lineHeight: 0,
  },
}))

const NotFoundPage = props => {
  const classes = useStyles()
  const mixedClasses = clsx(classes.mainBox, "purple-bg")
  const mixedClasses2 = clsx(classes.box2, "p")
  const mixedClasses3 = clsx(classes.f404, "ab-center")

  return (
    <>
      <SEO title="404: Not found" />
      <MuiThemeProvider theme={theme}>
        <div className={mixedClasses}>
          <Box className={classes.box1}>
            <Toolbar>
              <MuiThemeProvider theme={logoText}>
                <Typography variant="h6" className={classes.title}>
                  ISMAIL OPATOLA
                </Typography>
              </MuiThemeProvider>
            </Toolbar>
          </Box>

          <Box className={mixedClasses2}>
            <div>
              <MuiThemeProvider theme={text1}>
                <Typography className={mixedClasses3}>404</Typography>
              </MuiThemeProvider>
            </div>
            <MuiThemeProvider theme={text2}>
              <Typography>
                You just hit a route that doesn&#39;t exist... the sadness.
              </Typography>

              <List component="ul" className={classes.ul}>
                <ListItem key={"Home"}>
                  <Link to="/" className={classes.link}>
                    <ListItemText primary="HOME" />
                  </Link>
                </ListItem>
                <ListItem key={"Blog"}>
                  <Link to="/blog" className={classes.link}>
                    <ListItemText primary="BLOG" />
                  </Link>
                </ListItem>
              </List>
            </MuiThemeProvider>
          </Box>
        </div>
      </MuiThemeProvider>
    </>
  )
}

export default NotFoundPage

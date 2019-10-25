import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
// import Link from "./Link"

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
import IconButton from "@material-ui/core/IconButton"
import CssBaseline from "@material-ui/core/CssBaseline"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Slide from "@material-ui/core/Slide"
import MenuIcon from "@material-ui/icons/Menu"
import Notes from "@material-ui/icons/Notes"
import Work from "@material-ui/icons/Work"

import "../styles/index.scss"

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
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    position: "absolute",
    backgroundColor: theme.background.default,
    color: theme.palette.primary,
    borderRadius: "0px",
    minheight: "100%",
    height: "100%",
    maxWidth: 65,
    width: "100%",
    "&:hover": {
      backgroundColor: theme.background.default,
    },
    "&:hover svg": {
      transform: "rotate(-6deg)",
    },
  },
  title: {
    flexGrow: 1,
    color: "#193F4C",
    "-webkit-text-stroke-width": "1px",
    "-webkit-text-stroke-color": "#09C4FF",
    marginLeft: theme.spacing(10),
  },
  btn: {
    flexShrink: 1,
    fontSize: 8,
    fontWeight: 900,
    margin: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(5),
      fontSize: 10,
    },
    [theme.breakpoints.up('lg')]: {
      marginRight: theme.spacing(10),
      fontSize: 14,
      fontWeight: 600,
    },
    textWrap: "nowrap",
    "&:hover": {
      backgroundColor: theme.background.default,
      color: theme.palette.primary.main,
    },
  },
}))

function HideOnScroll(props) {
  const trigger = useScrollTrigger(),
    { children } = props

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const Header = props => {
  const classes = useStyles(),
    { toggleDrawer } = props
  const mixedClasses = clsx(classes.title, "ld", "ldt-float-up-in")

  const handleSidebar = () => toggleDrawer("left", true)

  const matches = useMediaQuery(theme => theme.breakpoints.up('sm'));

  return (
    <React.Fragment>
      <CssBaseline />
      <header className={classes.root}>
        <HideOnScroll {...props}>
          <AppBar position="fixed" className="appbar">
            <Toolbar disableGutters={true}>
              <IconButton
                className={classes.menuButton}
                aria-label="menu"
                onClick={handleSidebar()}
              >
                <Notes className={"navIcon"} />
              </IconButton>
              <MuiThemeProvider theme={logoText}>
                <Typography variant="h6" className={mixedClasses}>
                  ISMAIL OPATOLA
                </Typography>
              </MuiThemeProvider>
              <Button
                color="secondary"
                variant="outlined"
                size="small"
                className={classes.btn}
                startIcon={matches ? <Work /> : null}
              >
                Hire me
              </Button>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </header>
    </React.Fragment>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

// ::: :::...:::... (>_<(
// ...:::...::: ::: Ismail Opatola ::: :::...:::... (&gt;_&lt;(
// "text-shadow":  `0 0 3px #FF0000, 0 0 5px #0000FF`,

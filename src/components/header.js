import React from "react"
import PropTypes from "prop-types"
// import Link from "./Link"

import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import CssBaseline from "@material-ui/core/CssBaseline"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Slide from "@material-ui/core/Slide"

// import "../styles/index.scss"

const useStyles = makeStyles(theme => ({
  // ...theme,
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
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
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      <header className={classes.root}>
        <HideOnScroll {...props}>
          <AppBar position="fixed" className="appbar">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Ismail Opatola
              </Typography>
              <Button color="inherit">Login</Button>
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

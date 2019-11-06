/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {
  MuiThemeProvider,
  // createMuiTheme
} from "@material-ui/core/styles"
// import React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';

// import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';
// import Fab from '@material-ui/core/Fab';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// import Zoom from '@material-ui/core/Zoom';

import theme from "../../util/theme"

import Header from "./Header"
import SideBar from "./Sidebar"
import Footer from "./Footer";

// import Container from "@material-ui/core/Container"
// import Toolbar from "@material-ui/core/Toolbar"

import "../../styles/index.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [state, setState] = React.useState({
    left: false,
  })

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [side]: open })
  }

  return (
    <MuiThemeProvider theme={theme}>
      <Fragment>
      <CssBaseline />
        <Header
          toggleDrawer={toggleDrawer}
          // prop drilling -- useReducer
        />
        <SideBar leftDrawer={state.left} toggleDrawer={toggleDrawer} />
        <main>{children}</main>
        <Footer/>
      </Fragment>
    </MuiThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

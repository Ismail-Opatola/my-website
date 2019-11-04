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
import theme from "../../util/theme"

import Header from "./Header"
import SideBar from "./Sidebar"
// import Footer from "./Footer";

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
        <Header
          toggleDrawer={toggleDrawer}
          // prop drilling -- useReducer
        />
        <SideBar leftDrawer={state.left} toggleDrawer={toggleDrawer} />
        <main style={{ backgroundColor: "#1F2123" }}>{children}</main>
        {/* <Footer/> */}
      </Fragment>
    </MuiThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

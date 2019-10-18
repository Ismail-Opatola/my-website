/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import theme from "../util/theme"

import Header from "./Header"
// import SideBar from "./sidebar"
// import Footer from "./Footer";

import Container from "@material-ui/core/Container"

import "../styles/index.scss"

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

  return (
    <MuiThemeProvider theme={theme}>
      <Fragment>
        <Header />
        {/* <SideBar /> */}
        {/* <div> */}
        {/* <main> */}
        <Container>{children}</Container>
        {/* </main> */}
        {/* <Footer/> */}
        {/* </div> */}
      </Fragment>
    </MuiThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

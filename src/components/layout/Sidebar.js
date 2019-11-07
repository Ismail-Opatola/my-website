import React from "react"
import clsx from "clsx"

import { makeStyles } from "@material-ui/core/styles"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
// import Grid from "@material-ui/core/Grid"
// import Box from "@material-ui/core/Box"
// import im from "../images/sidebar_bg@2x.png"
import Nav from "./Nav"

const useStyles = makeStyles(theme => ({
  nav: {
    width: "90vw",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    color: "#ef6474",
    // backgroundColor: "#181A1B",
    backgroundColor: "rgb(24, 26, 27)",
    borderColor: "inherit"
  },
}))

export default function SwipeableTemporaryDrawer({ leftDrawer, toggleDrawer }) {
  const classes = useStyles()
  const mixedClasses = clsx(classes.nav)

  const openDrawer = () => toggleDrawer("left", true);
  const closeDrawer = () => toggleDrawer("left", false);

  const sideList = () => (
    <nav
      className={mixedClasses}
      role="presentation"
      onClick={closeDrawer()}
      onKeyDown={closeDrawer()}
    >
      <Nav />
    </nav>
  )

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

  return (
    <>
      <SwipeableDrawer
        open={leftDrawer}
        onClose={closeDrawer()}
        onOpen={openDrawer()}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        {sideList()}
      </SwipeableDrawer>
    </>
  )
}

import React from "react"
import clsx from "clsx"

import { makeStyles } from "@material-ui/core/styles"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
// import Grid from "@material-ui/core/Grid"
// import Box from "@material-ui/core/Box"
// import im from "../images/sidebar_bg@2x.png"
import Nav from "./Nav"
import Copyright from "./Copyright"

const useStyles = makeStyles(theme => ({
  nav: {
    width: "90vw",
    height: "100%",
    display: "flex",

    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1

    // backgroundImage: `url(${im})`,
    // backgroundPosition: "center",
    // backgroundBlend: "blur",
    // backgroundSize: "fit",

    // opacity: 0.5,

    // height: "85vh",
    // "background-image": `linear-gradient(
    // to right bottom,
    // rgba($color-primary-light, 0.8),
    // rgba($color-primary-dark, 0.8)),
    // url(${im})`, // DPR: 1.0 load the small img for screen with lower resolution
    // "background-size": "cover",
    // "background-position": "top",
  },
  // fullList: {
  //   width: "auto",
  // },
}))

export default function SwipeableTemporaryDrawer({ leftDrawer, toggleDrawer }) {
  const classes = useStyles()
  const mixedClasses = clsx(classes.nav, "purple-bg")

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
      {/*<div>
        <Copyright />
      </div>*/}
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

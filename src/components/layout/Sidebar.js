import React from "react"
import PropTypes from 'prop-types'
import clsx from "clsx"

import { makeStyles } from "@material-ui/core/styles"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"

import Nav from "./Nav"

const useStyles = makeStyles( () => ({
  nav: {
    width: "90vw",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    color: "#ef6474",
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

SwipeableTemporaryDrawer.propTypes = {
  leftDrawer: PropTypes.bool,
  toggleDrawer: PropTypes.func
}
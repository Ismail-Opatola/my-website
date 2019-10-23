import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
// import Button from "@material-ui/core/Button"
// import List from "@material-ui/core/List"
// import Divider from "@material-ui/core/Divider"
// import ListItem from "@material-ui/core/ListItem"
// import ListItemIcon from "@material-ui/core/ListItemIcon"
// import ListItemText from "@material-ui/core/ListItemText"
// import InboxIcon from "@material-ui/icons/MoveToInbox"
// import MailIcon from "@material-ui/icons/Mail"
import Nav from "./Nav"

const useStyles = makeStyles({
  list: {
    width: "90vw",
    margin: 'auto',
    // justifyContent: "center",
    // alignItems: "center",
  },
  fullList: {
    width: "auto",
  },
})

export default function SwipeableTemporaryDrawer({
  topDrawer,
  leftDrawer,
  toggleDrawer,
}) {
  const classes = useStyles()

  const sideList = side => (
    <nav
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    //   justify="center"
    //   alignContent="center"
    //   container
    >
      <Nav />
    </nav>
  )

  const fullList = side => (
    <nav
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <Nav />
    </nav>
  )
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

  return (
    <>
      {/* <Button onClick={toggleDrawer("left", true)}>Open Left</Button> */}
      {/* <Button onClick={toggleDrawer("top", true)}>Open Top</Button> */}
      <SwipeableDrawer
        open={leftDrawer}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        {sideList("left")}
      </SwipeableDrawer>
      <SwipeableDrawer
        anchor="top"
        open={topDrawer}
        onClose={toggleDrawer("top", false)}
        onOpen={toggleDrawer("top", true)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        {fullList("top")}
      </SwipeableDrawer>
    </>
  )
}

import React from "react"
import PropTypes from "prop-types"
import MuiLink from "@material-ui/core/Link"
import Link from "../Link"
import clsx from "clsx"

// import PopupForm from '../PopupForm'

import {
 FaTwitter,
 FaMedium,
 FaYoutube,
 FaLinkedin,
 FaGithubAlt,
} from "react-icons/fa"
// MUI
import { makeStyles, darken } from "@material-ui/core/styles"
import { lighten } from "@material-ui/core/styles/colorManipulator"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Button from "@material-ui/core/Button"
import Fab from "@material-ui/core/Fab"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import Zoom from "@material-ui/core/Zoom"

const useStyles = makeStyles(theme => ({
 root: {
  position: "fixed",
  bottom: theme.spacing(2),
  right: theme.spacing(2),
 },
 footer: {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "#c5c1b9",
  padding: theme.spacing(4, 2, 2, 2),
 },
 footer_box1: {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
 },
 social_link_list: {
  margin: "0 auto",
  textAlign: "center",
 },
 li: {
  display: "inline-block",
  backgroundColor: lighten("#000", 0.2),
  width: "auto",
  margin: theme.spacing(1),
  fontSize: theme.typography.fontSize,
  "&:hover ": {
   cursor: "pointer",
  },
  "& .medium": {
   color: "#ccc",
  },
  "& .github": {
   color: "rgb(242, 244, 246)",
  },
  "& .twitter": {
   color: "rgb(56, 161, 243)",
  },
  "& .youtube": {
   color: "rgb(221, 75, 57)",
  },
  "& .linkedin": {
   color: "rgb(0, 119, 181)",
  },
 },
 fakeAssThickLine: {
  height: theme.spacing(0.5),
  width: theme.spacing(5),
  backgroundColor: lighten(theme.palette.background.default, 0.1),
  borderRadius: 30,
 },
 span: {
  "& span": {
   fontWeight: "900",
  },
 },
 fab: {
  backgroundColor: darken(theme.palette.background.default, 0.2),
 },
}))

function ScrollTop(props) {
 const { children } = props
 const classes = useStyles()
 const trigger = useScrollTrigger()

 const handleClick = event => {
  const anchor = (event.target.ownerDocument || document).querySelector(
   "#back-to-top-anchor"
  )

  if (anchor) {
   anchor.scrollIntoView({ behavior: "smooth", block: "center" })
  }
 }

 return (
  <Zoom in={trigger}>
   <div onClick={handleClick} role="presentation" className={classes.root}>
    {children}
   </div>
  </Zoom>
 )
}

ScrollTop.propTypes = {
 children: PropTypes.element.isRequired,
}

const Footer = props => {
 const classes = useStyles()
 // const { openFormDialog, handleCloseFormDialog} = props

 return (
  <Box component="footer">
   <ScrollTop {...props}>
    <Fab
     color="primary"
     size="small"
     aria-label="scroll back to top"
     className={classes.fab}
    >
     <KeyboardArrowUpIcon />
    </Fab>
   </ScrollTop>

   {/* <PopupForm
         openFormDialog={openFormDialog}
         handleCloseFormDialog={handleCloseFormDialog}/>*/}

   <Box className={clsx(classes.footer)}>
    <Box className={classes.fakeAssThickLine} />
    <Box className={clsx(classes.footer)}>
     <Typography className={classes.span}>
      ISMAIL
      <span>OPATOLA</span>
      .IO
     </Typography>
     <List className={classes.footer_box1}>
      <ListItem className={classes.li}>
       <Button
        color="secondary"
        size="small"
        aria-label="homepage"
        component={Link}
        to="/"
       >
        About
       </Button>
      </ListItem>
      <ListItem className={classes.li}>
       <Button
        color="secondary"
        size="small"
        aria-label="blog"
        component={Link}
        to="/blog"
       >
        Blog
       </Button>
      </ListItem>
      <ListItem className={classes.li}>
       <Button
        color="secondary"
        size="small"
        aria-label="contact form"
        component={Link}
        to="/#contact-form"
       >
        Hire Me
       </Button>
      </ListItem>
     </List>
    </Box>
    <Box className={classes.footer}>
     <Typography>SOCIAL CONNECTS!</Typography>
     <List class={classes.social_link_list}>
      <ListItem className={classes.li}>
       <MuiLink
        href="https://www.linkedin.com/in/ismail-opatola/"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin"
        aria-label="Ismail's linkedin account"
       >
        <FaLinkedin size={23} />
       </MuiLink>
      </ListItem>
      <ListItem className={classes.li}>
       <MuiLink
        href="https://twitter.com/opatolaismail"
        target="_blank"
        rel="noopener noreferrer"
        className="twitter"
        aria-label="Ismail's twitter account"
       >
        <FaTwitter size={23} />
       </MuiLink>
      </ListItem>
      <ListItem className={classes.li}>
       <MuiLink
        href="https://github.com/Ismail-Opatola"
        target="_blank"
        rel="noopener noreferrer"
        className="github"
        aria-label="Ismail's github account"
       >
        <FaGithubAlt size={23} />
       </MuiLink>
      </ListItem>
      <ListItem className={classes.li}>
       <MuiLink
        href="https://www.youtube.com/channel/UCF-bh85fWL3VtXCxFK4XqOQ/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ismail's youtube account"
        className="youtube"
       >
        <FaYoutube size={23} />
       </MuiLink>
      </ListItem>
      <ListItem className={classes.li}>
       <MuiLink
        href="https://medium.com/@opatolamails"
        target="_blank"
        rel="noopener noreferrer"
        className="medium"
        aria-label="Ismail's medium account"
       >
        <FaMedium size={23} />
       </MuiLink>
      </ListItem>
     </List>
    </Box>
   </Box>
  </Box>
 )
}

export default Footer

Footer.propTypes = {
 openFormDialog: PropTypes.bool,
 handleCloseFormDialog: PropTypes.func,
}

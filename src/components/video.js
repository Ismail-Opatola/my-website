import React from "react"
import PropTypes from "prop-types"

import {
 makeStyles,
} from "@material-ui/core/styles"
import Slide from "@material-ui/core/Slide"
import Dialog from '@material-ui/core/Dialog'
import Box from "@material-ui/core/Box"

const dummyvideoSrcUrl = "https://www.youtube.com/embed/ff4fgQxPaO0"

const useStyles = makeStyles(theme => ({
 root: {
  minHeight: "auto",
  margin: "auto",
  textAlign: "center",
  overflow: "visible",
  height: "fit-content",
  [theme.breakpoints.down("xs")]: {  
    margin: "auto"
  },
 },
 videoWrapper: {
	position: 'relative',
	paddingBottom: '56.25%', /* 16:9 -- 16/9=0.5925*/
	paddingTop: '25px',
  height: 0,
 },
  iframe2: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  }
}))
const Transition = React.forwardRef((props, ref) => (
 <Slide direction="up" ref={ref} {...props} />
))

export default function Video({ open, close, title, videoSrcUrl }) {
 const classes = useStyles()

 return (
  <Dialog
   open={open}
   maxWidth="md"
   fullWidth
   TransitionComponent={Transition}
   keepMounted
   onClose={close}
   aria-labelledby={`{title}-project-demo`}
   className={classes.root}
  >
   <Box 
      className={classes.videoWrapper}
   >
    <iframe
     src={videoSrcUrl || dummyvideoSrcUrl}
     title={title}
     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; allowfullscreen"
     frameBorder="0"
     webkitallowfullscreen="true"
     mozallowfullscreen="true"
     allowFullScreen
     className={classes.iframe2}
     width="560" height="349"
    />
   </Box>
  </Dialog>
 )
}

Video.defaultProps = {
 open: false,
 title: "demo",
//  videoSrcUrl: "https://www.youtube.com/embed/ff4fgQxPaO0",
}

Video.propTypes = {
 open: PropTypes.bool.isRequired,
 close: PropTypes.func,
 title: PropTypes.string.isRequired,
 videoSrcUrl: PropTypes.string,
}

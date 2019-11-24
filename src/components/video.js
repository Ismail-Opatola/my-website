import React from "react"
import PropTypes from "prop-types"

import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from "@material-ui/core/DialogTitle"
import Slide from "@material-ui/core/Slide"

const Transition = React.forwardRef((props, ref) => (
 <Slide direction="up" ref={ref} {...props} />
))

export default function Video({ open, close, title, videoSrcUrl }) {
 return (
  <Dialog
   open={open}
   TransitionComponent={Transition}
   keepMounted
   onClose={close}
   aria-labelledby={`{title}-project-demo`}
  >
   <DialogTitle id={`{title}-project-demo`}>{title}</DialogTitle>
   <DialogContent>
    <iframe
     src={videoSrcUrl}
     title={title}
     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
     frameBorder="0"
     webkitallowfullscreen="true"
     mozallowfullscreen="true"
     allowFullScreen
    />
   </DialogContent>
   <DialogActions>
    <Button onClick={close} color="primary">
     close
    </Button>
   </DialogActions>
  </Dialog>
 )
}

Video.defaultProps = {
    open: false,
    title: 'demo',
    videoSrcUrl: 'https://www.youtube.com/watch?v=ff4fgQxPaO0',
};

Video.propTypes = {
 open: PropTypes.bool.isRequired,
 close: PropTypes.func,
 title: PropTypes.string.isRequired,
 videoSrcUrl: PropTypes.string.isRequired,
}

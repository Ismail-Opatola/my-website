import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"

import { makeStyles, fade } from "@material-ui/core/styles"
import MuiLink from "@material-ui/core/Link"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"

import dummyGif from '../../assets/test.gif'
import Video from "../video"

const useStyles = makeStyles(theme => ({
 project_info_section: {
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(10),
 },
 project_image_box: {
  maxWidth: 620,
  minHeight: "auto",
  margin: "auto",
  marginBottom: theme.spacing(8),
  padding: 0,
  overflow: "hidden",
  transition: "box-shadow 300ms ease",
  cursor: "pointer",
  border: ".5rem solid #181a1b",
  "&:hover ": {
   boxShadow: "0 5px 32px rgba(94, 74, 110, 0.2)",
  },

  "& .project_image": {
    width: '100%',
    // height: '100%',
  },
  position: 'relative'
 },
 demo_btn: {
   position: 'absolute',
   right: 0,
   bottom: 0,
  borderRadius: 0,
  fontWeight: "bold",
  background: theme.palette.background.default,
  color: fade(theme.palette.action.active, 0.8),
  "&:hover": {
    background: theme.palette.background.default,
   }
 },
 project_info_box: {
  color: "#c5c1b9",
  fontSize: theme.typography.fontSize,
  lineHeight: 1.4,
  maxWidth: 640,
  fontWeightLight: 300,
  margin: "auto",

  "& .title": {
   fontFamily: '"Open Sans", sans-serif',
   fontSize: theme.typography.fontSize,
   fontStyle: "Bold",
   fontWeight: 600,
   marginBottom: theme.spacing(3),
   textDecoration: "underline",
  },
  "& .description": {
   marginBottom: theme.spacing(3),
  },
  "& h5": {
   fontSize: 14,
   fontStyle: "Bold",
   fontWeight: 600,
  },
 },
 li: {
  padding: 0,
  [theme.breakpoints.down("xs")]: {
   fontSize: 14,
  },
 },
 project_features: {
  marginBottom: theme.spacing(1),
 },
}))

const Project = ({
 project: { title, description, techStack, features, links, videoSrcUrl, gifSrcUrl },
}) => {
 const classes = useStyles()
 const xtra_sm = useMediaQuery(theme => theme.breakpoints.down("xs"))
 const [open, setOpen] = React.useState(false);

 const handleOpen = () => {
   setOpen(true);
 };

 const handleClose = () => {
   setOpen(false);
 };

 return (
  <>
   <Box className={classes.project_info_section} component="article">
    <Paper className={classes.project_image_box} elevation={5} onClick={handleOpen}>
     <img src={dummyGif} alt={`${title}-project-gif`} className="project_image" />
     <Button fullWidth 
    //  onClick={handleOpen} 
     className={classes.demo_btn} color="textPrimary">view demo</Button>
    </Paper>

    <Box className={classes.project_info_box}>
     <Typography
      component="h4"
      className={clsx("title", "fonty-purple")}
      gutterBottom
     >
      {title ? title : null}
     </Typography>

     <Typography className="description" gutterBottom paragraph>
      {description ? description : null}
     </Typography>

     <Grid
      container
      component="aside"
      spacing={xtra_sm ? 2 : 4}
      direction="row"
      wrap="nowrap"
      justify="flex-start"
      className={classes.project_features}
      aria-label={`${title} features`}
     >
      <Grid item xs={6}>
       <Typography component="h5" display="block">
        Tech Stack
       </Typography>
       <List>
        {techStack &&
         techStack.map(tech => (
          <ListItem className={classes.li} key={tech}>
           {tech}
          </ListItem>
         ))}
       </List>
      </Grid>
      <Grid item xs={6}>
       <Typography component="h5" display="block">
        features
       </Typography>
       <List>
        {features &&
         features.map(feature => (
          <ListItem className={classes.li} key={feature}>
           {feature}
          </ListItem>
         ))}
       </List>
      </Grid>
     </Grid>
     <ButtonGroup
      variant="outlined"
      color="secondary"
      size="small"
      // className={classes.project_info_cta}
     >
      {links.websiteUrl && (
       <Button
        // className="cta-btn"
        component={MuiLink}
        href={links.websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
       >
        Website
       </Button>
      )}
      {links.youtubeDemo && (
       <Button
        // className="cta-btn"
        onClick={handleOpen}
       >
        Demo
       </Button>
      )}
      {links.sourceCode && (
       <Button
        className="cta-btn"
        component={MuiLink}
        href={links.sourceCode}
        target="_blank"
        rel="noopener noreferrer"
       >
        Code
       </Button>
      )}
     </ButtonGroup>
    </Box>
     <Video
      close={handleClose}
      open={open}
      title={title} 
      // videoSrcUrl={videoSrcUrl} 
     />
   </Box>
  </>
 )
}

export default Project

Project.defaultProps = {
  project: {
    gifSrcUrl: dummyGif
  }
}

Project.propTypes = {
 classes: PropTypes.object,
 project: PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  links: PropTypes.shape({
   sourceCode: PropTypes.string.isRequired,
   websiteUrl: PropTypes.string,
   youtubeDemo: PropTypes.string,
  }),
  gifSrcUrl: PropTypes.string,
  videoSrcUrl: PropTypes.string,
 }).isRequired,
 projectImg: PropTypes.object,
}

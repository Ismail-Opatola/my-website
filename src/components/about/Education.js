import React from "react"
import clsx from "clsx"

import MuiLink from "@material-ui/core/Link"
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"

const useStyles = makeStyles(theme => ({
 section3_article1: {
  maxWidth: 640,
  margin: "auto",
  paddingBottom: theme.spacing(8),
  "& h3": {
   marginBottom: theme.spacing(5),
   fontStyle: "Bold",
   fontWeight: 600,
  },
 },
 section3_article2: {
  maxWidth: 640,
  margin: "auto",
  paddingBottom: theme.spacing(4),
  "& h3": {
   marginBottom: theme.spacing(4),
   fontStyle: "Bold",
   fontWeight: 600,
  },
 },
 section3_ul: {},
 section3_li: {
  display: "block",
  padding: 0,

  "& h4": {
   lineHeight: 2,
   textDecorationLine: "underline",
  },
 },
}))

const Education = () => {
 const classes = useStyles()

 return (
  <>
   <Box component="article" className={classes.section3_article1}>
    <Typography component="h3" className={clsx("fonty-purple")}>
     My journey to the web
    </Typography>
    <Typography paragraph>
     <q>
      Prior to web development, I worked as a Digital Marketer / Search
      Optimization Expert at{" "}
      <MuiLink
       color="textSecondary"
       target="_blank"
       rel="noopener noreferrer"
       href="/#"
      >
       Bizcomtec Solutions
      </MuiLink>
      , a Lagos based digital marketing company. A part of my work required
      tweaking website architecture for performance. Understanding the source
      code that defines the logic of client apps helped me have an edge
     </q>
    </Typography>
   </Box>
   <Box component="article" className={classes.section3_article2}>
    <Typography component="h3" className={clsx("fonty-purple")}>
     Education
    </Typography>

    <List className={classes.section3_ul}>
     <ListItem className={classes.section3_li}>
      <Typography component="h4">React Nanodegree Program - 2019</Typography>
      <Typography component="h5">Udacity</Typography>
      <Typography paragraph>
       Project-focused intensive program with emphasis on building declarative
       user interfaces for the web with React, and for iOS and Android with
       React Native. Learnt React and React Native Framework in 2019 after
       sharing this Udacity Course Material with a friend. While taking this
       course I built three capstone projects -{" "}
       <MuiLink
        color="textSecondary"
        target="_blank"
        rel="noopener noreferrer"
        href="https://would-you-rather-app-c5895.firebaseapp.com"
       >
        Would-You-Rather app
       </MuiLink>
       ,{" "}
       <MuiLink
        color="textSecondary"
        target="_blank"
        rel="noopener noreferrer"
        href="https://expo.io/@turfff/fit_tracker"
       >
        Fit-Tracker
       </MuiLink>
       ,{" "}
       <MuiLink
        color="textSecondary"
        target="_blank"
        rel="noopener noreferrer"
        href="https://myreads-app-v0.netlify.com/"
       >
        My-Reads app
       </MuiLink>
       .
      </Typography>
     </ListItem>
     <ListItem className={classes.section3_li}>
      <Typography component="h4">
       <MuiLink
        color="textSecondary"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.udemy.com/certificate/UC-DH5115PC/"
       >
        The Web Developer Bootcamp - 2018
       </MuiLink>
      </Typography>
      <Typography component="h5">Udemy</Typography>
      <Typography paragraph>
       The foundation of my web development skills. Taking this Udemy course I
       was introduced to how the web works, computer science concepts,
       programming languages, web application security, relational and
       non-relational database management.
      </Typography>
      <Typography paragraph>
       Developed a blog application from scratch using NodeJs, Express, MongoDB,
       and Semantic UI
      </Typography>
      <Typography paragraph>
       Developed a full-stack web app{" "}
       <MuiLink
        color="textSecondary"
        target="_blank"
        rel="noopener noreferrer"
        href="/#"
       >
        Yelp-camp
       </MuiLink>
       , a complicated yelp-like application from scratch. Embedded-Js was used
       to develop the frontend which includes list of campsites, user signup,
       login page, moderator dashboard and variety of features. The backend,
       built using Express, and MongoDB, takes advantage of developed RESTful
       API, Geospatial search and user authentication with Passport-Js.
      </Typography>
     </ListItem>
     <ListItem className={classes.section3_li}>
      <Typography component="h4">
       <MuiLink
        color="textSecondary"
        target="_blank"
        rel="noopener noreferrer"
        href="https://drive.google.com/open?id=0B58IqhEn2uwsNERlRkV3cklMUXM"
       >
        Professional Diploma in Digital Marketing - 2016
       </MuiLink>
      </Typography>
      <Typography component="h5">Shaw Online Academy</Typography>
      <Typography paragraph>
       The course help laid a solid foundation for my digital marketing and
       performance marketing skills. Taking this Shaw Academy course I was
       introduced to Search Engine Marketing, Social Media Marketing, Search
       Eengine Optimization, content, strategy and campaign creation and
       optimisation.
      </Typography>
     </ListItem>
     <ListItem className={classes.section3_li}>
      <Typography component="h4">
       <MuiLink
        color="textSecondary"
        target="_blank"
        rel="noopener noreferrer"
        href="https://drive.google.com/open?id=1p_b4iTXSp85RUeJIfrM4ziGP2wXtSMyL"
       >
        B.Sc. Accounting - 2013
       </MuiLink>
      </Typography>
      <Typography component="h5">Osun State University</Typography>
      <Typography paragraph>
       Yep, I&apos;m an Accounting graduate turned developer !
      </Typography>
     </ListItem>
    </List>
   </Box>
  </>
 )
}
export default Education

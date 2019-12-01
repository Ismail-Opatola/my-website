import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import clsx from "clsx"
import { FaTwitter, FaLinkedin, FaRedditAlien } from "react-icons/fa"
// MUI
import { makeStyles } from "@material-ui/core/styles"
import { lighten } from "@material-ui/core/styles/colorManipulator"
import MuiLink from "@material-ui/core/Link"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Avatar from "@material-ui/core/Avatar"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
// NATIVE COMPONENTS
import Link from "../Link"

const useStyles = makeStyles(theme => ({
 card: {
  display: "inline-block",
  boxShadow: "none",
  boxSizing: "border-box",
  [theme.breakpoints.down("xs")]: {
   maxWidth: "100%",
  },
  "& h2": {
   lineHeight: 1.2,
   fontSize: 30,
   fontWeight: 800,
   margin: theme.spacing(4, 0, 1, 0),
   color: "#c5c1b9",
  },
  "& small": {
   fontSize: 14,
   fontWeight: 600,
  },
 },
 small: {
  color: "#c5c1b9",
 },
 post_link: {
  "&:hover": {
   color: "#c5c1b9",
  },
 },
 cardContent: {
  padding: theme.spacing(1, 0, 4, 0),
 },
 author_box: {
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(2),
  "& small": {
   fontWeight: 300,
   marginRight: theme.spacing(2),
   "& > span > a": {
    color: "#ef6474",
   },
  },
 },
 ul: {
  display: "flex",
  width: "100%",
  "& > li:not(:last-child)": {
   marginRight: theme.spacing(2),
  },
 },
 li: {
  display: "inline-block",
  width: "100%",
  fontSize: theme.typography.fontSize,
  lineHeight: 0,
  textAlign: "center",
  transition: `background ease-in-out 100ms`,

  "&:hover ": {
   cursor: "pointer",
  },
  "& > a": {
   display: "block",
   margin: 0,
   padding: "auto",
   width: "100%",
  },
 },
 li_twitter: {
    background: `linear-gradient(to bottom, #41b7d8 0%, #2bacd0 100%)`,
    borderColor: `#238caa`,
  "&:hover ": {
    background: `linear-gradient(to bottom, #2bacd0 0%, #2bacd0 100%)`,
  },
  "&:active":{
    backgroundColor: `#269abb`
  }
 },
 li_reddit: {
    background: `linear-gradient(to bottom, #ff5700 0%, #e04b00 100%)`,
    borderColor: `#b33b00`,
  "&:hover ": {
    background: `linear-gradient(to bottom, #e04b00 0%, #e04b00 100%)`,
  },
  "&:active": {
   backgroundColor: `#c73f00`,
  },
 },
 li_linkedin: {
  backgroundColor: "rgb(0, 119, 181)",
  "&:hover ": {
   backgroundColor: lighten("rgb(0, 119, 181)", 0.2),
  },
 },
 description: {
  marginTop: theme.spacing(2),
  color: "#c5c1b9",
 },
}))

export default function BlogCard({ post }) {
 const classes = useStyles()

 return (
  <Card
   raised={false}
   component="article"
   key={post.id}
   className={classes.card}
  >
   <Link alt={post.title} to={`/${post.slug}`} className={classes.post_link}>
    <CardMedia
     component={Img}
     alt={post.blogImage.title}
     title={post.blogImage.title}
     fluid={post.blogImage.fluid}
     height="140"
     src={post.blogImage.fluid.src}
    />
    <Typography component="h2">{post.title}</Typography>
    <Typography gutterBottom component="small" className={classes.small}>
     {post.timestamp}.
    </Typography>
   </Link>

   <CardContent className={classes.cardContent}>
    <Box className={classes.author_box}>
     <Typography component="small">
      By{" "}
      <span>
       <MuiLink
        href="https://twitter.com/opatolaismail"
        target="_blank"
        rel="noopener noreferrer"
       >
        {post.author.name}
       </MuiLink>
      </span>
     </Typography>
     <Avatar
      component={Img}
      fluid={post.author.avatar.fluid}
      alt={post.author.avatar.title}
     />
    </Box>
    <List className={classes.ul}>
     <ListItem className={clsx(classes.li, classes.li_linkedin)} key="linkedin">
      <MuiLink
       target="_blank"
       rel="noopener noreferrer"
       href={`https://www.linkedin.com/shareArticle?mini=true&url=https://ismailopatola.io/${post.slug}&title=${post.title}&source=${post.title}`}
      >
       <FaLinkedin size={23} color="#fff" />
      </MuiLink>
     </ListItem>
     <ListItem className={clsx(classes.li, classes.li_twitter)} key="twitter">
      <MuiLink
       href={`https://twitter.com/intent/tweet/?text=${post.title}&url=https://ismailopatola.io/${post.slug}%2F&via=opatolaismail`}
       rel="noopener noreferrer"
       target="_blank"
      >
       <FaTwitter size={23} color="#fff" />
      </MuiLink>
     </ListItem>
     <ListItem className={clsx(classes.li, classes.li_reddit)} key="reddit">
      <MuiLink
       href={`http://reddit.com/submit?url=https://ismailopatola.io/${post.slug}&title=${post.title}`}
       rel="noopener noreferrer"
       target="_blank"
      >
       <FaRedditAlien size={23} color="#fff" />
      </MuiLink>
     </ListItem>
    </List>

    <Typography
     gutterBottom
     color="textSecondary"
     className={classes.description}
    >
     {post.description}
    </Typography>
   </CardContent>
  </Card>
 )
}

BlogCard.propTypes = {
 classes: PropTypes.object,
 post: PropTypes.shape({
  id: PropTypes.string.isRequired,
  author: PropTypes.shape({
   bio: PropTypes.string,
   name: PropTypes.string.isRequired,
   avatar: PropTypes.shape({
    title: PropTypes.string,
    fluid: PropTypes.object,
   }),
  }),
  blogImage: PropTypes.shape({
   title: PropTypes.string,
   fluid: PropTypes.object,
  }),
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  timestamp: PropTypes.string,
  description: PropTypes.string.isRequired,
 }).isRequired,
}

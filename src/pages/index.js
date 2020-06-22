import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import clsx from "clsx"

import {
 createMuiTheme,
 MuiThemeProvider,
 responsiveFontSizes,
 makeStyles,
} from "@material-ui/core/styles"
import { lighten } from "@material-ui/core/styles/colorManipulator"
import Toolbar from "@material-ui/core/Toolbar"
import Paper from "@material-ui/core/Paper"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"

import { FaGithubAlt } from "react-icons/fa"

import Layout from "../components/layout/Layout"
import SEO from "../components/seo"
import Project from "../components/about/Project"
import Education from "../components/about/Education"
import Skills from "../components/about/Skills"
import Form from "../components/Form"

const typoWrapper = responsiveFontSizes(
 createMuiTheme({
  typography: {
   useNextVariants: true,
   fontFamily: '"audiowide", "sans-serif"',
   fontSize: 18,
   fontWeight: 900,
  },
 })
)

const useStyles = makeStyles(theme => ({
 section1: {
  margin: 0,
  height: "100%",
  backgroundColor: lighten("#100E17", 0.0),
  overflow: "visible",
  padding: theme.spacing(10, 2),
 },
 innerBox1: {
  height: "inherit",
  overflow: "visible",
  display: "grid",
  gridTemplateColumns: "1fr",
  position: "relative",
 },
 profile_image_box: {
  display: "block",
  maxWidth: 240,
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(10),
  margin: "auto",
  overflow: "hidden",
  transition: "box-shadow 300ms ease",
  cursor: "pointer",
  border: ".5rem solid #181a1b",
  boxShadow: "-0 20px 25px -5px #100E17",
  background: "#181a1b",
 },
 textIntro: {
  fontFamily: '"Source Sans Pro", sans-serif',
  fontWeight: 900,
  fontSize: 18,
  color: "#ccc",
  maxWidth: 640,
  margin: "auto",
  marginBottom: theme.spacing(2),
  textAlign: "center",
  [theme.breakpoints.up("sm")]: {
   fontSize: 30.333,
  },
 },
 textIntroII: {
  //   fontSize: theme.typography.fontSize,
  lineHeight: 1.4,
  textAlign: "center",
  // color: '#c5c1b9',
  maxWidth: 640,
  margin: "auto",
  padding: theme.spacing(4, 6),
  "& span": {
   color: "#ef6474",
  },
 },
 section2: {
  padding: theme.spacing(6, 2),
 },
 section2Heading: {
  margin: "auto",
  padding: 50,
  paddingTop: 60,
  maxWidth: 620,
  textAlign: "center",
  color: "#f3efef",
 },
 project_box_divider: {
  maxWidth: 620,
  textAlign: "center",
  margin: "auto",
 },
 section2_github_btn: {
  margin: "auto",
  maxWidth: 620,
  marginBottom: theme.spacing(8),
  backgroundColor: lighten("#000", 0.2),
  color: theme.palette.secondary,
  "& a": {
   textTransform: "none",
  },
 },
 sectionWidth: {
  maxWidth: 900,
  margin: "auto",
  padding: theme.spacing(4, 2),
 },
}))

export default function IndexPage(props) {
 const classes = useStyles()

 //  fetchImg = (imgData, imgNodes) =>
 //   imgNodes.nodes.find(im =>
 //    im.childImageSharp.fluid.src.includes(imgData.imageUrl)
 //   ).childImageSharp.fluid

 const {
  data: {
   profileImg,
   notes: {
    fields: {
     notes: { skills, projects },
    },
   },
  },
 } = props

 return (
  <Layout>
   <SEO title="Home" />
   <>
    <Box className={classes.section1} component="section">
     <Box className={classes.innerBox1}>
      <Typography className={clsx(classes.textIntro)} component="q">
       Long Live The World Wide Web!!!
      </Typography>
      <Typography className={classes.textIntroII} paragraph>
       Hello, my name is <span>Ismail</span>. I&#39;m a Javascript Developer living in bustling Lagos, Nigeria. I enjoy building
       performant mobile & web apps with Javascript and Nodejs. What are
       your formula ?
      </Typography>
     </Box>

     <Paper square className={classes.profile_image_box} elevation={6}>
      <Img fluid={profileImg.childImageSharp.fluid} className="profile_image" />
     </Paper>
    </Box>

    <Box
     id="work"
     className={clsx(classes.section2, classes.sectionWidth)}
     component="section"
    >
     <MuiThemeProvider theme={typoWrapper}>
      <Typography
       variant="h3"
       align="center"
       gutterBottom
       className={classes.section2Heading}
      >
       Some of my work
      </Typography>
     </MuiThemeProvider>
     {projects &&
      projects.map((project, i) => {
       if (i !== projects.length - 1) {
        return (
         <>
          <Project project={project} key={project.title + i} />
          <Divider className={classes.project_box_divider} />
         </>
        )
       }
       return <Project project={project} key={project.title} />
      })}
     <Box className={classes.section2_github_btn}>
      <Button
       component="a"
       href="https://github.com/Ismail-Opatola/"
       target="_blank"
       rel="noopener noreferrer"
       startIcon={<FaGithubAlt size={45} />}
       fullWidth
       color="secondary"
      >
       See GitHub For More
      </Button>
     </Box>
    </Box>

    <Box className={classes.sectionWidth} component="section">
     <Education />
     <Box className={classes.section2_github_btn}>
      <Button
       component="a"
       href="https://drive.google.com/open?id=1Hw0NWBlscTQvwsgWniO-tbxR-tu8P-JNrQgEgNwg8GE"
       target="_blank"
       rel="noopener noreferrer"
       //    startIcon={<FaGithubAlt size={45} />}
       fullWidth
       color="secondary"
      >
       view cv
      </Button>
     </Box>
    </Box>
    <Box className={classes.sectionWidth} component="section">
     {skills && <Skills skills={skills} />}
    </Box>
    <Box id="contact-form" className={classes.sectionWidth} component="section">
     <Form />
    </Box>
   </>
   <Toolbar />
  </Layout>
 )
}

export const indexQuery = graphql`
 query indexQuery {
  mainBg: file(relativePath: { eq: "main-bg.png" }) {
   id
   childImageSharp {
    fluid(quality: 90, maxWidth: 1920) {
     ...GatsbyImageSharpFluid
    }
   }
  }
  profileImg: file(relativePath: { eq: "me.jpg" }) {
   childImageSharp {
    id
    fluid(quality: 90, maxWidth: 480) {
     ...GatsbyImageSharpFluid
    }
   }
  }
  notes: file(dir: { regex: "/util/" }, relativePath: { eq: "notes.js" }) {
   id
   fields {
    notes {
     skills {
      programming
      tools
      techStack
     }
     projects {
      title
      description
      gifSrcUrl
      videoSrcUrl
      techStack
      features
      links {
       sourceCode
       websiteUrl
       youtubeDemo
      }
     }
    }
   }
  }
 }
`

IndexPage.propTypes = {
 classes: PropTypes.object,
 data: PropTypes.shape({
  mainBg: PropTypes.object,
  profileImg: PropTypes.object,
  notes: PropTypes.shape({
   id: PropTypes.string.isRequired,
   fields: PropTypes.shape({
    notes: PropTypes.shape({
     skills: PropTypes.shape({
      programmimg: PropTypes.arrayOf(PropTypes.string),
      techStack: PropTypes.arrayOf(PropTypes.string),
      tools: PropTypes.arrayOf(PropTypes.string),
     }),
     projects: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
   }).isRequired,
  }).isRequired,
 }).isRequired,
}

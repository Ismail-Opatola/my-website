import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import clsx from "clsx"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import TopSvg from "../components/TopSvg"
import BottomSvg from "../components/BottomSvg"
import WavySvg from "../components/WavySvg"

import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles"
import { withStyles } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"

// const typoBoldWrapper = responsiveFontSizes(
//   createMuiTheme({
//     typography: {
//       useNextVariants: true,
//       fontFamily: '"Open Sans", sans-serif',
//       fontSize: 19,
//       fontStyle: "bold",
//       fontWeightMedium: 600,
//     },
//   })
// )

const typoWrapper = responsiveFontSizes(
  createMuiTheme({
    typography: {
      useNextVariants: true,
      fontFamily: '"Caveat", cursive',
      fontSize: 20,
      fontWeight: 900,
    },
  })
)
const typoWrapperII = responsiveFontSizes(
  createMuiTheme({
    typography: {
      useNextVariants: true,
      // fontFamily: '"Source Sans Pro", sans-serif',
      // fontSize: 20,
      // fontWeight: 900,
      fontFamily: '"Open Sans", sans-serif',
      fontStyle: "regular",
      color: "#c5c1b9",
      fontSize: 19,
      lineHeight: 1.4,
      maxWidth: 640,
      fontWeightLight: 300,
    },
  })
)

const useStyles = theme => ({
  section1: {
    position: "relative",
    margin: 0,
    padding: 0,
    height: "100vh",
    backgroundColor: "#100E17",
    overflow: "visible",
    [theme.breakpoints.up("lg")]: {
      height: "90vh",
    },
    paddingBottom: theme.spacing(8),
  },
  innerBox1: {
    position: "relative",
    paddingTop: theme.spacing(8),
    height: "inherit",
    [theme.breakpoints.down("xs")]: {
      height: "100%",
    },
  },
  wavySvg: {
    position: "absolute",
    border: "3px solid red",
    "& .wavy-top": {
      fill: "#152347",
      opacity: ".93",
    },
    "& .wavy-bottom": {
      height: "100%",
      fill: "#f3efef",
    },
  },
  textIntro: {
    fontFamily: '"Source Sans Pro", sans-serif',
    fontWeight: 900,
    fontStyle: "Italic",
    fontSize: 46,
    color: "#ccc",
    maxWidth: 640,
    margin: "auto",
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      textAlign: "center",
      fontSize: 60,
    },
  },
  textIntroII: {
    // fontFamily: '"Caveat", cursive',
    fontFamily: '"Open Sans", sans-serif',
    fontStyle: "regular",
    color: "#c5c1b9",
    fontSize: 19,
    lineHeight: 1.4,
    maxWidth: 640,
    fontWeightLight: 300,
    margin: "auto",
    padding: theme.spacing(2),
    "& span": {
      color: "#ef6474",
    },
  },
  section2: {
    fontFamily: '"Open Sans", sans-serif',
    top: "-5px",
    left: 0,
    // zindex: 900,
    padding: theme.spacing(2),
    color: "#f3efef",
    maxWidth: 900,
    margin: "auto",
  },
  section2Heading: {
    margin: "auto",
    padding: 50,
    maxWidth: 620,
    textAlign: "center",
  },
  project_info_section: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  project_image_box: {
    maxWidth: 620,
    margin: "auto",
    marginBottom: theme.spacing(8),
    overflow: "hidden",
    transition: "box-shadow 300ms ease",
    cursor: "pointer",
    border: ".5rem solid #181a1b",
    "&:hover ": {
      boxShadow: "0 5px 32px rgba(94, 74, 110, 0.2)",
    },
    "& .project_image": {
      // borderRadius: 40,
    },
  },
  project_info_box: {
    fontFamily: '"Open Sans", sans-serif',
    fontStyle: "regular",
    color: "#c5c1b9",
    fontSize: 19,
    lineHeight: 1.4,
    maxWidth: 640,
    fontWeightLight: 300,
    margin: "auto",

    "& .title": {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: 19,
      fontStyle: "Bold",
      fontWeight: 600,
      marginBottom: theme.spacing(3),
      textDecoration: "underline",
    },
    "& .description": {
      marginBottom: theme.spacing(3),
    },
    "& h5": {
      fontSize: 16,
      fontStyle: "Bold",
      fontWeight: 600,
    },
  },
  project_info_cta: {
    display: "flex",
    justifyContent: "flex-start",
    flexGrow: 1,
    "& .cta-btn": {
      marginRight: theme.spacing(4),
      fontSize: 15,
      "&:hover": {
        backgroundColor: "#3f51b5",
        color: "#c5c1b9",
      },
    },
  },
})

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foo: "",
    }
  }

  fetchImg = (imgData, imgNodes) => {
    return imgNodes.nodes.find(im =>
      im.childImageSharp.fluid.src.includes(imgData.imageUrl)
    ).childImageSharp.fluid
  }

  componentDidMount() {
    console.log(`RAN YOUR CODE >>> @componentDidMount`)
  }
  componentWillUnmount() {
    console.log(`RAN YOUR CODE >>> @componentWillUnmount`)
  }

  render() {
    const { bottomPath } = this.state
    const { classes, data } = this.props
    // const mixedTitleClasses = clsx(classes.bold)
    const mainBg = data.mainBg.childImageSharp.fluid

    console.log(data, this.props)

    return (
      <Layout>
        <SEO title="Home" />
        <MuiThemeProvider theme={typoWrapperII}>
          <Box className={classes.section1}>
            {/*  <WavySvg className={classes.wavySvg}/> */}

            <Box className={classes.innerBox1}>
              <Typography className={clsx(classes.textIntro, "fonty-purple")}>
                Long Live The World Wide Web!!!
              </Typography>
              <Typography className={classes.textIntroII} paragraph={true}>
                Hello, my name is <span>Ismail</span>. I'm a Frontend /
                Fullstack React Developer living in bustling Lagos, Nigeria. I
                enjoy building performant web apps with React, Nodejs and
                Firebase. What are your formula?
              </Typography>
            </Box>
          </Box>

          <Box className={classes.section2}>
            <MuiThemeProvider theme={typoWrapper}>
              <Typography
                variant="h3"
                align="center"
                gutterBottom={true}
                className={classes.section2Heading}
              >
                Some of my work
              </Typography>
            </MuiThemeProvider>

            <Box container spacing={3} className={classes.project_info_section}>
              <Paper className={classes.project_image_box} elevation="5">
                <Img
                  fluid={data.mainBg.childImageSharp.fluid}
                  className="project_image"
                />
              </Paper>

              <Grid
                sm={12}
                md
                spacing={2}
                zeroMinWidth
                className={classes.project_info_box}
              >
                <Typography
                  component="h4"
                  className={clsx("title", "fonty-purple")}
                  gutterBottom={true}
                >
                  Boohoo Clone
                </Typography>

                <Typography
                  variant="p"
                  className="description"
                  gutterBottom={true}
                  paragraph={true}
                >
                  I asked Michael if he thought better support might be coming
                  for some of these features, but he showed me a much better way
                  of working with it, circumventing this method entirely. We'll
                  go over this technique so that you can get started writing
                  scalable SVG Icon Systems in React, as well as some tricks I'd
                  propose could work nicely, too.
                </Typography>

                <Grid
                  container
                  variant="aside"
                  spacing={1}
                  direction="row"
                  wrap="nowrap"
                  justify="space-between"
                  // alignItems="center"
                >
                  <Grid item>
                    <Typography component="h5" display="block">
                      Tech Stack
                    </Typography>
                    <List>
                      <ListItem>React</ListItem>
                      <ListItem>Nodejs</ListItem>
                      <ListItem>React Native</ListItem>
                      <ListItem>Firebase</ListItem>
                      <ListItem>Nextjs</ListItem>
                      <ListItem>RxFire</ListItem>
                    </List>
                  </Grid>
                  <Grid item>
                    <Typography component="h5" display="block">
                      features
                    </Typography>
                    <List>
                      <ListItem>Order Tracking</ListItem>
                      <ListItem>Payment Proccessing</ListItem>
                      <ListItem>Inventry Management</ListItem>
                      <ListItem>Blog</ListItem>
                      <ListItem>Role management</ListItem>
                      <ListItem>Content Management System</ListItem>
                    </List>
                  </Grid>
                </Grid>
                <Box className={classes.project_info_cta}>
                  <Button
                    variant="outlined"
                    size="small"
                    color="primary"
                    className="cta-btn"
                  >
                    Website
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    color="primary"
                    className="cta-btn"
                  >
                    Demo
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    color="primary"
                    className="cta-btn"
                  >
                    Code
                  </Button>
                </Box>
              </Grid>
            </Box>
          </Box>
        </MuiThemeProvider>
      </Layout>
    )
  }
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
  }
`

export default withStyles(useStyles)(IndexPage)

/*
*        <BackgroundImage
          Tag="section"
          className={classes.mainBg}
          fluid={mainBg}
          backgroundColor={`#040e18`}
        ></BackgroundImage>

        // mainBg: {
        //   height: "auto",
        //   backgroundPosition: "top center",
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "auto",
        //   [theme.breakpoints.down("sm")]: {
        //     BackgroundImage: "none",
        //   },
        // },

        ArtemyHi from svgsprite.com
My name is Artemy. I'm a man who is trying to find himself somewhere between coding and drawing.
Key project
Logo of the Reactive Doodles App
It’s a free cross-platform application
A visual editor with a library of premade graphics elements to compose and stylize illustrations for any design projects. One more tool for designers and saving money for people who need simple and quality digital graphicsfor their business purposes. Any serious skills are not required but the app has a lot of interesting settings like generation of random compositions, creative search by special metrics, fully customizable auto-draw effects...
Work with the Reactive Doodles Appfxfxfx
This project is my study of successful digital art and a lot of coding, math and drawing. I don't know exactly when the first release will be ready. So I invite you to join this newsletter...
Heart - animated gif icon
Join the private testing
Email
Contacts
I'm looking for talented 2D artists who want to be featured in the app graphics library with an immortal backlink.In any case, if you have questions, useful suggestions or just you want to say "hello" - I'm in touch here:

Other projects
Utilities to speed up work with vector graphics
SVG sprite generator online.
SVG sprite generator
This utility helps you optimize and merge your vector assets as a reusable React.js component or as ordinary HTML markup according to best practice. These tips inside the generator will help you: "How to use SVG sprites in web development".
Open the App
Simple SVG editor
SVG customizer
It's a simplified tool for batch processing of vector images in the SVG format. The key features: the maximum possible optimization of input data, control of strokes width, global and local color replacement, converting to PNG with different scaling factor, deleting selected elements, correcting content scale and position and simple "One Preset" system to store any global changes. Nothing more.
Open the App
Lottie animation file example
Web animation player for Lottie files
A web tool where you can quickly play your animation files created by using Lottie (Bodymovin) and After Effects. Features: switching between two rendering methods (Canvas and SVG), changing animation speed, viewing on different backgrounds.
It works without uploading to the server, only private usage in your browser.
Updates
There are three new features.
1. "Wireframe mode". Look for the button in the top right area of the app and try to use "mouse hover" effect to switch between the display modes. This feature and speed control will help youcatch some animation mistakesand study other animator's files.
2.  "Playback control". Hover your mouse over the animation and click or drag the progress bar.
3.  "Clean view". Move your mouse outside the browser window to hide all user interface elements.
Open the App
Motion graphics for the Web - animation performance tests
Web animation performance tests
I've tested a bit: SVG with pure CSS animation, true vector sprite sheets, Lottie files, GIF animation, HTML5 Video, different ways to connect these technologies, FPS, file sizes and display issues.
Maybe, it will be useful for you at the time of choosing technologies for any front-end projects.
Page with my tests
It's not a button ;)
Creative digital assets
I'm really happy to work on non-profit projects, but I can't exist without the support  Please, check my digital products, maybe something will be useful for you.
Shot number 1
Set of simplified 3d models
Basic simplified 3d models - Table lamp
Simplified 3d models - table lamp outline
17 low-poly 3D models with programmable smoothing.
Minimum of details.
Quads priority.
Symmetrical.
File formats: blend, c4d, abc (alembic).
License: “use it as you want”.
Look at what's inside
Buy for $17i
Shot number 2
Box with smooth vector images
I share all my design material. It's a mix of logotypes, stickers, icons and illustration elements. You can use it as you need.
Lazy shaping with high quality smooth vector images
The whole content of the box was created in a fixed color scheme and with a fixed stroke width. You can customize it in any Vector graphics software or by using the free SVG customizer from this website.
Look at what's inside
Buy for $18.50i
Over 250 items at half price. 50% off this week!
Shot number 3
Set of background shapes
Examples of creative background shapes. Transparent PNG and optimized SVG
I started to collect my favorite background shapes. Currently, there are 50 items. But I plan to extend this collection and make free updates for all buyers.
File formats: ai, svg, png.
Look at what's inside
Buy for $11i
Mini guide. How to make creative icons with original background shapes
Quick guide. How to add creative backgrounds to any vector icons
Pin it
Shot number 4
SVG importer.
Plugin for Cinema 4D
A simple Cinema 4D plugin to quickly import SVG files from the hard disk or from the OS clipboard. For example, you can copy some vectors from the Adobe Illustrator workspace and paste it into Cinema 4D through the plugin button.
Buy for $5i
Import SVG to Cinema 4D faster
How to install?
Step one.
Unzip the archive so that the files tree looks like this:
Cinema4D/plugins/SVG-importer/
Step two.
Open Cinema 4D App and go to:
Main menu > Window > Customization > Customize Palettes
Type "SVG" in the name filter field and drag the plugin's icon to any toolbar of the App.
Shot number 5
Material color picker
It's a lightweight and pure JS solution without dependencies to work with colors in front-end. A key feature of the picker is the Material design color palette.
Link to the full presentation
Buy for $5i
Material design tools - Color picker JS
What's next?
Upcoming content
Anyway, my primary focus keeps on the Reactive Doodles App. But also I have an interest in the next tasks:
1. Extending the vector image collection.
2. Free WordPress plugins. One of them is already at the finish line.
3. Adobe Illustrator scripts.
4. 3D modeling utilities.
5. Animation sets for After Effects.
6. Tutorials.
Subscribe to content updates
It's not a button ;)
Let's work together
Well, now you know what I do and what my level is. You can hire me for your business purposes. The minimal rate is $15 / hour or by agreement depending on your project.
List of possible creative tasks
✔ Animated logo.
✔ Animated text.
✔ Interactive website elements.
✔ Any graphics design stuff.
Contact email

It's not a button ;)
Thank you for your time!
Please tell me what do you think about this site? What you liked, what you didn't like?
*/

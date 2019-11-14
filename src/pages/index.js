import React from 'react';
import {
  // StaticQuery,
  // Link,
  graphql,
} from 'gatsby';
import Img from 'gatsby-image';
// import BackgroundImage from "gatsby-background-image"
import clsx from 'clsx';

// import TopSvg from "../components/TopSvg"
// import BottomSvg from "../components/BottomSvg"
// import WavySvg from "../components/WavySvg"

import {
  // makeStyles,
  createMuiTheme,
  MuiThemeProvider,
  responsiveFontSizes,
  withStyles,
} from '@material-ui/core/styles';
import { lighten } from '@material-ui/core/styles/colorManipulator';

// import useMediaQuery from "@material-ui/core/useMediaQuery"

import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
// import Grid from "@material-ui/core/Grid"
// import Button from "@material-ui/core/Button"
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
// import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

import {
  // FaGithub,
  // FaMedium,
  // FaTwitter,
  FaGithubAlt,
  // FaYoutube,
  // FaLinkedin,
} from 'react-icons/fa';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo';
import Project from '../components/about/Project';
import Education from '../components/about/Education';
import Skills from '../components/about/Skills';
import Form from '../components/Form';
// import ListItemIcon from "@material-ui/core/ListItemIcon"

// import Graduation from "../assets/graduation.svg"

/* const typoBoldWrapper = responsiveFontSizes(
//   createMuiTheme({
//     typography: {
//       useNextVariants: true,
//       fontFamily: '"Open Sans", sans-serif',
//       fontSize: theme.typography.fontSize,
//       fontStyle: "bold",
//       fontWeightMedium: 600,
//     },
//   })
// ) */

const typoWrapper = responsiveFontSizes(
  createMuiTheme({
    typography: {
      useNextVariants: true,
      // fontFamily: '"Caveat", cursive',
      fontFamily: '"audiowide", "sans-serif"',
      fontSize: 20,
      fontWeight: 900,
    },
  }),
);

const useStyles = (theme) => ({
  section1: {
    margin: 0,
    height: '100%',
    backgroundColor: lighten('#100E17', .0),
    overflow: 'visible',
    padding: theme.spacing(10, 4),
  },
  innerBox1: {
    height: 'inherit',
    overflow: 'visible',
  },
  profile_image_box: {
    display: 'block',
    maxWidth: 240,
    minWidth: 300,
    marginTop: theme.spacing(18),
    marginBottom: theme.spacing(18),
    margin: 'auto',
    overflow: 'hidden',
    transition: 'box-shadow 300ms ease',
    cursor: 'pointer',
    border: '.5rem solid #181a1b',
    boxShadow: "-0 20px 25px -5px #100E17",
    background: "#181a1b",
  },
  /*
  profile_image_box: {
    display: 'block',
    // maxWidth: 240,
    height: 300,
    minWidth: 300,
    Width: "100%",
    marginTop: theme.spacing(18),
    marginBottom: theme.spacing(18),
    // padding: theme.spacing(8),
    margin: 'auto',
    overflow: 'hidden',
    transition: 'box-shadow 300ms ease',
    cursor: 'pointer',
    // border: '.5rem solid #181a1b',
    boxShadow: "-0 20px 25px -5px #100E17",
    background: "#181a1b",

    "& .profile_image": {
      // borderRadius: "50%",
    }
  },
  wavySvg: {
  //   position: "absolute",
  //   border: "3px solid red",
  //   "& .wavy-top": {
  //     fill: "#152347",
  //     opacity: ".93",
  //   },
  //   "& .wavy-bottom": {
  //     height: "100%",
  //     fill: "#f3efef",
  //   },
}, */
  textIntro: {
    fontFamily: '"Source Sans Pro", sans-serif',
    fontWeight: 900,
    // fontStyle: 'Italic',
    // fontSize: 46,
    textAlign: 'center',

    fontSize: 18,
    color: '#ccc',
    maxWidth: 640,
    margin: 'auto',
    padding: theme.spacing(2),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      textAlign: 'center',
      fontSize: 60,
    },
  },
  textIntroII: {
    fontSize: theme.typography.fontSize,
    lineHeight: 1.4,
    textAlign: 'center',
    color: '#c5c1b9',
    maxWidth: 640,
    margin: 'auto',
    '& span': {
      color: '#ef6474',
    },
    [theme.breakpoints.down('sm')]: {
      // textAlign: 'left',
    },
  },
  section2: {
    fontFamily: '"Open Sans", sans-serif',
    color: '#f3efef',
    maxWidth: 900,
    margin: 'auto',
    padding: theme.spacing(2),
  },
  section2Heading: {
    margin: 'auto',
    padding: 50,
    maxWidth: 620,
    textAlign: 'center',
  },
  project_box_divider: {
    maxWidth: 620,
    textAlign: 'center',
    margin: 'auto',
  },
  section2_github_btn: {
    margin: 'auto',
    maxWidth: 620,
    marginBottom: theme.spacing(8),

    // '&:hover': {
    // backgroundColor: '#3f51b5',
    // color: '#c5c1b9',
    backgroundColor: lighten('#000', 0.2),
    color: theme.palette.secondary,
    // textTransform: 'none'
    '& a': {
      textTransform: 'none',
    },
    // },
  },
  section3: {
    maxWidth: 900,
    color: '#c5c1b9',
    margin: 'auto',
    padding: theme.spacing(4, 2),
  },
  section4: {
    maxWidth: 900,
    color: '#c5c1b9',
    margin: 'auto',
    padding: theme.spacing(4, 2),
  },
  section5: {
    maxWidth: 900,
    color: '#c5c1b9',
    margin: 'auto',
    padding: theme.spacing(4, 2),
  },
});

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: '',
    };
  }

  fetchImg = (imgData, imgNodes) => imgNodes.nodes.find((im) => im.childImageSharp.fluid.src.includes(imgData.imageUrl))
    .childImageSharp.fluid

  componentDidMount() {
    console.log('RAN YOUR CODE >>> @componentDidMount');
  }

  componentWillUnmount() {
    console.log('RAN YOUR CODE >>> @componentWillUnmount');
  }

  render() {
    const {
      classes,
      data: {
        profileImg,
        notes: {
          fields: {
            notes: { skills, projects },
          },
        },
      },
    } = this.props;
    // const mixedTitleClasses = clsx(classes.bold)
    // console.log(projectsData);

    return (
      <Layout>
        <SEO title="Home" />
        <>
          <Box className={classes.section1} component="section">
            <Box className={classes.innerBox1}>
              <Typography className={clsx(classes.textIntro)}>
                Long Live The World Wide Web!!!
              </Typography>
              <Typography className={classes.textIntroII} paragraph>
                Hello, my name is
                {' '}
                <span>Ismail</span>
. I'm a Frontend / Fullstack React Developer
                living in bustling Lagos, Nigeria. I enjoy building performant mobile & web apps
                with React, Nodejs and Firebase. What are your formulas?
              </Typography>
            </Box>

            <Paper square className={classes.profile_image_box} elevation={6}>
              <Img fluid={profileImg.childImageSharp.fluid} className="profile_image" />
            </Paper>
          </Box>

          <Box id="work" className={classes.section2} component="section">
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
            {projects
              && projects.map((project, index) => {
                if (index !== projects.length - 1) {
                  return (
                    <>
                      <Project project={project} key={project.title} />
                      <Divider className={classes.project_box_divider} />
                    </>
                  );
                }
                return <Project project={project} key={project.title} />;
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

          <Box className={classes.section3} component="section">
            <Education />
          </Box>
          <Box className={classes.section4} component="section">
            {skills && <Skills skills={skills} />}
          </Box>
          <Box id="contact-form" className={classes.section5} component="section">
            <Form />
          </Box>
        </>
        <Toolbar />
      </Layout>
    );
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
            imageUrl
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
`;

export default withStyles(useStyles)(IndexPage);

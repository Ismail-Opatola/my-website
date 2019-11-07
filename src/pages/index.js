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
//       fontSize: 19,
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
    backgroundColor: '#100E17',
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
    marginTop: theme.spacing(18),
    marginBottom: theme.spacing(18),
    margin: 'auto',
    overflow: 'hidden',
    transition: 'box-shadow 300ms ease',
    cursor: 'pointer',
    border: '.5rem solid #181a1b',
  },
  /* wavySvg: {
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
    fontStyle: 'Italic',
    fontSize: 46,
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
    fontSize: 19,
    lineHeight: 1.4,
    textAlign: 'center',
    color: '#c5c1b9',
    maxWidth: 640,
    margin: 'auto',
    '& span': {
      color: '#ef6474',
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
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
              <Typography className={clsx(classes.textIntro, 'fonty-purple')}>
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

            <Paper className={classes.profile_image_box} elevation={5}>
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

       <WavySvg className={classes.wavySvg}/>

       import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { Row, Col, Button } from "reactstrap"
import {
  MdArrowForward,
  MdArrowBack,
  MdLocalPhone,
  MdEmail,
} from "react-icons/md"
import { FaLinkedin } from "react-icons/fa"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.switchProjects = this.switchProjects.bind(this)
    this.switchServicesSlideImgs = this.switchServicesSlideImgs.bind(this)
    this.state = {
      servicesImgCounter: 0,
      servicesSlidesLength: 0,
      servicesImgDetails: {},
      projectImgFluid: {},
      projectDetails: {},
    }
  }
  switchProjects(n) {
    this.setState((state, props) => {
      return {
        ...state,
        projectImgFluid: this.fetchImg(n, this.props.data.servicesSlides),
        projectDetails: n,
      }
    })
  }
  switchServicesSlideImgs(n) {
    const { servicesImgCounter, servicesSlidesLength } = this.state
    const { servicesSlides, projectData } = this.props.data

    switch (n) {
      case "SlideRight":
        if (
          servicesImgCounter < servicesSlidesLength &&
          servicesImgCounter >= 0 &&
          servicesImgCounter !== servicesSlidesLength
        ) {
          this.setState((state, props) => {
            return {
              ...state,
              servicesImgCounter: state.servicesImgCounter + 1,
              servicesImgDetails: projectData.fields.projects.find(prj => {
                if (
                  prj.imageUrl ===
                  servicesSlides.nodes[servicesImgCounter + 1].relativePath
                ) {
                  return {
                    location: prj.location,
                    year: prj.year,
                    status: prj.status,
                  }
                }
              }),
            }
          })
        }
        break
      case "SlideLeft":
        if (
          servicesImgCounter <= servicesSlidesLength &&
          !(servicesImgCounter <= 0)
        ) {
          this.setState((state, props) => {
            return {
              ...state,
              servicesImgCounter: state.servicesImgCounter - 1,
              servicesImgDetails: projectData.fields.projects.find(prj => {
                if (
                  prj.imageUrl ===
                  servicesSlides.nodes[servicesImgCounter - 1].relativePath
                ) {
                  return {
                    location: prj.location,
                    year: prj.year,
                    status: prj.status,
                  }
                }
              }),
            }
          })
        }
        break
      default:
        break
    }
  }
  fetchImg = (imgData, imgNodes) => {
    return imgNodes.nodes.find(im =>
      im.childImageSharp.fluid.src.includes(imgData.imageUrl)
    ).childImageSharp.fluid
  }
  componentDidMount() {
    const { servicesSlides, projectData } = this.props.data
    this.setState((state, props) => {
      return {
        servicesSlidesLength: servicesSlides.nodes.length - 1,
        projectImgFluid: this.fetchImg(
          projectData.fields.projects[0],
          servicesSlides
        ),
        projectDetails: projectData.fields.projects[0],
        servicesImgDetails: projectData.fields.projects.find(prj => {
          if (
            prj.imageUrl ===
            servicesSlides.nodes[0].relativePath
          ) {
            return {
              location: prj.location,
              year: prj.year,
              status: prj.status,
            }
          }
        }),
      }
    })
    console.log(`RAN YOUR CODE >>> @componentDidMount`)
  }
  componentWillUnmount() {
    this.setState({
      serviceImgCounter: 0,
      servicesSlidesLength: 0,
      projectImgFluid: {},
      projectDetails: {},
    })
    console.log(`RAN YOUR CODE >>> @componentWillUnmount`)
  }
  render() {
    const {
      showcaseData,
      showcaseImg,
      servicesData,
      servicesSlides,
      projectData,
      teamMd,
      teamData,
      teamImgs,
    } = this.props.data

    const {
      servicesSlidesLength,
      servicesImgCounter,
      servicesImgDetails,
      projectImgFluid,
      projectDetails,
    } = this.state

    let tmImg = teamImgs.nodes[0].childImageSharp.fluid.src.includes(
      "bimbo.jpg"
    )

    console.log({
      servicesSlidesLength,
      servicesImgCounter,
      servicesImgDetails,
      projectImgFluid,
      projectDetails,
      teamImgs,
      tmImg,
      projectData,
      servicesSlides,
    })
    return (
      <Layout>
        <SEO title="Home" />
        <section className="box-1" id="Showcase">
          <Row className="section-showcase main--container">
            <Col className="section-showcase--content">
              <p className="header--size-sm" alt="company name">
                Estatement Partners
              </p>
              <h1 className="header--size-xl header--font-1">
                {showcaseData.frontmatter.header}
              </h1>
              <hr className="hr--length-md hr--color-gray spacing-bottom spacing-top" />
              <div
                dangerouslySetInnerHTML={{ __html: showcaseData.html }}
                className="paragraph--size-sm spacing-bottom"
              />
              <Link
                to="#"
                className="btn btn-lg btn--color-brown btn--size-sm btn--animation-pulsate"
              >
                read more
              </Link>
            </Col>
            <Col className="section-showcase--image-box">
              <Img
                className="section-showcase__image"
                fluid={showcaseImg.childImageSharp.fluid}
              />
            </Col>
          </Row>
        </section>

        <section className="box-2" id="Services">
          <div className="section-services main--container">
            <div className="section-services__image-box">
              <div className="section-services-slide-counter">
                <span>
                  0{servicesImgCounter + 1} / 0{servicesSlidesLength}
                </span>
              </div>
              <div className="section-services-btn section-services-btn-left">
                <Button
                  id="SlideLeft"
                  onClick={() => this.switchServicesSlideImgs("SlideLeft")}
                  disabled={servicesImgCounter <= 0}
                >
                  <MdArrowBack size={18} />
                </Button>
              </div>
              <Img
                className="section-services__image"
                fluid={
                  servicesSlides.nodes[servicesImgCounter].childImageSharp.fluid
                }
              />
              <div className="section-services-btn section-services-btn-right">
                <Button
                  id="SlideRight"
                  onClick={() => this.switchServicesSlideImgs("SlideRight")}
                  disabled={servicesImgCounter >= servicesSlidesLength}
                >
                  <MdArrowForward size={18} />
                </Button>
              </div>
              <div className="section-services-slide-details">
                <p>{servicesImgDetails.location}</p>
                <p>
                  {servicesImgDetails.status} {servicesImgDetails.year}
                </p>
              </div>
            </div>
            <div className="section-services--content">
              <h1
                className="header--size-xl header--font-1"
                style={{ width: "85%" }}
              >
                Pertners in property offer a comprehensive range of services
              </h1>
              <hr className="hr--length-md hr--color-gray spacing-bottom spacing-top" />
              <div className="section-services-list">
                {servicesData.edges.map(data => (
                  <div key={data.node.id} className="spacing-bottom-sm">
                    <p className="header--size-sm">
                      {data.node.frontmatter.title}
                    </p>
                    <div
                      dangerouslySetInnerHTML={{ __html: data.node.html }}
                      className="paragraph--size-sm"
                    />
                    <Link to="#" className="section-services-info-btn">
                      <MdArrowForward className="section-services-info-btn-icon" />
                    </Link>
                    <div className="clear"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="box-3" id="Projects">
          <div className="section-projects main--container">
            <div className="section-projects-content">
              <div>
                <h1 className="header--size-xl header--font-1">Our Projects</h1>

                <hr className="hr--length-md hr--color-gray spacing-bottom spacing-top" />

                <ul className="section-projects-list">
                  {projectData.fields.projects.map(data => (
                    <li
                      className="section-projects-item"
                      key={data.name}
                      onClick={() => {
                        this.switchProjects(data)
                      }}
                    >
                      {data.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="section-projects-detail">
                <p className="section-projects-detail-heading">Detail</p>
                <p>{projectDetails.detail}</p>
              </div>
            </div>

            <div className="section-projects__image-box">
              <div className="section-projects-track">
                <div>{""}</div>
                <div>{""}</div>
                <div>{""}</div>
                <div>{""}</div>
              </div>
              <Img
                className="section-projects__image"
                fluid={projectImgFluid}
                key={projectDetails.name}
              />
              <div className="section-services-slide-details">
                <p>{projectDetails.location}</p>
                <p>{projectDetails.year}</p>
                <p>{projectDetails.status}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="box-4" id="Team">
          <div className="section-team main--container">
            <div className="section-team-content">
              <p className="header--size-sm">{teamMd.frontmatter.title}</p>
              <div className="section-team-cta">
                <div className=" section-team-cta-header">
                  <h1 className="header--size-xl header--font-1">
                    {teamMd.frontmatter.header}
                  </h1>
                  <hr className="hr--length-md hr--color-gray spacing-bottom spacing-top" />
                </div>
                <div dangerouslySetInnerHTML={{ __html: teamMd.html }} />
              </div>
            </div>

            <div className="section-team-details">
              <div className="paginate">
                <Button className="paginate-left">
                  <MdArrowBack />
                </Button>
                <Button className="paginate-right">
                  <MdArrowForward />
                </Button>
              </div>

              <div className="section-team-gallery" id="LAST">
                {teamData.fields.team.map((data, index) => (
                  <div className="section-team-card" key={data.partner}>
                    <div className="section-team-card--img-box">
                      <p className="section-team-card--counter">
                        {`0${index + 1}/0${teamData.fields.team.length}`}
                      </p>
                      <Img
                        className="section-team-card--image"
                        fluid={this.fetchImg(data, teamImgs)}
                      />
                    </div>

                    <div className="section-team-card--details">
                      <p className="header--size-sm">Partner</p>
                      <div>
                        <h4 className="partner-name">{data.partner}</h4>
                        <hr className="hr--length-sm hr--color-gray spacing-bottom-sm spacing-top-sm" />
                      </div>
                      <div className="partner-bio">
                        <h5 className="header--size-sm">Bio</h5>
                        <div dangerouslySetInnerHTML={{ __html: data.bio }} />
                      </div>
                      <div
                        className="partner-contact-details"
                        style={{
                          display: "flex",
                          // height: "100%",
                          marginTop: "5%",
                        }}
                      >
                        <div className="btn-with-icon">
                          <MdLocalPhone size={20} />
                        </div>
                        <div className="btn-with-icon">
                          <MdEmail size={20} />
                        </div>
                        <div className="btn-with-icon">
                          <FaLinkedin size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export const indexQuery = graphql`
  query indexQuery {
    showcaseData: markdownRemark(fileAbsolutePath: { regex: "/about.md/" }) {
      frontmatter {
        header
        title
      }
      html
    }
    showcaseImg: file(relativePath: { regex: "/property-west-quarter.jpg/" }) {
      id
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    servicesData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          id
          html
        }
      }
    }
    servicesSlides: allFile(
      filter: {
        relativePath: { regex: "/property/" }
        extension: { eq: "jpg" }
        dir: { regex: "/images/" }
      }
    ) {
      nodes {
        id
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
        relativePath
      }
    }
    projectData: file(
      dir: { regex: "/util/" }
      relativePath: { eq: "projects.js" }
    ) {
      fields {
        projects {
          detail
          imageUrl
          location
          name
          status
          year
        }
      }
    }
    teamMd: markdownRemark(fileAbsolutePath: { regex: "/team.md/" }) {
      frontmatter {
        header
        title
      }
      html
    }
    teamData: file(dir: { regex: "/util/" }, relativePath: { eq: "team.js" }) {
      fields {
        team {
          bio
          contact
          email
          imageUrl
          linkedin
          partner
        }
      }
    }
    teamImgs: allFile(
      filter: {
        relativePath: { regex: "/^(?!property).*$/" }
        extension: { eq: "jpg" }
        dir: { regex: "/images/" }
      }
    ) {
      nodes {
        id
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default IndexPage


*/

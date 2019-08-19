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

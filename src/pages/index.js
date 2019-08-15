import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { Row, Col, Button } from "reactstrap"
import { MdArrowForward, MdArrowBack } from "react-icons/md"
import { underline } from "ansi-colors"

const IndexPage = ({ data }) => {
  const {
    showcaseData,
    showcaseImg,
    servicesData,
    servicesSlides,
    projectData,
    teamMd,
    teamData,
    teamImgs,
  } = data
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <section className="box-1">
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

      <section className="box-2">
        <div className="section-services main--container">
          <div className="section-services__image-box">
            <div className="section-services-slide-counter">
              <span>1 / 04</span>
            </div>
            <div className="section-services-btn section-services-btn-left">
              <Button>
                <MdArrowBack />
              </Button>
            </div>
            <Img
              className="section-services__image"
              fluid={showcaseImg.childImageSharp.fluid}
            />
            <div className="section-services-btn section-services-btn-right">
              <Button>
                <MdArrowForward />
              </Button>
            </div>
            <div className="section-services-slide-details">
              <p>Banana Estate</p>
              <p>Completed 2010</p>
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
                  <Link
                    to="#"
                    className="btn btn--animation-pulsate btn--arrow-left"
                  >
                    <MdArrowForward className="sidebar-icon" color="white" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="box-3">
        <div className="section-projects main--container">
          <div className="section-projects-content">
            <div>
              <h1 className="header--size-xl header--font-1">Our Projects</h1>

              <hr className="hr--length-md hr--color-gray spacing-bottom spacing-top" />

              <ul className="section-projects-list">
                {projectData.fields.projects.map(data => (
                  <li className="section-projects-item">{data.name}</li>
                ))}
              </ul>
            </div>
            <div className="section-projects-detail">
              <p className="section-projects-detail-heading">Detail</p>
              <p>
                Developed by Estatement Partners and built by Pointcorp Homes,
                West Quarter in Victoria Garden City consist of 45
                architecturally designed house and land packages. Every corner
                of West Quarter has been thoughtfully crafted and
                architecturally designed
              </p>
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
              fluid={showcaseImg.childImageSharp.fluid}
            />
            <div className="section-services-slide-details">
              <p>Banana Estate</p>
              <p>2010</p>
              <p>Completed</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
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
        fluid {
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
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    projectData: file(
      dir: { regex: "/util/" }
      relativePath: { eq: "projects.js" }
    ) {
      fields {
        projects {
          detail
          image
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

// TODO: ANIMATION
// TODO: SIDEBAR
// TODO: SERVICES > SLIDE
// TODO: PROJECT > DETAIL
// TODO: PROJECT > SLIDE
// TODO: TEAM
// TODO: FOOTER

import React from "react"
import { StaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { Row, Col } from "reactstrap"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <section className="section-showcase container">
        <Row>
          <Col className="section-showcase-content">
            <small>Estatement Partners</small>
            <h1>title...</h1>
            <hr />
            <p>...content</p>
            <Link to="#">Read more</Link>
          </Col>
          <Col className="section-showcase-image">
            imge...
            {/* <Img /> */}
          </Col>
        </Row>
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
    schowcaseImage: file(
      relativePath: { regex: "/property-west-quarter.jpg/" }
    ) {
      id
      childImageSharp {
        fluid(maxWidth: 600) {
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
    teamImg: allFile(
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

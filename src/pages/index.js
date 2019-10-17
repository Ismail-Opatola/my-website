import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
// import Img from "gatsby-image"

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
    return (
      <Layout>
        <SEO title="Home" />
        <p>hdhdhdhdhdhdh</p>
      </Layout>
    )
  }
}

// export const indexQuery = graphql`
//   query indexQuery {  }
// `

export default IndexPage

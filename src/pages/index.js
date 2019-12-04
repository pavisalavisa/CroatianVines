import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroImage from "../components/heroImage"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroImage fluid={data.file.childImageSharp.fluid} height="400px">
      <h1>Croatian Vines</h1>
    </HeroImage>
  </Layout>
)

export const query = graphql`
  {
    file(relativePath: { eq: "home-heroImage.jpg" }) {
      childImageSharp {
        fluid(fit: CONTAIN) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage

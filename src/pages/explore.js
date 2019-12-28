import React from "react"
import { Link } from "gatsby"
import HeroImage from "../components/heroImage"
import LabeledText from "../components/common/labeledText"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Explore = ({ data }) => {
  const heroImage = data.heroImage.childImageSharp

  return (
    <Layout>
      <SEO title="Explore" />
      <HeroImage
        fluid={heroImage.fixed}
        height="400px"
      >
        <LabeledText text={"Explore our wine selection"} width="100%" />
      </HeroImage>
    </Layout>
  )
}

export const query = graphql`
  {
    heroImage: file(relativePath: {in: "explore-heroImage.jpg"}) {
      childImageSharp {
        fixed(quality: 100, height: 1333, width: 2000) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    
    images: allImageSharp(
      filter: {
        fixed: { src: { regex: "/explore-[a-zA-Z0-9]*Image.(png|jpg|gif)/" } }
      }
    ) {
      nodes {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    icons: allImageSharp(
      filter: {
        fixed: { src: { regex: "/explore-[a-zA-Z0-9]*Icon.(png|jpg|gif)/" } }
      }
    ) {
      nodes {
        fixed(width: 110, height: 110) {
          ...GatsbyImageSharpFixed
          originalName
        }
      }
    }

    winery: file(relativePath: {regex: "/winery/"}) {
      childImageSharp {
        fixed (width:350 height:220) {
          ...GatsbyImageSharpFixed
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

export default Explore

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroImage from "../components/heroImage"
import ImageText from "../components/imageText"
import LabeledText from "../components/common/labeledText"

const IndexPage = ({ data }) => {
  const images = data.images.nodes.map(node => node.childImageSharp)
  const contents = data.contents.nodes
  const heroImage = data.heroImage.childImageSharp

  return (
    <Layout>
      <SEO title="Home" />
      <HeroImage
        fluid={heroImage.fixed}
        height="80vh"
      >
        <LabeledText text={"Tell us about yourself"} width="100%" />
      </HeroImage>
      <ImageText
        image={images.find(image => image.fluid.src.includes("awards")).fluid}
        content={contents.find(content =>
          content.frontmatter.title.toLowerCase().includes("awards")
        )}
      />
      <ImageText
        mirrored
        image={
          images.find(image => image.fluid.src.includes("tradition")).fluid
        }
        content={contents.find(content =>
          content.frontmatter.title.toLowerCase().includes("tradition")
        )}
      />
      <ImageText
        image={images.find(image => image.fluid.src.includes("future")).fluid}
        content={contents.find(content =>
          content.frontmatter.title.toLowerCase().includes("future")
        )}
      />
    </Layout>
  )
}

export const query = graphql`
  {
    heroImage: file(relativePath: {in: "home-heroImage.jpg"}) {
      childImageSharp {
        fixed(quality: 100, height: 2199, width: 3298) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    images: allFile(
      filter: { relativePath: { regex: "/home-[a-zA-Z0-9]*.(png|jpg|gif)/" } }
    ) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }

    contents: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(index)/" } }
    ) {
      nodes {
        html
        frontmatter {
          subscript
          title
          content
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

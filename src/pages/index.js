import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroImage from "../components/heroImage"
import ImageText from "../components/imageText"
import LabeledText from "../components/common/labeledText"

const IndexPage = ({ data }) => {
  const heroImage = data.heroImage.childImageSharp
  const imageContents = data.contents.nodes.map(c => ({ content: c.frontmatter, image: data.images.nodes.map(node => node.childImageSharp)[c.frontmatter.ordinalNumber - 1] }))

  return (
    <Layout>
      <SEO title="Home" />
      <HeroImage
        fluid={heroImage.fixed}
        height="80vh"
      >
        <LabeledText text={"Tell us about yourself"} width="100%" />
      </HeroImage>
      {imageContents.map((ic, i) =>
        (<ImageText
          mirrored={i % 2}
          image={ic.image.fluid}
          contents={ic.content}
        />))}
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

    images: allFile(filter: {relativePath: {regex: "/home-[0-9]*-[a-zA-Z0-9]*.(png|jpg|gif)/"}, name: {ne: "home-heroImage"}}, sort: {fields: name}) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }

    contents: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(index)/"}}, sort: {fields: frontmatter___ordinalNumber}) {
      nodes {
        html
        frontmatter {
          subscript
          title
          content
          ordinalNumber
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

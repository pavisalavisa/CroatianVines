import React from "react"
import HeroImage from "../components/heroImage"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LabeledText from "../components/common/labeledText"
import Image from "gatsby-image"
import FlexRow from "../components/common/container"
import styled from "styled-components"
import ImageText from "../components/imageText"
import MiniWineryCard from "../components/miniWineryCard"

const Learn = ({ data }) => {
  const images = data.images.nodes
  const icons = data.icons.nodes
  const miniStepContents = data.miniStepContents.nodes
  const contents = data.contents.nodes

  return (
    <Layout>
      <SEO title="Learn" />
      <HeroImage
        fluid={images.find(image => image.fluid.src.includes("hero")).fluid}
        height="37.5vh"
      >
        <LabeledText text={"How do we do it?"} width="100%" />
      </HeroImage>

      <WinemakingProcessSteps>
        {miniStepContents.map(miniStep => (
          <MiniStepInfo
            key={miniStep.frontmatter.ordinalNumber}
            title={miniStep.frontmatter.title}
            content={miniStep.frontmatter.content}
            icon={
              icons.find(icon =>
                icon.fixed.originalName.includes(
                  miniStep.frontmatter.ordinalNumber
                )
              ).fixed
            }
          />
        ))}
      </WinemakingProcessSteps>
      <ImageText
        mirrored
        image={images.find(image => image.fluid.src.includes("step1Image")).fluid}
        content={contents.find(content =>
          content.frontmatter.title.toLowerCase().includes("first")
        )}
      />
      <ImageText
        image={images.find(image => image.fluid.src.includes("step2Image")).fluid}
        content={contents.find(content =>
          content.frontmatter.title.toLowerCase().includes("second")
        )}
      />
      <ImageText
        mirrored
        image={images.find(image => image.fluid.src.includes("step3Image")).fluid}
        content={contents.find(content =>
          content.frontmatter.title.toLowerCase().includes("third")
        )}
      />
      <LabeledText text="Find out more" margin="0 5vw 0 5vw" />
      <p>Our winemakers are eager to see you. Allow them to share their secrets with you.
Book a winery tour with us!</p>
      <WinerySuggestions>
        <MiniWineryCard image={data.winery.childImageSharp.fixed} name="Matusko" description="loremipsume" />
        <MiniWineryCard image={data.winery.childImageSharp.fixed} name="Matusko" description="loremipsume" />
        <MiniWineryCard image={data.winery.childImageSharp.fixed} name="Matusko" description="loremipsume" />
      </WinerySuggestions>
      {/* TODO: Get this from airtable, this is prone to change unliek other static content */}
    </Layout>
  )
}

const WinemakingProcessSteps = styled(FlexRow)`
  /* TODO: make responsive */
  > * {
    width:250px;
    margin: 2rem 5%;
    flex-grow: 1;
  }
  flex-wrap: wrap;

  /* TODO: fine tune this */
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`

const MiniStepInfo = ({ icon, title, content }) => (
  <div>
    <RoundImageWithBorder fixed={icon} />
    <h2>{title}</h2>
    <p>{content}</p>
    <AnchorLink>Learn more</AnchorLink>
  </div>
)

const AnchorLink = styled.a`
  color: #5b0b0b;
  font-weight: bold;
`

const RoundImageWithBorder = styled(Image)`
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.3);
`

const WinerySuggestions = styled(FlexRow)`
  justify-content:space-around;
  flex-wrap:wrap;

  margin: 2rem 5%;
`

export const query = graphql`
  {
    images: allImageSharp(
      filter: {
        fixed: { src: { regex: "/learn-[a-zA-Z0-9]*Image.(png|jpg|gif)/" } }
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
        fixed: { src: { regex: "/learn-[a-zA-Z0-9]*Icon.(png|jpg|gif)/" } }
      }
    ) {
      nodes {
        fixed(width: 110, height: 110) {
          ...GatsbyImageSharpFixed
          originalName
        }
      }
    }

    miniStepContents: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(learn)/miniStep/" } }
    ) {
      nodes {
        frontmatter {
          title
          content
          ordinalNumber
        }
      }
    }

    contents:  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(learn)/step/"}}) {
      nodes {
        frontmatter {
          title
          content
          subscript
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

export default Learn

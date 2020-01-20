import React from "react"
import HeroImage from "../components/heroImage"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StyledH1 } from "../components/common/headers"
import Image from "gatsby-image"
import FlexRow from "../components/common/container"
import styled from "styled-components"
import ImageText from "../components/imageText"
import WinerySuggestions from "../components/winery/winerySuggestions"
import Divider from "../components/common/divider"
import useScroll from "../hooks/use-scroll"
import { AnchorLink } from "../components/common/link"

const Learn = ({ data }) => {
  const images = data.images.nodes
  const icons = data.icons.nodes
  const miniStepContents = data.miniStepContents.nodes
  const contents = data.contents.nodes
  const heroImage = data.heroImage.childImageSharp

  const scrollSteps = [useScroll(), useScroll(), useScroll()]

  return (
    <Layout>
      <SEO title="Learn" />
      <HeroImage fluid={heroImage.fluid} height="400px">
        <StyledH1 centered secondaryColor fontSize="400%">
          How do we do it?
        </StyledH1>
      </HeroImage>

      <WinemakingProcessSteps>
        {miniStepContents
          .sort(
            (a, b) => a.frontmatter.ordinalNumber - b.frontmatter.ordinalNumber
          )
          .map(miniStep => (
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
              onLearnMoreClick={
                scrollSteps[miniStep.frontmatter.ordinalNumber - 1].scroll
              }
            />
          ))}
      </WinemakingProcessSteps>
      <Divider />
      <ImageText
        mirrored
        image={
          images.find(image => image.fluid.src.includes("step1Image")).fluid
        }
        contents={
          contents.find(content =>
            content.frontmatter.title.toLowerCase().includes("first")
          ).frontmatter
        }
        imageTextRef={scrollSteps[0].elementRef}
      />
      <ImageText
        image={
          images.find(image => image.fluid.src.includes("step2Image")).fluid
        }
        contents={
          contents.find(content =>
            content.frontmatter.title.toLowerCase().includes("second")
          ).frontmatter
        }
        imageTextRef={scrollSteps[1].elementRef}
      />
      <ImageText
        mirrored
        image={
          images.find(image => image.fluid.src.includes("step3Image")).fluid
        }
        contents={
          contents.find(content =>
            content.frontmatter.title.toLowerCase().includes("third")
          ).frontmatter
        }
        imageTextRef={scrollSteps[2].elementRef}
      />
      <Divider margin="10% 0 0 0" />
      <StyledH1 centered>
        Our winemakers are eager to see you. Allow them to share their secrets
        with you.
      </StyledH1>
      <WinerySuggestions />
    </Layout>
  )
}

const WinemakingProcessSteps = styled(FlexRow)`
  > * {
    width: 250px;
    flex-grow: 1;
    margin: 2.5%;
  }
  align-items: flex-start;
  flex-wrap: wrap;
`

const MiniStepInfo = ({ icon, title, content, onLearnMoreClick }) => (
  <div>
    <RoundImageWithBorder fixed={icon} />
    <h2>{title}</h2>
    <p>{content}</p>
    <AnchorLink onClick={onLearnMoreClick}>Learn more</AnchorLink>
  </div>
)

const RoundImageWithBorder = styled(Image)`
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.3);
`

export const query = graphql`
  {
    heroImage: file(relativePath: { in: "learn-heroImage.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

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

    contents: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(learn)/step/" } }
    ) {
      nodes {
        frontmatter {
          title
          content
          subscript
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

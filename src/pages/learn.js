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
import { CenteredParagraph } from "../components/common/paragraphs"
import Divider from "../components/common/divider"
import useScroll from "../hooks/use-scroll"

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
      <HeroImage fluid={heroImage.fixed} height="400px" >
        <LabeledText text={"How do we do it?"} width="100%" />
      </HeroImage>

      <WinemakingProcessSteps>
        {miniStepContents.sort((a, b) => a.frontmatter.ordinalNumber - b.frontmatter.ordinalNumber).map(miniStep => (
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
            onLearnMoreClick={scrollSteps[miniStep.frontmatter.ordinalNumber - 1].scroll}
          />
        ))}
      </WinemakingProcessSteps>
      <Divider />
      <ImageText
        mirrored
        image={images.find(image => image.fluid.src.includes("step1Image")).fluid}
        content={contents.find(content => content.frontmatter.title.toLowerCase().includes("first"))}
        imageTextRef={scrollSteps[0].elementRef}
      />
      <ImageText
        image={images.find(image => image.fluid.src.includes("step2Image")).fluid}
        content={contents.find(content => content.frontmatter.title.toLowerCase().includes("second"))}
        imageTextRef={scrollSteps[1].elementRef}
      />
      <ImageText
        mirrored
        image={images.find(image => image.fluid.src.includes("step3Image")).fluid}
        content={contents.find(content => content.frontmatter.title.toLowerCase().includes("third"))}
        imageTextRef={scrollSteps[2].elementRef}
      />
      <Divider margin="5%"/>
      <CenteredParagraph>Our winemakers are eager to see you. Allow them to share their secrets with you.
Book a winery tour with us!</CenteredParagraph>
      <WinerySuggestions>
        <MiniWineryCard image={data.winery.childImageSharp.fixed} name="Matusko" description="loremipsume" />
        <MiniWineryCard image={data.winery.childImageSharp.fixed} name="Matusko" description="loremipsume" />
        <MiniWineryCard image={data.winery.childImageSharp.fixed} name="Matusko" description="loremipsume" />
      </WinerySuggestions>
      {/* TODO: Get this from airtable, this is prone to change unlike other static content */}
    </Layout>
  )
}

const WinemakingProcessSteps = styled(FlexRow)`
  margin-top:0;
  margin-left:0;
  > * {
    width:250px;
    margin-left:5%;
    margin-top:5%;
    flex-grow: 1;
    min-width:300px;
  }
  align-items:flex-start;
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

const AnchorLink = styled.a`
  color: #5b0b0b;
  font-weight: bold;
  cursor:pointer;
`

const RoundImageWithBorder = styled(Image)`
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.3);
`

const WinerySuggestions = styled(FlexRow)`
  margin-top:0;
  justify-content:space-evenly;
  flex-wrap:wrap;
  align-content:space-between;

  > *{
    margin-top:5%;
  }
`

export const query = graphql`
  {
    heroImage: file(relativePath: {in: "learn-heroImage.jpg"}) {
      childImageSharp {
        fixed(quality: 100, height: 2800, width: 4200) {
          ...GatsbyImageSharpFixed
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

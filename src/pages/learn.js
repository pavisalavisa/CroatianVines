import React from "react"
import HeroImage from "../components/heroImage"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LabeledText from "../components/common/labeledText"
import Image from "gatsby-image"
import FlexRow from "../components/common/container"
import styled from "styled-components"

const Learn = ({ data }) => {
  const images = data.images.nodes
  const icons = data.icons.nodes
  const miniStepContents = data.miniStepContents.nodes

  return (
    <Layout>
      <SEO title="Learn" />
      <HeroImage
        fluid={images.find(image => image.fluid.src.includes("hero")).fluid}
        height="37.5vh"
      >
        <LabeledText text={"How do we do it?"}></LabeledText>
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
    </Layout>
  )
}

const WinemakingProcessSteps = styled(FlexRow)`
  /* TODO: make responsive */
  > * {
    margin: 5%;
    flex-grow: 1;
  }
  /* TODO: fine tune this */
  padding-bottom: 2%;
  margin: 2% 5%;
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

    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Learn

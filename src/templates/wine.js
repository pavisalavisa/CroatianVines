import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ImageText from "../components/imageText"
import HeroImage from "../components/heroImage"
import { useState } from "react"
import { StyledH1 } from "../components/common/headers"
import Comments from "../components/comments/comments"
import Ratings from "../components/common/ratings"
import { StyledParagraph } from "../components/common/paragraphs"
import { isAuthenticated } from "../services/authService"
import { TransparentTextButton } from "../components/common/button"
import { navigate } from "@reach/router"

const BrowseCollection = () => (
  <div>
    <StyledH1 centered secondaryColor>
      Not what you're looking for?
    </StyledH1>
    <StyledH1 centered secondaryColor fontSize="200%">
      Check out our
    </StyledH1>
    <TransparentTextButton
      fontSize="300%"
      onClick={() => navigate(`/collection/`)}
    >
      Collection
    </TransparentTextButton>
  </div>
)

export default ({ data }) => {
  const wine = { id: data.wine.id, ...data.wine.data }
  const heroImage = data.heroImage.childImageSharp
  const introductionParagraph = wine.Contents[0].data.Content
  const contents = wine.Contents.slice(1, wine.Contents.length)
  const bottomHeroImage = data.bottomHeroImage.childImageSharp
  const commentsList = data.dataJson.commentsList
  const [rating, setRating] = useState(0)

  return (
    <Layout>
      <SEO title={wine.Name} />
      <HeroImage fluid={heroImage.fluid} height="40vh">
        <StyledH1 centered secondaryColor fontSize="400%">
          {wine.Name}
        </StyledH1>
      </HeroImage>
      <StyledParagraph margin="5% 10% 0 10%">
        {introductionParagraph}
      </StyledParagraph>
      {contents.map((c, i) => (
        <ImageText
          contents={{ content: c.data.Content, subscript: c.data.Subscript }}
          image={c.data.Image.localFiles[0].childImageSharp.fluid}
          mirrored={i % 2}
        />
      ))}
      <div>
        <StyledH1 centered>How do you like this wine?</StyledH1>
        {!isAuthenticated() && (
          <StyledParagraph centered>
            You need to be logged in to cast your vote.
          </StyledParagraph>
        )}
        <Ratings rating={rating} changeRating={setRating} />
        <Comments commentsList={commentsList} />
      </div>
      <HeroImage
        margin="10% 0 -10% 0"
        height="75vh"
        fluid={bottomHeroImage.fluid}
        hideGradient
      >
        <BrowseCollection />
      </HeroImage>
    </Layout>
  )
}

export const query = graphql`
  query($wineId: String!) {
    heroImage: file(relativePath: { in: "wine-heroImage.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    bottomHeroImage: file(relativePath: { in: "wine-bottomHeroImage.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    wine: airtable(table: { eq: "Wines" }, recordId: { eq: $wineId }) {
      id: recordId
      data {
        Name
        ShortDescription
        Contents {
          data {
            BlockNumber
            Content
            Subscript
            Image {
              localFiles {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }

    dataJson {
      commentsList {
        id
        name
        image
        content
      }
    }
  }
`

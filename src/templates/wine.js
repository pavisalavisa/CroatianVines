import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import ImageText from "../components/imageText"
import Divider from "../components/common/divider"
import HeroImage from "../components/heroImage"
import Image from "gatsby-image"
import { useState } from "react"
import { Link } from "gatsby"
import { StyledH1 } from "../components/common/headers"
import Comments from "../components/comments"
import Ratings from '../components/common/ratings';

//TODO: Cleanup and refactor margins

const WhiteH1 = styled.h1`
  text-align:center;
  color:white;
  font-size:${props => props.fontSize ? props.fontSize : null};
`

const StyledLink = styled(Link)`
  background:rgba(255,255,255,0.3);
  text-decoration:none;
  font-size:400%;
  font-weight:bold;
  color:white;
  border: 3px solid white;
  padding:1rem 2rem;
  border-radius:6px;
  margin-top:3rem;

  &:hover{
    border: 5px solid #5B0B0B;
    background:rgb(91,11,11,0.3);
  }
`;


const BrowseCollection = () => (
  <div>
    <WhiteH1>Not what you're looking for?</WhiteH1>
    <WhiteH1 fontSize="220%">Check out our</WhiteH1>
    <StyledLink to="/collection">Collection</StyledLink>
  </div>
)

export default ({ data }) => {
  const wine = { id: data.wine.id, ...data.wine.data }
  const introductionParagraph = wine.Contents[0].data.Content
  const firstBlockContent = { content: wine.Contents[1].data.Content, subscript: wine.Contents[1].data.Subscript }
  const firstBlockImage = wine.Contents[1].data.Image
  const secondBlockContent = { content: wine.Contents[2].data.Content, subscript: wine.Contents[1].data.Subscript }
  const secondBlockImage = wine.Contents[2].data.Image
  const bottomHeroImage = data.bottomHeroImage.childImageSharp
  const [rating, setRating] = useState(0);

  return (
    <Layout>
      <StyledH1 centered>{wine.Name}</StyledH1>
      <p>{introductionParagraph}</p>
      <Divider margin="0 10%" />
      <ImageText contents={firstBlockContent} image={firstBlockImage.localFiles[0].childImageSharp.fluid} mirrored />
      <ImageText contents={secondBlockContent} image={secondBlockImage.localFiles[0].childImageSharp.fluid} />
      <StyledH1 centered>How do you like this wine?</StyledH1>
      <Divider margin="0 10%" />
      <Ratings rating={rating}
        changeRating={setRating} />
      <Comments commentsList={[{ name: 'Patrick Star', content: 'loremipsum' }]} />
      <HeroImage
        height="75vh"
        fluid={bottomHeroImage.fluid}
      >
        <BrowseCollection />
      </HeroImage>
    </Layout>
  )
}

export const query = graphql`
query query ($wineId: String!){

  bottomHeroImage: file(relativePath: {in: "wine-bottomHeroImage.jpg"}) {
    childImageSharp {
      fluid(quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }

    wine: airtable(table: {eq: "Wines"}, recordId: {eq: $wineId}) {
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
  }
`
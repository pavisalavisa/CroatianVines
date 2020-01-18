import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import ImageText from "../components/imageText"
import Divider from "../components/common/divider"
import HeroImage from "../components/heroImage"
import { useState } from "react"
import { Link } from "gatsby"
import { StyledH1 } from "../components/common/headers"
import Comments from "../components/comments/comments"
import Ratings from '../components/common/ratings';

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
`

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
  const contents = wine.Contents.slice(1, wine.Contents.length)
  const bottomHeroImage = data.bottomHeroImage.childImageSharp
  const commentsList = data.dataJson.commentsList
  const [rating, setRating] = useState(0);

  return (
    <Layout>
      <StyledH1 centered>{wine.Name}</StyledH1>
      <p>{introductionParagraph}</p>
      <Divider margin="0 10%" />
      {contents.map((c, i) => (
        <ImageText
          contents={{ content: c.data.Content, subscript: c.data.Subscript }}
          image={c.data.Image.localFiles[0].childImageSharp.fluid}
          mirrored={i % 2} />
      ))}
      <div>
        <StyledH1 centered>How do you like this wine?</StyledH1>
        <Ratings
          rating={rating}
          changeRating={setRating} />
        <Comments commentsList={commentsList} />
      </div>
      <HeroImage
        margin="10% 0 0 0"
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
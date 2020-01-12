import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import ImageText from "../components/imageText"
import { CenteredParagraph } from "../components/common/paragraphs"
import Divider from "../components/common/divider"

const Title = styled.h1`
    text-align:center;
`

export default ({ data }) => {
    const wine = { id: data.wine.id, ...data.wine.data }
    const introductionParagraph = wine.Contents[0].data.Content
    const firstBlockContent = { content: wine.Contents[1].data.Content, subscript: wine.Contents[1].data.Subscript }
    const firstBlockImage = wine.Contents[1].data.Image
    const secondBlockContent = { content: wine.Contents[2].data.Content, subscript: wine.Contents[1].data.Subscript }
    const secondBlockImage = wine.Contents[2].data.Image
    
    return (
        <Layout>
            <Title>{wine.Name}</Title>
            <p>{introductionParagraph}</p>
            <Divider />
            <ImageText contents={firstBlockContent} image={firstBlockImage.localFiles[0].childImageSharp.fluid} mirrored />
            <ImageText contents={secondBlockContent} image={secondBlockImage.localFiles[0].childImageSharp.fluid} />
            <CenteredParagraph>See what others think</CenteredParagraph>

        </Layout>
    )
}

export const query = graphql`
query query ($wineId: String!){
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
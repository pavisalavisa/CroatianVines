import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import MiniWineryCard from "./miniWineryCard"

const WinerySuggestionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: 1fr;
  grid-gap: 5vw;
  margin-top: 5%;
  justify-items: center;
`

export default () => {
  //TODO: Feed data from the parent
  const data = useStaticQuery(graphql`
    {
      suggestedWineries: allAirtable(
        filter: { table: { eq: "Wineries" } }
        limit: 3
      ) {
        nodes {
          id: recordId
          data {
            Name
            Description: ShortDescription
            Image {
              localFiles {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const suggestedWineries = data.suggestedWineries.nodes

  return (
    <WinerySuggestionsContainer>
      {suggestedWineries.map(x => (
        <MiniWineryCard
          key={x.id}
          image={x.data.Image.localFiles[0].childImageSharp.fluid}
          name={x.data.Name}
          description={x.data.Description}
        />
      ))}
    </WinerySuggestionsContainer>
  )
}

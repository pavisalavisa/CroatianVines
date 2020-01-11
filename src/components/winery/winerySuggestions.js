import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import MiniWineryCard from "./miniWineryCard"
import FlexRow from "../common/container"

const WinerySuggestionsContainer = styled(FlexRow)`
    margin-top:0;
    justify-content:space-evenly;
    flex-wrap:wrap;
    align-content:space-between;
    
    > *{
        margin-top:5%;
    }
`

export default () => {
    //TODO: Feed data from the parent
    const data = useStaticQuery(graphql`
    {
        suggestedWineries: allAirtable(filter: {table: {eq: "Wineries"}}, limit: 3) {
          nodes {
            id: recordId
            data {
              Name
              Description: ShortDescription
              Image {
                localFiles {
                  childImageSharp {
                    fixed(height: 275, width: 440, quality: 100) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
      }   
    `)

    const suggestedWineries = data.suggestedWineries.nodes;

    return (
        <WinerySuggestionsContainer>
            {suggestedWineries.map(x =>
                <MiniWineryCard key={x.id}
                    image={x.data.Image.localFiles[0].childImageSharp.fixed}
                    name={x.data.Name}
                    description={x.data.Description} />)}
        </WinerySuggestionsContainer>
    )
}


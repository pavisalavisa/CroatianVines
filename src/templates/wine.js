import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"


export default ({ data }) => {
    console.log('Wine data is:')
    console.log(data)
    return (
        <Layout>
            <div>
                <h1>{data.wine.data.Name}</h1>
            </div>
        </Layout>
    )
}

export const query = graphql`
query ($wineId: String!) {
    wine:airtable(table: {eq: "Wines"}, recordId: {eq: $wineId}) {
      recordId
      data {
        Description
        Name
      }
    }
  }
  
`
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"


export default ({ data }) => (
  <Layout>
    <div>
      <h1>{data.winery.data.Name}</h1>
    </div>
  </Layout>
)

export const query = graphql`
query ($wineryId: String!) {
    winery: airtable(table: {eq: "Wineries"}, recordId: {eq: $wineryId}) {
      recordId
      data {
        ShortDescription
        Name
      }
    }
  }
  
`
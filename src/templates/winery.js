import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"


export default ({ data }) => {
    console.log('Winery data is:')
    console.log(data)
    return (
        <Layout>
            <div>
                <h1>{data.winery.data.Name}</h1>
            </div>
        </Layout>
    )
}

export const query = graphql`
query ($wineryId: String!) {
    wine:airtable(table: {eq: "Wineries"}, recordId: {eq: $wineryId}) {
      recordId
      data {
        ShortDescription
        Name
      }
    }
  }
  
`
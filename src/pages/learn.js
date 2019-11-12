import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Learn = () => (
  <Layout>
    <SEO title="Learn" />
    <h1>Hello from the learn page</h1>
    <p></p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Learn

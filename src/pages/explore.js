import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Explore = () => (
  <Layout>
    <SEO title="Explore" />
    <h1>Hello from the explore page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Explore

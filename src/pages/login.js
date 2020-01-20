import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AuthenticationForm from "../components/authenticationForm"
import { navigate } from "@reach/router"

const LoginPage = () => {
  return (
    <Layout>
      <SEO title="Login" />
      <AuthenticationForm margin="0" onLogIn={() => navigate("/")} />
    </Layout>
  )
}

export default LoginPage

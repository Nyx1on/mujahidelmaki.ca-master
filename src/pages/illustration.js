import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import config from "../utils/config"
import Illustrations from "../components/Illustrations"

const images = [
  { url: "/drawings/shadow.png", title: "Shadow The Hedgehog" },
  { url: "/drawings/shadow.png", title: "Shadow The Hedgehog" },
  { url: "/drawings/shadow.png", title: "Shadow The Hedgehog" },
]
function illustration() {
  const title = "illustration"

  return (
    <Layout>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO />
      <div className="container">
        <illustrations />
      </div>
    </Layout>
  )
}

export default illustration

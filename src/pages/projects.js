import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"

import { ExternalLinkIcon } from "../assets/ExternalLinkIcon"
import { StarIcon } from "../assets/StarIcon"
import Layout from "../components/Layout"
import { SEO } from "../components/SEO"
import { Hero } from "../components/Hero"
import config from "../utils/config"
import { projectsList } from "../data/projectList.js"

function project() {
  return (
    <Layout>
      <div>project</div>
    </Layout>
  )
}

export default project

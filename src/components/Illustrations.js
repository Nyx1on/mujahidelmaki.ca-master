import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import config from "../utils/config"

const images = [
  { url: "../drawings/shadow.png", title: "Shadow The Hedgehog" },
  { url: "../drawings/shadow.png", title: "Shadow The Hedgehog" },
  { url: "../drawings/shadow.png", title: "Shadow The Hedgehog" },
]
function illustrations() {
  const title = "illustration"

  return (
    <Layout>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO />
      <div className="container">
        <Hero title={title} color="red" />
      </div>

      <section className="segment">
        <div className="container">
          <div className="image-preview">
            {images.map(image => {
              return (
                <div className="card" key={image.url}>
                  <a href={image.url} target="_blank" rel="noreferrer">
                    <h2>{image.title}</h2>

                    <div
                      className="image-thumbnail"
                      style={{ backgroundImage: `url('${image.url}')` }}
                      alt={image.title}
                    />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default illustrations

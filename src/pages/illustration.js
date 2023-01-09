import React from "react"
import { Layout } from "../components/Layout"
import { Hero } from "../components/Hero"
import { SEO } from "../components/SEO"
import { Helmet } from "react-helmet"
import config from "../utils/config"

function illustration() {
  const title = "Illustration"
  const images = [
    { url: "/drawings/shadow.png", title: "RAM Ram" },
    { url: "/drawings/logo3.png", title: "Kohaku River" },
  ]

  return (
    <div>
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

                    <div className="image-thumbnail" alt={image.title} />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default illustration

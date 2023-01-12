import React from "react"
import { Hero } from "../components/Hero"
import SEO from "./SEO"
import { Helmet } from "react-helmet"
import config from "../utils/config"
import Image from "gatsby-image"

const images = [
  { url: "/drawings/image.png", title: "Shadow The Hedgehog" },
  {
    url: "/drawings/ducatti.png",
    title: "DuCatti",
  },
]

function IllustrationLayout() {
  const title = "Illustration"

  return (
    <div>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO />
      <div className="container">
        <Hero title={title} color="red" />
      </div>

      <section className="segment">
        <div className="container">
          <div className="project-preview">
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
    </div>
  )
}

export default IllustrationLayout

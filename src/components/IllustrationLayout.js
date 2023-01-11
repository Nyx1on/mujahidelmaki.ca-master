import React from "react"
import { Hero } from "../components/Hero"
import { SEO } from "../components/SEO"
import { Helmet } from "react-helmet"
import config from "../utils/config"
import Image from "gatsby-image"

function illustrationLayout() {
  const title = "Illustration"
  const images = [
    { url: "/drawings/image.png", title: "Shadow The Hedgehog" },
    {
      url: "/drawings/ducatti.png",
      title: "DuCatti",
    },
  ]

  return (
    <div>
      <section className="segment">
        <div className="container">
          <div className="image-preview">
            {images.map(image => {
              return (
                <div className="card" key={image.url}>
                  <a href={image.url} target="_blank" rel="noreferrer">
                    <h2>{image.title}</h2>

                    <div className="image-thumbnail" alt={image.title}>
                      <img src={image.url} alt={image.title} />
                    </div>
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

export default illustrationLayout

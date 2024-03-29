import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import config from "../utils/config"
import SEO from "./SEO"
import { Hero } from "./Hero"
import { StarIcon } from "../assets/StarIcon"
import { Link } from "gatsby"
import { ExternalLinkIcon } from "../assets/ExternalLinkIcon"

const projectsList = [
  //? name, date, slug, tagline, url, writeup, highlight
  {
    name: "mujahidelmaki.ca",
    date: "2022",
    slug: "mujahidelmaki.ca-master",
    url: "https://www.mujahidelmaki.ca",
    tagline: "The source of this website.",
  },
  {
    name: "Self Driving Car",
    date: "2022",
    slug: "selfdriving-car",
    tagline:
      "Visualization of a neural network learning to drive a car in a 2D environment.",
    highlight: true,
  },
  // {
  //   name: "AI Programming Language",
  //   date: "2023",
  //   slug: "apl",
  //   tagline: "High level programming language that uses AI to code.",

  //   highlight: true,
  // },
  {
    name: "React Smooth Scroll",
    date: "2019",
    slug: "react-smooth-scroll",
    tagline: "My first react template which uses smooth scroll",
  },
  {
    name: "Drum Kit Vizualizer",
    date: "2022",
    slug: "drumkit-visualizer",
    tagline: "A fun web visualizer for drum kits",
  },
  {
    name: "Guess My Number Game",
    date: "2020",
    slug: "guess-my-number",
    tagline: "We have all coded this game before",
  },
  {
    name: "Pig Game",
    date: "2020",
    slug: "Pig-game",
    tagline: "A 2 player dice game",
    url: "https://laconia.dev",
  },
  // {
  //   name: "Code Typing Speed Test",
  //   date: "2020",

  //   tagline: "How fast can you code?",

  // },
]

function ProjectLayout() {
  const [repos, setRepos] = useState([])
  const title = "Projects"

  useEffect(() => {
    async function getStars() {
      const repos = await fetch(
        "https://api.github.com/users/mujahidelmaki/repos?per_page=100"
      )

      return repos.json()
    }

    getStars()
      .then(repo => {
        setRepos(repo)
      })
      .catch(err => console.log(err))
  }, [])
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
            {projectsList?.map(project => {
              return (
                <div className="card anchored large" key={project.slug}>
                  <div className="stars">
                    {repos.find(repo => repo.name === project.slug) && (
                      <div className="star">
                        <a
                          href={`https://github.com/mujahidelmaki/${project.slug}/stargazers`}
                        >
                          {Number(
                            repos.find(repo => repo.name === project.slug)
                              .stargazers_count
                          ).toLocaleString()}
                        </a>
                        <StarIcon />
                      </div>
                    )}
                  </div>
                  <div>
                    <time>{project.date}</time>
                    <a
                      className="card-header"
                      href={`https://github.com/mujahidelmaki/${project.slug}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.name}
                    </a>
                    <p>{project.tagline}</p>
                  </div>
                  <div className="links anchored">
                    {project.writeup && (
                      <Link className="button small" to={project.writeup}>
                        Article
                      </Link>
                    )}
                    {project.url && (
                      <a
                        className="button small flex"
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo <ExternalLinkIcon />
                      </a>
                    )}
                    <a
                      className="button small flex"
                      href={`https://github.com/mujahidelmaki/${project.slug}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source <ExternalLinkIcon />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectLayout

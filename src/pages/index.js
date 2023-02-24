import * as React from "react"
import { Link, graphql } from "gatsby"
import Helmet from "react-helmet"
import { Hero } from "../components/Hero"
import { Heading } from "../components/Heading"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import config from "../utils/config"
const featuredPostsThumbnail = [".", "../pro_management.png", "../codewars.png"]
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
    highlight: true,
  },
  {
    name: "Drum Kit Vizualizer",
    date: "2022",
    slug: "drumkit-visualizer",
    tagline: "A fun web visualizer for drum kits",
    highlight: true,
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
const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout>
      <div>
        <Helmet title={config.siteTitle} />
        <seo />

        <div className="container">
          <div className="hero-wrapper">
            <Hero title="Hey, I'm Mujahid..." index>
              <p className="hero-description small width">
                Welcome to my digital garden. 👾
                <br />
                <br />
                I'm a software developer in Waterloo, Ontario. I make
                <Link to="/projects"> open-source</Link> projects and{" "}
                <Link to="/blog">write</Link> about code, design, and life. I
                like playing the Piano, drawing, and reading
              </p>
              <br />
              <p>
                <small className="text-muted">
                  <em> last updated: Janurary 24th, 2023</em>
                </small>
              </p>
            </Hero>

            <div className="decoration">
              <img src="../hero-maki.png" className="image hero-image" />
            </div>
          </div>
        </div>

        <div className="container">
          <section className="segment first">
            <Heading title="Latest Posts" slug="/blog" />

            <ol style={{ listStyle: `none` }}>
              {posts.map(post => {
                const title = post.frontmatter.title || post.fields.slug
                if (post.frontmatter.title == "About Me") {
                  return null
                } else {
                  return (
                    <Link
                      to={post.fields.slug}
                      key={post.fields.slug}
                      className="post"
                    >
                      <h3>{title}</h3>
                      <time>{post.frontmatter.date}</time>
                    </Link>
                  )
                }
              })}
            </ol>
          </section>

          <section className="segment large">
            <Heading title="Featured" />

            <div className="highlight-preview">
              {posts.map((post, i) => {
                const title = post.frontmatter.title || post.fields.slug
                if (post.frontmatter.featured) {
                  return (
                    <div
                      className="muted card flex"
                      key={post.frontmatter.featured}
                    >
                      <img
                        src={featuredPostsThumbnail[i + 1]}
                        width="50"
                        height="50"
                      />

                      <div>
                        <time>{post.frontmatter.date}</time>
                        <Link className="card-header" to={post.fields.slug}>
                          {title}
                        </Link>
                      </div>
                    </div>
                  )
                }
              })}
            </div>
          </section>

          <section className="segment large">
            <Heading title="Projects" slug="/projects" />

            <div className="post-preview">
              {projectsList
                .filter(project => project.highlight)
                .map(project => {
                  return (
                    <div className="anchored card" key={project.slug}>
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
                      <div className="anchored links">
                        {project.writeup && (
                          <Link className="button" to={project.writeup}>
                            Article
                          </Link>
                        )}
                        <a className="button flex" href={project.url}>
                          Demo
                        </a>
                      </div>
                    </div>
                  )
                })}
            </div>
          </section>

          <section className="segment large">
            <Heading title="Newsletter" />
            <p>
              Sign up to get updates when I write something new. No spam ever.
            </p>
            <p>
              <a
                href="https://mujahidelmaki.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="button large highlighted"
              >
                Subscribe to the Newsletter
              </a>
            </p>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <SEO title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          featured
        }
      }
    }
  }
`

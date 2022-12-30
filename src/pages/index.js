import * as React from "react"
import { Link, graphql } from "gatsby"
import Helmet from "react-helmet"
import { Hero } from "../components/Hero"
import { Heading } from "../components/Heading"
import Bio from "../components/Bio"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import config from "../utils/config"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
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
            <Hero title="Hey, I'm Mujahid!" index>
              <p className="hero-description small width">
                Welcome to my digital garden.
                <br />
                <br />
                I'm a software developer in Waterloo, Ontario. I make
                <Link to="/projects"> open-source projects</Link> and{" "}
                <Link to="/blog">write</Link> about code, design, and life. I
                like playing the Piano, drawing, sci-fi, reading, and gaming.
              </p>
              <br />
              <p>
                <small className="text-muted">
                  <em> last updated: December 25th, 2022</em>
                </small>
              </p>
            </Hero>
            <div className="decoration">
              <img
                src="/logo.png"
                alt="MAKI KEYZ"
                className="image hero-image"
                title="RAM Ram"
              />
            </div>
          </div>
        </div>

        <div className="container">
          <section className="segment first">
            <Heading title="Latest Posts" slug="/blog" />

            <ol style={{ listStyle: `none` }}>
              {posts.map(post => {
                const title = post.frontmatter.title || post.fields.slug

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
              })}
            </ol>
          </section>

          <section className="segment large">
            <Heading title="Featured" />

            <div className="highlight-preview">
              {posts.map(post => {
                const title = post.frontmatter.title || post.fields.slug
                if (post.frontmatter.popular) {
                  return (
                    <div
                      className="muted card flex"
                      key={post.frontmatter.popular}
                    >
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
export const Head = () => <Seo title="All posts" />

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
          popular
        }
      }
    }
  }
`

import React, { useMemo } from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import config from "../utils/config"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Link } from "gatsby"
import { Heading } from "../components/Heading"
import Img from "gatsby-image"
const featuredPostsThumbnail = [".", "../codewars.png"]

export default function blog({ data }) {
  const posts = data.allMarkdownRemark.nodes
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout>
      <div className="container">
        <section className="segment first">
          <Heading title="Writing" />

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
          <Heading title="Highlights" />

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
    </Layout>
  )
}

export const blogQuery = graphql`
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

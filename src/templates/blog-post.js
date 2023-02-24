import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Comments from "../components/Commnets"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`
  const { title, date, displayDate, comments_off } = post.frontmatter
  return (
    <div>
      <Layout location={location} title={siteTitle}>
        <div className="container">
          <article
            className="blog-post"
            itemScope
            itemType="http://schema.org/Article"
          >
            <section
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />
            <hr />
            <footer></footer>
          </article>

          {!comments_off && (
            <section id="comments" className="segment comments">
              <h3>Comments</h3>
              <Comments issueTerm={post.fields.slug} />
            </section>
          )}
        </div>
      </Layout>
    </div>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <SEO
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        displayDate
        comments_off
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`

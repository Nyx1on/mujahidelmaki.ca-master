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
            <Heading title="Latests Posts" slug="/blog" />
            {/* <Posts data={simplifiedLatest} newspaper /> */}
          </section>

          <section className="segment large">
            <Heading title="Popular" />

            <div className="highlight-preview"></div>
          </section>
        </div>
      </div>
    </Layout>
    // <Layout location={location} title={siteTitle}>
    //   <Bio />
    //   <ol style={{ listStyle: `none` }}>
    //     {posts.map(post => {
    //       const title = post.frontmatter.title || post.fields.slug

    //       return (
    //         <li key={post.fields.slug}>
    //           <article
    //             className="post-list-item"
    //             itemScope
    //             itemType="http://schema.org/Article"
    //           >
    //             <header>
    //               <h2>
    //                 <Link to={post.fields.slug} itemProp="url">
    //                   <span itemProp="headline">{title}</span>
    //                 </Link>
    //               </h2>
    //               <small>{post.frontmatter.date}</small>
    //             </header>
    //             <section>
    //               <p
    //                 dangerouslySetInnerHTML={{
    //                   __html: post.frontmatter.description || post.excerpt,
    //                 }}
    //                 itemProp="description"
    //               />
    //             </section>
    //           </article>
    //         </li>
    //       )
    //     })}
    //   </ol>
    // </Layout>
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
        }
      }
    }
  }
`

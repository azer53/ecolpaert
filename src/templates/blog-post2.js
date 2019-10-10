import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulBlogPost
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div className="sm:max-w-4xl mx-auto py-10 p-8">
          <SEO title={post.title} description={post.title || post.title} />
          <p className="text-xs uppercase font-light tracking-widest">
            {post.publicationDate}
          </p>

          <h1 className="text-5xl tracking-wide font-normal mb-6">
            {post.title}
          </h1>
          <article className="py-6">
            <div
              dangerouslySetInnerHTML={{
                __html: post.test.childMarkdownRemark.html,
              }}
            />
          </article>
          <Bio />

          <ul className="flex justify-between">
            <li className="text-orange-700">
              {previous && (
                <Link to={previous.slug} rel="prev">
                  ← {previous.title}
                </Link>
              )}
            </li>
            <li className="text-orange-700">
              {" "}
              {next && (
                <Link to={next.slug} rel="next">
                  {next.title} →
                </Link>
              )}
            </li>
          </ul>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug2($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      publicationDate(formatString: "MMMM Do, YYYY")
      tags
      title
      slug
      test {
        childMarkdownRemark {
          html
        }
      }
      tags
    }
  }
`

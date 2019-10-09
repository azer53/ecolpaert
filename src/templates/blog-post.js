import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulBlogPost
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    const Bold = ({ children }) => (
      <span className="font-normal ">{children}</span>
    )

    const options = {
      renderMark: {
        [MARKS.BOLD]: text => <Bold>{text}</Bold>,
      },
      renderNode: {
        [BLOCKS.PARAGRAPH]: (post, children) => (
          <p className="mt-4 p-2 ">{children}</p>
        ),
        [BLOCKS.HEADING_1]: (post, children) => (
          <h1 className="font-medium text-4xl mt-4 py-2">{children}</h1>
        ),
        [BLOCKS.HEADING_2]: (post, children) => (
          <h2 className="font-medium text-3xl mt-4 py-2">{children}</h2>
        ),
        [BLOCKS.HEADING_3]: (post, children) => (
          <h3 className="font-medium text-2xl mt-4 py-2">{children}</h3>
        ),
        [BLOCKS.HEADING_4]: (post, children) => (
          <h4 className="font-medium text-xl mt-4 py-2">{children}</h4>
        ),
        [BLOCKS.QUOTE]: (post, children) => <q className="my-12">{children}</q>,
        [INLINES.HYPERLINK]: (post, children) => (
          <a
            href="/"
            className="text-indigo-700 font-semibold cursor-pointer border-b border-indigo-500"
          >
            {children}
          </a>
        ),
      },
    }
    const postContent = documentToReactComponents(post.body.json, options)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.title} description={post.title || post.title} />
        <h1>{post.title}</h1>
        <p>{post.publicationDate}</p>
        <article>{postContent}</article>
        <hr />
        <Bio />

        <ul>
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
      body {
        json
        body
      }
      tags
    }
  }
`

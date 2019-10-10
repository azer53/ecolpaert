import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tags from "../components/Tags"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Prism from "prismjs"

class BlogPostTemplate extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }

  render() {
    const post = this.props.data.contentfulBlogPost
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    const Bold = ({ children }) => (
      <span className="font-bold ">{children}</span>
    )
    const Underline = ({ children }) => (
      <span className="border-b border-gray-500">{children}</span>
    )

    const Code = ({ children }) => (
      <div className="gatsby-highlight" data-language="text">
        <pre className="language-javascript">
          <code className="language-javascript">{children}</code>
        </pre>
      </div>
    )

    const AssetBlock = ({ src, title }) => (
      <div>
        <img src={src} alt={title} />
      </div>
    )

    const options = {
      renderMark: {
        [MARKS.BOLD]: text => <Bold>{text}</Bold>,
        [MARKS.UNDERLINE]: text => <Underline>{text}</Underline>,
        [MARKS.CODE]: text => <Code>{text}</Code>,
      },
      renderNode: {
        [BLOCKS.PARAGRAPH]: (post, children) => (
          <section className="mt-4 p-2 leading-loose tracking-wide">
            {children}
          </section>
        ),
        [BLOCKS.HEADING_1]: (post, children) => (
          <h1 className="text-4xl tracking-wide font-normal mt-12">
            {children}
          </h1>
        ),
        [BLOCKS.HEADING_2]: (post, children) => (
          <h2 className="text-4xl tracking-wide font-normal mt-12">
            {children}
          </h2>
        ),
        [BLOCKS.HEADING_3]: (post, children) => (
          <h3 className="text-3xl tracking-wide font-normal mt-8">
            {children}
          </h3>
        ),
        [BLOCKS.HEADING_4]: (post, children) => (
          <h4 className="text-3xl tracking-wide font-normal mt-8">
            {children}
          </h4>
        ),
        [BLOCKS.EMBEDDED_ASSET]: node => {
          console.log(node)
          if (node.data.target.fields) {
            const { url, fileName } = node.data.target.fields.file["en-US"]
            return <AssetBlock src={url} title={fileName} />
          }
        },
        [BLOCKS.QUOTE]: (post, children) => (
          <div className="text-lg tracking-wide font-normal mb-6 italic bg-gray-100 rounded-lg p-2 text-gray-900">
            <div className="-m-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 475.082 475.081"
                className=" w-8"
              >
                <path d="M164.45 219.27h-63.954c-7.614 0-14.087-2.664-19.417-7.994-5.327-5.33-7.994-11.801-7.994-19.417v-9.132c0-20.177 7.139-37.401 21.416-51.678 14.276-14.272 31.503-21.411 51.678-21.411h18.271c4.948 0 9.229-1.809 12.847-5.424 3.616-3.617 5.424-7.898 5.424-12.847V54.819c0-4.948-1.809-9.233-5.424-12.85-3.617-3.612-7.898-5.424-12.847-5.424h-18.271c-19.797 0-38.684 3.858-56.673 11.563-17.987 7.71-33.545 18.132-46.68 31.267-13.134 13.129-23.553 28.688-31.262 46.677C3.855 144.039 0 162.931 0 182.726v200.991c0 15.235 5.327 28.171 15.986 38.834 10.66 10.657 23.606 15.985 38.832 15.985h109.639c15.225 0 28.167-5.328 38.828-15.985 10.657-10.663 15.987-23.599 15.987-38.834V274.088c0-15.232-5.33-28.168-15.994-38.832-10.656-10.656-23.603-15.986-38.828-15.986zM459.103 235.256c-10.656-10.656-23.599-15.986-38.828-15.986h-63.953c-7.61 0-14.089-2.664-19.41-7.994-5.332-5.33-7.994-11.801-7.994-19.417v-9.132c0-20.177 7.139-37.401 21.409-51.678 14.271-14.272 31.497-21.411 51.682-21.411h18.267c4.949 0 9.233-1.809 12.848-5.424 3.613-3.617 5.428-7.898 5.428-12.847V54.819c0-4.948-1.814-9.233-5.428-12.85-3.614-3.612-7.898-5.424-12.848-5.424h-18.267c-19.808 0-38.691 3.858-56.685 11.563-17.984 7.71-33.537 18.132-46.672 31.267-13.135 13.129-23.559 28.688-31.265 46.677-7.707 17.987-11.567 36.879-11.567 56.674v200.991c0 15.235 5.332 28.171 15.988 38.834 10.657 10.657 23.6 15.985 38.828 15.985h109.633c15.229 0 28.171-5.328 38.827-15.985 10.664-10.663 15.985-23.599 15.985-38.834V274.088c.001-15.233-5.321-28.168-15.978-38.832z" />
              </svg>
            </div>
            {children}
          </div>
        ),
        [INLINES.HYPERLINK]: node => {
          return (
            <a
              className="visited:text-orange-900 border-b-2 border-orange-500"
              href={node.data.uri}
            >
              {node.content[0].value}
            </a>
          )
        },
      },
    }
    const postContent = documentToReactComponents(post.body.json, options)

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
          <section className="m-1">
            <Tags tags={post.tags} />
          </section>
          <article className="py-6">{postContent}</article>
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
      }
      tags
    }
  }
`

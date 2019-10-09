import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCollection from "../components/PostCollection"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allContentfulBlogPost.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[
            `blog`,
            `gatsby`,
            `javascript`,
            `react`,
            `Eli`,
            `Colpaert`,
            `C/4`,
            `SAP`,
          ]}
        />
        <div className="sm:max-w-4xl mx-auto py-10 p-8">
          <h3 className="text-2xl uppercase tracking-wider font-thin text-gray-700">
            <span className="pb-2 border-b border-orange-500">
              Latest &nbsp;
            </span>
            Articles
          </h3>
          <PostCollection posts={posts} />
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publicationDate], order: DESC }) {
      edges {
        node {
          slug
          title
          publicationDate(formatString: "MMMM Do, YYYY")
          tags
        }
      }
    }
  }
`

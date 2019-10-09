import React, { Component } from "react"
import { Link } from "gatsby"
import Tags from "./Tags"

export default class PostCollection extends Component {
  render() {
    const posts = this.props.posts

    return (
      <div className="p-8 py-12">
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <div key={node.slug} className="py-12 border-gray-200 border-b">
              <p className="font-thin uppercase text-xs tracking-widest py-1">
                {node.publicationDate}
              </p>
              <h3 className="text-lg font-medium">
                <Link style={{ boxShadow: `none` }} to={node.slug}>
                  {title}
                </Link>
              </h3>

              <Tags tags={node.tags} />
            </div>
          )
        })}
      </div>
    )
  }
}

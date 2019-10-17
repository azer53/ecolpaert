/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social, description } = data.site.siteMetadata
        return (
          <div className="p-6 border-gray-300 border my-8 flex flex-col items-center">
            <div className="my-2">
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                className="rounded-full border-teal-500 border-4"
              />
            </div>
            <p>
              By&nbsp;
              <a href={`https://twitter.com/${social.twitter}`}>
                <strong>{author}</strong>
              </a>
            </p>
            <section className="w-1/2 mx-auto text-center">
              {description}
            </section>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/ec.jpeg/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        description
        social {
          twitter
        }
      }
    }
  }
`

export default Bio

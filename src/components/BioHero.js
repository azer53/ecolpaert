/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

function BioHero() {
  return (
    <StaticQuery
      query={bioHeroQuery}
      render={data => {
        const { author, description } = data.site.siteMetadata
        return (
          <div className="w-full mx-auto flex flex-col items-center">
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              className="rounded-full border-teal-500 border-2"
            />
            <h2 className="text-5xl font-medium my-6">Hi there!</h2>
            <p className="text-xl mb-6 w-64 text-center">{description}</p>
          </div>
        )
      }}
    />
  )
}

const bioHeroQuery = graphql`
  query BioHeroQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        description
      }
    }
  }
`

export default BioHero

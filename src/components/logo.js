import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

function Logo() {
  return (
    <StaticQuery
      query={logoQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <div>
            <Image fixed={data.avatar.childImageSharp.fixed} alt={author} />
          </div>
        )
      }}
    />
  )
}

const logoQuery = graphql`
  query LogoQuery {
    avatar: file(absolutePath: { regex: "/logo-favicon.png/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`

export default Logo

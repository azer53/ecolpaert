import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const CustomComponent = props => {
  const customComponentId = props.node.data.target.sys.id

  const { allContentfulCodeBlock } = useStaticQuery(
    graphql`
      query CustomComponentQuery {
        allContentfulCodeBlock {
          edges {
            node {
              name
              contentful_id
              language
              code {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
    `
  )

  function codeBlockEquals(node) {
    return customComponentId === "c" + node.node.contentful_id
  }

  const filteredBlock = allContentfulCodeBlock.edges.filter(codeBlockEquals)[0]
    .node

  return (
    <div
      className="mt-4 p-2"
      dangerouslySetInnerHTML={{
        __html: filteredBlock.code.childMarkdownRemark.html,
      }}
    ></div>
  )
}

export default CustomComponent

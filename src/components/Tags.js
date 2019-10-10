import React, { Component } from "react"

export default class Tags extends Component {
  render() {
    const tags = this.props.tags
    return (
      <ul className="flex mt-3">
        {tags.map(tag => (
          <li key={tag} className="text-orange-800 text-sm pr-4">
            #{tag}
          </li>
        ))}
      </ul>
    )
  }
}

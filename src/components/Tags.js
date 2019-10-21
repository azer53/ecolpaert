import React, { Component } from "react"

export default class Tags extends Component {
  render() {
    const tags = this.props.tags
    return (
      <ul className="flex flex-wrap mt-3">
        {tags.map(tag => (
          <li
            key={tag}
            className="bg-teal-100 text-teal-900 rounded-full px-2 py-1 text-sm mr-4 my-2 font-bold"
          >
            #{tag}
          </li>
        ))}
      </ul>
    )
  }
}

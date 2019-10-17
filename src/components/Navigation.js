import React, { Component } from "react"
import { Link } from "gatsby"

export default class Navigation extends Component {
  render() {
    return (
      <div className="w-full mx-auto flex flex-col items-start p-5">
        <Link
          className="text-lg text-gray-900 uppercase tracking-wider border-b-2 border-teal-200 hover:text-teal-800 hover:border-teal-600 font-light"
          to="/"
        >
          Home
        </Link>
      </div>
    )
  }
}

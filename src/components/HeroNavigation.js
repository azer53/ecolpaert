import React, { Component } from "react"
import { Link } from "gatsby"

export default class HeroNavigation extends Component {
  render() {
    return (
      <div className="w-full hero shadow">
        <div className="w-full mx-auto flex flex-col items-start p-5">
          <Link className="text-3xl" to="/">
            Home
          </Link>
        </div>
      </div>
    )
  }
}

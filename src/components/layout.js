import React from "react"
import { Link } from "gatsby"
import Logo from "../components/logo"
import "../css/global.css"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1>
          <Link to={`/`}>
            <Logo />
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link to={`/`}>
            <Logo />
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div className="antialiased text-gray-900 font-sans">
        <main className="">{children}</main>
        <footer className="bg-gray-900 text-gray-100">
          <div className="flex justify-between p-4">
            <div className="text-center"></div>
            <div className="text-center text-gray-100">
              Made By Eli Colpaert
            </div>
            <div className="text-center"></div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout

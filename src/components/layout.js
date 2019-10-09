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
        <div className="">
          <main className="">{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a> and{" "}
            <a href="https://www.netlify.com">Netlify</a>
          </footer>
        </div>
      </div>
    )
  }
}

export default Layout

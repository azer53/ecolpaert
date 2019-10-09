import React from "react"
import Hero from "../components/Hero"
import "../css/global.css"
import HeroNavigation from "./HeroNavigation"

class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = <Hero />
    } else {
      header = <HeroNavigation />
    }
    return (
      <div className="antialiased text-gray-900 font-sans">
        {header}
        <main className="">{children}</main>
        <footer className="bg-gray-900 text-gray-100">
          <div className="flex justify-between p-8">
            <div className="text-center"></div>
            <div className="text-center text-gray-300">
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

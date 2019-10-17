import React from "react"
import "../css/global.css"
import BioHero from "./BioHero"
import Navigation from "./Navigation"

class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div className="w-full hero py-12 shadow">
          <BioHero />
        </div>
      )
    } else {
      header = (
        <div className="w-full shadow">
          <Navigation />
        </div>
      )
    }
    return (
      <div className="antialiased text-gray-900 font-sans bg-gray-100">
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

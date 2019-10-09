import React, { Component } from "react"

export default class Hero extends Component {
  render() {
    return (
      <div className="w-full hero py-12 shadow">
        <div className="w-full mx-auto flex flex-col items-center">
          <img
            src="https://horace.netlify.com/assets/images/authorimage.jpg"
            alt=""
            className="rounded-full border-orange-500 border-4 w-40 h-40"
          />
          <h2 className="text-5xl font-medium my-6">Hi there!</h2>
          <p className="text-xl mb-6 w-64 text-center">
            Working at delaware, professional SAP C/4 enthusiast and quite
            passionate about new Open-Source technology.
          </p>
        </div>
      </div>
    )
  }
}

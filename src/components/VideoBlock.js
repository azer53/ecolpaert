import React, { Component } from "react"

export default class VideoBlock extends Component {
  render() {
    const src = this.props.src

    return (
      <video className="py-4 p-2" controls>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
  }
}

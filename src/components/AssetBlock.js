import React, { Component } from "react"

export default class AssetBlock extends Component {
  constructor(props) {
    super(props)
    this.myInput = React.createRef()
    this.title = this.props.title
    this.src = this.props.src
    this.containerWidth = 892
  }

  render() {
    return (
      <div className="py-4 p-2" ref={this.myInput}>
        <picture className="w-full">
          <source
            srcSet={this.src + "?fm=webp&fit=fill&w=" + this.containerWidth}
            type="image/webp"
          />
          <source
            srcSet={
              this.src +
              "?fm=jpg&fl=progressive&fit=fill&w=" +
              this.containerWidth
            }
            type="image/jpeg"
          />
          <img
            src={
              this.src +
              "?fm=jpg&fl=progressive&fit=fill&w=" +
              this.containerWidth
            }
            alt={this.title}
          />
        </picture>
      </div>
    )
  }
}

import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>{this.props.params.repoName}</h2>
        <h3 className="repoUser">{this.props.params.userName}</h3>
      </div>
    )
  }
})
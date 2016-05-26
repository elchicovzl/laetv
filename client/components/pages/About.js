import React, { Component } from 'react';
import { render } from 'react-dom'

class About extends Component {
  render() {
    const { userID, taskID } = this.props.params

    return (
      <div className="page">
        <h2>About us</h2>
      </div>
    )
  }
}
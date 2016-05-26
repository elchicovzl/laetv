import React from 'react';
import { render } from 'react-dom'

class News extends React.Component {
  render() {
    const { userID, taskID } = this.props.params

    return (
      <div className="page">
        <h2>News</h2>
      </div>
    )
  }
}
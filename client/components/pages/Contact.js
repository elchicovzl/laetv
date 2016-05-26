import React from 'react';

class Contact extends React.Component {
  render() {
    const { userID, taskID } = this.props.params

    return (
      <div className="page">
        <h2>Contact</h2>
      </div>
    )
  }
}
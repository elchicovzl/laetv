import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, Link, Redirect } from 'react-router';
import App from './components/App/App.js';
// ReactDOM.render(<App />, document.getElementById('root'));


class About extends React.Component {
  render() {
    const { userID, taskID } = this.props.params

    return (
      <div className="page">
        <h2>About us</h2>
      </div>
    )
  }
}

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


ReactDOM.render((
  <Router history={browserHistory}>
      <Route path="/laetv" component={App}>
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/contact" component={Contact} />
      </Route>
  </Router>
), document.getElementById('root'))	


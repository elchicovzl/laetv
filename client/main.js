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

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente amet qui quidem inventore, delectus debitis recusandae cumque, neque id nemo ab vero mollitia, perferendis similique nesciunt. Id, at nesciunt autem.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente amet qui quidem inventore, delectus debitis recusandae cumque, neque id nemo ab vero mollitia, perferendis similique nesciunt. Id, at nesciunt autem.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente amet qui quidem inventore, delectus debitis recusandae cumque, neque id nemo ab vero mollitia, perferendis similique nesciunt. Id, at nesciunt autem.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente amet qui quidem inventore, delectus debitis recusandae cumque, neque id nemo ab vero mollitia, perferendis similique nesciunt. Id, at nesciunt autem.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente amet qui quidem inventore, delectus debitis recusandae cumque, neque id nemo ab vero mollitia, perferendis similique nesciunt. Id, at nesciunt autem.</p>
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

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente amet qui quidem inventore, delectus debitis recusandae cumque, neque id nemo ab vero mollitia, perferendis similique nesciunt. Id, at nesciunt autem.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente amet qui quidem inventore, delectus debitis recusandae cumque, neque id nemo ab vero mollitia, perferendis similique nesciunt. Id, at nesciunt autem.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente amet qui quidem inventore, delectus debitis recusandae cumque, neque id nemo ab vero mollitia, perferendis similique nesciunt. Id, at nesciunt autem.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente amet qui quidem inventore, delectus debitis recusandae cumque, neque id nemo ab vero mollitia, perferendis similique nesciunt. Id, at nesciunt autem.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente amet qui quidem inventore, delectus debitis recusandae cumque, neque id nemo ab vero mollitia, perferendis similique nesciunt. Id, at nesciunt autem.</p>
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

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente amet qui quidem inventore, delectus debitis recusandae cumque, neque id nemo ab vero mollitia, perferendis similique nesciunt. Id, at nesciunt autem.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente amet qui quidem inventore, delectus debitis recusandae cumque, neque id nemo ab vero mollitia, perferendis similique nesciunt. Id, at nesciunt autem.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente amet qui quidem inventore, delectus debitis recusandae cumque, neque id nemo ab vero mollitia, perferendis similique nesciunt. Id, at nesciunt autem.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente amet qui quidem inventore, delectus debitis recusandae cumque, neque id nemo ab vero mollitia, perferendis similique nesciunt. Id, at nesciunt autem.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente amet qui quidem inventore, delectus debitis recusandae cumque, neque id nemo ab vero mollitia, perferendis similique nesciunt. Id, at nesciunt autem.</p>
      
      </div>
    )
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
      <Route path="/laetv" component={App}>
          <Route path="/laetv/about" component={About} />
          <Route path="/laetv/news" component={News}  />
          <Route path="/laetv/contact" component={Contact}  />
      </Route>
  </Router>
), document.getElementById('root'))	


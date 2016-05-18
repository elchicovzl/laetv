import React from 'react';
import bootstrapStyles from '../../styles/app.scss';
import styles from './App.css';

export default class App extends React.Component {
  
  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <h1 className="display-4">Welcome Laetv.tv development!</h1>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus obcaecati, numquam iste, quo corporis nobis ad sunt magnam aut itaque, totam distinctio dolorum aliquid. Fuga labore consequatur odio laboriosam voluptas?</p>
          <hr className="m-y-2" />
          <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" role="button">is a button</a>
          </p>
        </div>
      </div>
    );
  }
}
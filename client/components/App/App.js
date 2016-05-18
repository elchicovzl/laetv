import React from 'react';
import bootstrapStyles from '../../styles/app.scss';
import styles from './App.css';
import "../../../node_modules/font-awesome/scss/font-awesome.scss";
// import images from '../../images/';


export default class App extends React.Component {
  
  render() {
    return (
      <div className="container-fluid">
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="row">
          <div className="col-md-8">

            <div className="row">
              <div className="col-md-11">
              <img src={require('../../images/logo_espn1.png')} className="img-fluid" style={{width:'500px', height:'100px'}}/>
              </div>
              <div className="col-md-1">
                <ul style={{fontSize:'20px'}} >
                  <li><a href="#"><i className="fa fa-facebook-official"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
                  <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                </ul>
              </div>
            </div>

            <div className="row">
              <div className="col-md-11">
                <nav className="navbar navbar-light bg-faded" style={{fontSize:'12px'}}>
                  <ul className="nav navbar-nav">
                    <li className="nav-item active" style={{marginLeft:'40px'}}>
                      <a className="nav-link font-weight-bold" href="#">WHO WE ARE <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item" style={{marginLeft:'40px'}}>
                      <a className="nav-link font-weight-bold" href="#">ABOUT US</a>
                    </li>
                    <li className="nav-item" style={{marginLeft:'40px'}}>
                      <a className="nav-link font-weight-bold" href="#">NEWS</a>
                    </li>
                    <li className="nav-item" style={{marginLeft:'40px'}}>
                      <a className="nav-link font-weight-bold" href="#">CONTACT</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <img src={require('../../images/video.jpg')} className="img-fluid" style={{height:'700px'}}/>
              </div>
            </div>
            
            <br/>
            <div className="row">
              <div className="col-md-2">
              <img src={require('../../images/beinlogo_300.jpg')} className="img-fluid img-rounded channel-img" />
            </div>
              <div className="col-md-10" style={{borderLeft: '1px solid'}}>
                <p style={{paddingTop: '10px'}} >Rathed the best sport programing network in the US</p>
              </div>
            </div>
            
            <br/>
            <br/>
            <div className="row">
              <div className="col-md-8">
                <h2><a href="#" >Latin American Ethnic TV is a the largest Hispanic media sales rep in the United States.</a></h2>
              </div>
            </div>

            <div className="row">
              <div className="col-md-8">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, a quos laudantium non amet. Nemo quis cupiditate culpa maiores esse aperiam ex natus sunt illo est? Corporis similique, itaque eaque!</p>
              </div>
            </div>
           
          </div>
          <div className="col-md-4">
            <div className="col-md-6">
              <img src={require('../../images/Logo_canal_caracol.jpg')} className="img-fluid img-rounded channel-img" style={{width: '150px', height: '100px'}} />
            </div>
            <div className="col-md-6">
              <img src={require('../../images/beinlogo_300.jpg')} className="img-fluid img-rounded channel-img" style={{width: '150px', height: '100px'}} />
            </div>
            <div className="col-md-6">
              <img src={require('../../images/logo_sur.jpg')} className="img-fluid img-rounded channel-img" style={{width: '150px', height: '100px', marginTop: '5px'}} />
            </div>
            <div className="col-md-6">
              <img src={require('../../images/holatv.jpg')} className="img-fluid img-rounded channel-img" style={{width: '150px', height: '100px', marginTop: '5px'}} />
            </div>
            <div className="col-md-6">
              <img src={require('../../images/logo_surperu.jpg')} className="img-fluid img-rounded channel-img" style={{width: '150px', height: '100px', marginTop: '5px'}} />
            </div>
            <div className="col-md-6">
              <img src={require('../../images/rcn.png')} className="img-fluid img-rounded" style={{width: '150px', height: '100px', marginTop: '5px'}} />
            </div>
            <div className="col-md-6">
              <img src={require('../../images/TVChile_logo.png')} className="img-fluid img-rounded" style={{width: '150px', height: '100px', marginTop: '5px'}} />
            </div>
            <div className="col-md-6">
              <img src={require('../../images/telefe-logo.jpg')} className="img-fluid img-rounded" style={{width: '150px', height: '100px', marginTop: '5px'}} />
            </div>
            <div className="col-md-6">
              <img src={require('../../images/tvclatino.jpg')} className="img-fluid img-rounded" style={{width: '150px', height: '100px', marginTop: '5px'}} />
            </div>
            <div className="col-md-6">
              <img src={require('../../images/cine-latino.jpg')} className="img-fluid img-rounded" style={{width: '150px', height: '100px', marginTop: '5px'}} />
            </div>
            <div className="col-md-6">
              <img src={require('../../images/tvcdeportes.jpg')} className="img-fluid img-rounded" style={{width: '150px', height: '100px', marginTop: '5px'}} />
            </div>
            <div className="col-md-6">
              <img src={require('../../images/beinlogo_300.jpg')} className="img-fluid img-rounded" style={{width: '150px', height: '100px', marginTop: '5px'}} />
            </div>
            <div className="col-md-6">
              <img src={require('../../images/TVChile_logo.png')} className="img-fluid img-rounded" style={{width: '150px', height: '100px', marginTop: '5px'}} />
            </div>
            <div className="col-md-6">
              <img src={require('../../images/logo_surperu.jpg')} className="img-fluid img-rounded channel-img" style={{width: '150px', height: '100px', marginTop: '5px'}} />
            </div>
             <div className="col-md-6">
              <img src={require('../../images/azteca-logo.jpg')} className="img-fluid img-rounded channel-img" style={{width: '150px', height: '100px', marginTop: '5px'}} />
            </div>
            <div className="col-md-6">
              <img src={require('../../images/holatv.jpg')} className="img-fluid img-rounded channel-img" style={{width: '150px', height: '100px', marginTop: '5px'}} />
            </div>
            <div className="col-md-6">
              <img src={require('../../images/telefe-logo.jpg')} className="img-fluid img-rounded" style={{width: '150px', height: '100px', marginTop: '5px'}} />
            </div>
            <div className="col-md-6">
              <img src={require('../../images/Logo_canal_caracol.jpg')} className="img-fluid img-rounded channel-img" style={{width: '150px', height: '100px', marginTop: '5px'}} />
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}
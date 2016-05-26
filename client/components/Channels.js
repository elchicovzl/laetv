import React from 'react';
import { Link } from 'react-router'

export default class Channels extends React.Component {

	constructor(props) {
        super(props);
        console.log(props);
         this.state = {
         	video : null
         }
    }

    cambiando(videoId) {
	    this.props.callbackParent(videoId);
    }

	render() {

		return (
			<div>
				<div className="col-md-6 boton">
              		
					<Link to="/" onClick={this.cambiando.bind(this, "video1")} id="video1"><img src={require('../images/Logo_canal_caracol.jpg')}  className="img-fluid img-rounded channel-img" style={{width: '150px', height: '100px'}} /></Link>            	
            	</div>
				<div className="col-md-6 boton">
              		<Link to="/" onClick={this.cambiando.bind(this, "video2")} id="video2"> <img src={require('../images/beinlogo_300.jpg')}  className="img-fluid img-rounded channel-img" style={{width: '150px', height: '100px'}} /></Link>
            	</div>
	            <div className="col-md-6 boton">
	              <Link to="/" onClick={this.cambiando.bind(this, "video3")} id="video3"> <img  src={require('../images/beinlogo_300.jpg')} className="img-fluid img-rounded channel-img" style={{width: '150px', height: '100px'}} /></Link>
	            </div>
	            <div className="col-md-6 boton">
	              <Link to="/" onClick={this.cambiando.bind(this, "video4")} id="video4"> <img  src={require('../images/logo_sur.jpg')} className="img-fluid img-rounded channel-img" style={{width: '150px', height: '100px', marginTop: '5px'}} /></Link>
	            </div>
	            <div className="col-md-6 boton">
	              <Link to="/" onClick={this.cambiando.bind(this, "video5")} id="video5"> <img  src={require('../images/holatv.jpg')} className="img-fluid img-rounded channel-img" style={{width: '150px', height: '100px', marginTop: '5px'}} /></Link>
	            </div>
	            <div className="col-md-6 boton">
	              <Link to="/" onClick={this.cambiando.bind(this, "video6")} id="video6"> <img  src={require('../images/logo_surperu.jpg')} className="img-fluid img-rounded channel-img" style={{width: '150px', height: '100px', marginTop: '5px'}} /></Link>
	            </div>
	            <div className="col-md-6 boton">
	              <Link to="/" onClick={this.cambiando.bind(this, "video7")} id="video7"> <img  src={require('../images/rcn.png')} className="img-fluid img-rounded" style={{width: '150px', height: '100px', marginTop: '5px'}} /></Link>
	            </div>
	            <div className="col-md-6 boton">
	              <Link to="/" onClick={this.cambiando.bind(this, "video8")} id="video8"> <img  src={require('../images/TVChile_logo.png')} className="img-fluid img-rounded" style={{width: '150px', height: '100px', marginTop: '5px'}} /></Link>
	            </div>
	            <div className="col-md-6 boton">
	              <Link to="/" onClick={this.cambiando.bind(this, "video9")} id="video9"> <img  src={require('../images/telefe-logo.jpg')} className="img-fluid img-rounded" style={{width: '150px', height: '100px', marginTop: '5px'}} /></Link>
	            </div>
	            <div className="col-md-6 boton">
	              <Link to="/" onClick={this.cambiando.bind(this, "video10")} id="video10"> <img  src={require('../images/tvclatino.jpg')} className="img-fluid img-rounded" style={{width: '150px', height: '100px', marginTop: '5px'}} /></Link>
	            </div>
	            <div className="col-md-6 boton">
	              <Link to="/" onClick={this.cambiando.bind(this, "video11")} id="video11"> <img  src={require('../images/cine-latino.jpg')} className="img-fluid img-rounded" style={{width: '150px', height: '100px', marginTop: '5px'}} /></Link>
	            </div>
	            <div className="col-md-6 boton">
	              <Link to="/" onClick={this.cambiando.bind(this, "video12")} id="video12"> <img  src={require('../images/tvcdeportes.jpg')} className="img-fluid img-rounded" style={{width: '150px', height: '100px', marginTop: '5px'}} /></Link>
	            </div>
	            <div className="col-md-6 boton">
	              <Link to="/" onClick={this.cambiando.bind(this, "video13")} id="video13"> <img  src={require('../images/beinlogo_300.jpg')} className="img-fluid img-rounded" style={{width: '150px', height: '100px', marginTop: '5px'}} /></Link>
	            </div>
	            <div className="col-md-6 boton">
	              <Link to="/" onClick={this.cambiando.bind(this, "video14")} id="video14"> <img  src={require('../images/TVChile_logo.png')} className="img-fluid img-rounded" style={{width: '150px', height: '100px', marginTop: '5px'}} /></Link>
	            </div>
	            <div className="col-md-6 boton">
	              <Link to="/" onClick={this.cambiando.bind(this, "video15")} id="video15"> <img  src={require('../images/logo_surperu.jpg')} className="img-fluid img-rounded channel-img" style={{width: '150px', height: '100px', marginTop: '5px'}} /></Link>
	            </div>
	             <div className="col-md-6 boton">
	              <Link to="/" onClick={this.cambiando.bind(this, "video16")} id="video16"> <img  src={require('../images/azteca-logo.jpg')} className="img-fluid img-rounded channel-img" style={{width: '150px', height: '100px', marginTop: '5px'}} /></Link>
	            </div>
	            <div className="col-md-6 boton">
	              <Link to="/" onClick={this.cambiando.bind(this, "video17")} id="video17"> <img  src={require('../images/holatv.jpg')} className="img-fluid img-rounded channel-img" style={{width: '150px', height: '100px', marginTop: '5px'}} /></Link>
	            </div>
	            <div className="col-md-6 boton">
	              <Link to="/" onClick={this.cambiando.bind(this, "video18")} id="video18"> <img  src={require('../images/telefe-logo.jpg')} className="img-fluid img-rounded" style={{width: '150px', height: '100px', marginTop: '5px'}} /></Link>
	            </div>
	            <div className="col-md-6 boton">
	              <Link to="/" onClick={this.cambiando.bind(this, "video19")} id="video19"> <img  src={require('../images/Logo_canal_caracol.jpg')} className="img-fluid img-rounded channel-img" style={{width: '150px', height: '100px', marginTop: '5px'}} /></Link>
	            </div>
	            <div className="col-md-6 boton">
	              <Link to="/" onClick={this.cambiando.bind(this, "video20")} id="video20"> <img  src={require('../images/TVChile_logo.png')} className="img-fluid img-rounded" style={{width: '150px', height: '100px', marginTop: '5px'}} /></Link>
	            </div>
			</div>
		)
	}

}
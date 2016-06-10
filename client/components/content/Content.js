import React from 'react';
import Ads from './Ads';
import Article from './Article';
import { render } from 'react-dom'
import Video from 'react-html5video';
import classNames from 'classnames';


export default class Content extends React.Component {
	
	constructor(props) {
    	super(props);
    	this.state = {
    		taba : true,
    		tabb : false,
    		tabc : false,
    		tabd : false,
    		descriptionActivate: false,
    		defaultVid : this.props.defaultVid,
    	}
  	}

  	reloadVideo() {
        // When changing a HTML5 video, you have to reload it.
        this.refs.video.load();
        this.refs.video.play();
    } 

    toggleChannels() {
    	this.setState({descriptionActivate:true});
	    this.props.callbackToggle();
    }

    changeDefaultView() {

    	this.props.callbackDefaultView();
    }

    tabDesc(tab) {

    	if(tab == 'tab_a') this.setState({ taba : true, tabb : false, tabc : false, tabd : false, descriptionActivate:true });
    	if(tab == 'tab_b') this.setState({ tabb : true, taba : false, tabc : false, tabd : false, descriptionActivate:true });
    	if(tab == 'tab_c') this.setState({ tabc : true, taba : false, tabb : false, tabd : false, descriptionActivate:true });
    	if(tab == 'tab_d') this.setState({ tabd : true, taba : false, tabb : false, tabc : false, descriptionActivate:true });
    }


    shouldComponentUpdate(newProps, newState) {
    	console.log("updateee...");

    	if(newProps.video !== this.props.video)
    		this.reloadVideo();

    	return true;
    }
	
	render() {

		var view       = null;
		var adsMobile  = null;
		var articleMobile = null;

		var tabaClass = classNames('tab-pane', {
	      'active': this.state.taba
	    });

	    var tabbClass = classNames('tab-pane', {
	      'active': this.state.tabb
	    });

	    var tabcClass = classNames('tab-pane', {
	      'active': this.state.tabc
	    });

	    var tabdClass = classNames('tab-pane', {
	      'active': this.state.tabd
	    });

		if(!this.props.defaultVid && this.props.article) {
			
			
			adsMobile = (<div className="row adsMobile no-gutter">
							<div className="col-md-9 col-xs-9">
								<img src={this.props.article.logo} className="img-fluid" />
							</div>
							<div className="col-md-3 col-xs-3 moreChannels" id="showLeft" onClick={this.toggleChannels.bind(this)}>
								<center><i className="fa fa-bars" aria-hidden="true"></i></center>
								<center><p>More channels</p></center>
							</div>
						</div>);

			
			articleMobile = (
				<div className="row articleMobile">
					<ul className="nav nav-pills">
						<li className="active"><span onClick={this.tabDesc.bind(this, 'tab_a')}>OVERALL DESCRIPTION</span></li>
						<li><span onClick={this.tabDesc.bind(this, 'tab_b')}>KEY PROGRAMS</span></li>
						<li><span onClick={this.tabDesc.bind(this, 'tab_c')}>TRAFFIC MATERIAL INSTRUCTIONS</span></li>
						<li><span onClick={this.tabDesc.bind(this, 'tab_d')}>VIEW PROGRAMMING GRID</span></li>
					</ul>
					<div className="tab-content">
						 <div className={tabaClass} ref="tab_a">
				            <p>{this.props.article.description.overalDesc}</p>
				        </div>
				        <div className={tabbClass} ref="tab_b">
				            <p>{this.props.article.description.keyPrograms}</p>
				        </div>
				        <div className={tabcClass} ref="tab_c">
				            <p>{this.props.article.description.trafficMT}</p>
				        </div>
				        <div className={tabdClass} ref="tab_d">
				            <p>{this.props.article.description.viewProgGrid}</p>
				        </div>
					</div>
				</div>
			);
		}

		if(this.props.content) {

			if(this.props.channelsView)
				this.changeDefaultView();

			view = this.props.content;
		}else {
			var logos = '';
			if(this.props.article) {
				logos = this.props.article.logo;
			}else {
				logos = require('../../images/beinlogo_300.jpg');
			}
			
			view = [	adsMobile,
						<div className="row">
							<Video controls autoPlay loop muted width="100%" ref="video">
					            <source src={this.props.video} type="video/mp4" />
					           
					        </Video>
	                    </div>,
	                    articleMobile,
	                    
	                    <br/>,
	                    <Ads logo={logos} />,
	                    
	                    <br/>,
	                    <br/>,
	                    <Article  />,
					]
		}

		return (
				<div className="contentView">
					{view}
	            </div>
				
		)
	}

	 

}
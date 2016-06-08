import React from 'react';
import Ads from './Ads';
import Article from './Article';
import { render } from 'react-dom'
import Video from 'react-html5video';


export default class Content extends React.Component {
	
	constructor(props) {
    	super(props);
  	}

  	reloadVideo() {
        // When changing a HTML5 video, you have to reload it.
        this.refs.video.load();
        this.refs.video.play();
    } 
	
	render() {

		var view       = null;
		var adsMobile  = null;
		var articleMobile = null;

		console.log(this.props);

		if(!this.props.defaultVid) {
			this.reloadVideo();
			
			adsMobile = (<div className="row adsMobile no-gutter">
							<div className="col-md-9 col-xs-9">
								<img src={require('../../images/beinlogo_300.jpg')} className="img-fluid" />
							</div>
							<div className="col-md-3 col-xs-3 moreChannels">
								<center><i className="fa fa-bars" aria-hidden="true"></i></center>
								<center><p>More channels</p></center>
							</div>
						</div>);

			articleMobile = (<div className="row articleMobile">
								<ul className="nav nav-pills">
									<li className="active"><a href="#tab_a">OVERALL DESCRIPTION</a></li>
									<li><a href="#tab_b">KEY PROGRAMS</a></li>
									<li><a href="#tab_c">TRAFFIC MATERIAL INSTRUCTIONS</a></li>
									<li><a href="#tab_d">VIEW PROGRAMMING GRID</a></li>
								</ul>
								<div className="tab-content">
									 <div className="tab-pane active" id="tab_a">
							            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque repellendus deserunt quis perferendis distinctio hic rerum voluptatum, veritatis! Eos ut eum, temporibus possimus perspiciatis et eaque voluptates modi magnam excepturi.</p>
							            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque repellendus deserunt quis perferendis distinctio hic rerum voluptatum, veritatis! Eos ut eum, temporibus possimus perspiciatis et eaque voluptates modi magnam excepturi.</p>
							        	
							        </div>
							        <div className="tab-pane" id="tab_b">
							            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque repellendus deserunt quis perferendis distinctio hic rerum voluptatum, veritatis! Eos ut eum, temporibus possimus perspiciatis et eaque voluptates modi magnam excepturi.</p>
							            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque repellendus deserunt quis perferendis distinctio hic rerum voluptatum, veritatis! Eos ut eum, temporibus possimus perspiciatis et eaque voluptates modi magnam excepturi.</p>
							        	
							        </div>
							        <div className="tab-pane" id="tab_c">
							            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque repellendus deserunt quis perferendis distinctio hic rerum voluptatum, veritatis! Eos ut eum, temporibus possimus perspiciatis et eaque voluptates modi magnam excepturi.</p>
							            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque repellendus deserunt quis perferendis distinctio hic rerum voluptatum, veritatis! Eos ut eum, temporibus possimus perspiciatis et eaque voluptates modi magnam excepturi.</p>
							        	
							        </div>
							        <div className="tab-pane" id="tab_d">
							            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque repellendus deserunt quis perferendis distinctio hic rerum voluptatum, veritatis! Eos ut eum, temporibus possimus perspiciatis et eaque voluptates modi magnam excepturi.</p>
							            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque repellendus deserunt quis perferendis distinctio hic rerum voluptatum, veritatis! Eos ut eum, temporibus possimus perspiciatis et eaque voluptates modi magnam excepturi.</p>
							        	
							        </div>
								</div>
							</div>);


		}

		if(this.props.content) {
			view = this.props.content;
		}else {
			view = [	adsMobile,
						<div className="row">
							<Video controls autoPlay loop muted width="100%" ref="video">
					            <source src={this.props.video} type="video/mp4" />
					           
					        </Video>
	                    </div>,
	                    articleMobile,
	                    
	                    <br/>,
	                    <Ads />,
	                    
	                    <br/>,
	                    <br/>,
	                    <Article  />,
					]
		}

		console.log("video set");
		
		return (
				<div className="contentView">
					{view}
	            </div>
				
		)
	}

	 

}
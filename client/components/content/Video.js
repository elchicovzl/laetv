import React from 'react';
import ReactPlayer from 'react-player'
import Video from 'react-html5video';

export default class Videor extends React.Component {
	constructor(props) {
        super(props)
        console.log(this.props.video);   
    }

	render() {
		


		return (
			<div className="row">
				<Video controls autoPlay loop muted width="100%">
		            <source src={this.props.video} type="video/mp4" />
		           
		        </Video>
            </div>
		
		)
	
	}

}
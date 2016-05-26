import React from 'react';
import ReactPlayer from 'react-player'

export default class Video extends React.Component {
	constructor(props) {
        super(props)
    }

	render() {
		
		return (
			<div>
				<div className="col-md-12 col-xs-6 video">
                	 <ReactPlayer url={this.props.video} playing={true} height={450} />
                </div>
			</div>
		)
	}

}
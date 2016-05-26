import React from 'react';
import Video from './Video';
import Ads from './Ads';
import Article from './Article';
import { render } from 'react-dom'


export default class Content extends React.Component {
	
	constructor(props) {
    	super(props);
    	console.log(props)
  	} 
	
	render() {

		var view = null;

		if(this.props.content) {
			view = this.props.content;
		}else {
			view = [
						<div className="row">
	                        <Video video={this.props.video} />
	                    </div>,
	                    
	                    <br/>,
	                    <Ads />,
	                    
	                    <br/>,
	                    <br/>,
	                    <Article  />,
					]
		}
		
		return (
				<div>
					{view}
	            </div>
				
		)
	}

}
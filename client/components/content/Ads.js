import React from 'react';

export default class Ads extends React.Component {

	render() {
		return (
			<div className="adsView">
				<div className="row">
	            	<div className="col-md-2">
	              		<img src={require('../../images/beinlogo_300.jpg')} className="img-fluid img-rounded channel-img" />
	            	</div>
	                <div className="col-md-10" style={{borderLeft: '1px solid'}}>
	                	<p style={{paddingTop: '10px'}}> Rathed the best sport programing network in the US</p>
	              	</div>
	            </div>
			</div>
		)
	}

}
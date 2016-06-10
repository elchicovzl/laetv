import React from 'react';

export default class Logo extends React.Component {

	render() {
		return (
			<div className="logo">
				<img src={require('../../images/logo-laetv.png')} className="img-fluid"/>
			</div>
		)
	}

}
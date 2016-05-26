import React from 'react';

export default class SocialButtons extends React.Component {

	render() {
		return (
			<div>
				<ul style={{fontSize:'20px'}} >
                  <li><a href="#"><i className="fa fa-facebook-official"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
                  <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                </ul>
			</div>
		)
	}
}
import React from 'react';
import Logo from './Logo';
import SocialBtn from './SocialButtons';
import Nav from './Nav';

export default class Header extends React.Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-md-11">
						<Logo />
					</div>
					<div className="col-md-1">
						<SocialBtn />
					</div>
				</div>

				<div className="row">
					<div className="col-md-11">
						<Nav />
					</div>
				</div>
			</div>
		)
	}
}

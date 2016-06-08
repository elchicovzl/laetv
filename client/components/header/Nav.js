import React from 'react';
import { Link } from 'react-router'

export default class Nav extends React.Component {

	render() {
		return (
			<div className="menuNav">
				<nav className="navbar navbar-light bg-faded">
                  <ul className="nav navbar-nav">
                    <li className="nav-item active">
                      <Link to="/laetv" className="nav-link font-weight-bold" activeClassName="active">WHO WE ARE</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/laetv/about" className="nav-link font-weight-bold" activeClassName="active">ABOUT US</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/laetv/news" className="nav-link font-weight-bold" activeClassName="active">NEWS</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/laetv/contact" className="nav-link font-weight-bold" activeClassName="active">CONTACT</Link>
                    </li>
                    <li className="nav-item login">
                      <Link to="#" className="nav-link font-weight-bold" activeClassName="active">CLIENT LOGIN</Link>
                    </li>
                  </ul>
                </nav>
			</div>
		)
	}

}
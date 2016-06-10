import React from 'react';
import { Link } from 'react-router'

export default class Nav extends React.Component {

	render() {
		return (
			<div className="menuNav">
				<nav className="navbar navbar-light bg-faded">
                  <ul className="nav navbar-nav">
                    <li className="nav-item active">
                      <center><Link to="/laetv/" className="nav-link font-weight-bold" activeClassName="active">WHO WE ARE</Link></center>
                    </li>
                    <li className="nav-item">
                      <center><Link to="/laetv/about" className="nav-link font-weight-bold" activeClassName="active">ABOUT US</Link></center>
                    </li>
                    <li className="nav-item">
                      <center><Link to="/laetv/news" className="nav-link font-weight-bold" activeClassName="active">NEWS</Link></center>
                    </li>
                    <li className="nav-item">
                      <center><Link to="/laetv/contact" className="nav-link font-weight-bold" activeClassName="active">CONTACT</Link></center>
                    </li>
                    <li className="nav-item login">
                      <center><Link to="#" className="nav-link font-weight-bold" activeClassName="active">CLIENT LOGIN</Link></center>
                    </li>
                  </ul>
                </nav>
			</div>
		)
	}

}
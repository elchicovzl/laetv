import React from 'react';
import { Link } from 'react-router'

export default class Nav extends React.Component {

	render() {
		return (
			<div>
				<nav className="navbar navbar-light bg-faded" style={{fontSize:'12px'}}>
                  <ul className="nav navbar-nav">
                    <li className="nav-item active" style={{marginLeft:'40px'}}>
                      <Link to="/" className="nav-link font-weight-bold" activeClassName="active">WHO WE ARE</Link>
                    </li>
                    <li className="nav-item" style={{marginLeft:'40px'}}>
                    <Link to="/about" className="nav-link font-weight-bold" activeClassName="active">ABOUT US</Link>
                    </li>
                    <li className="nav-item" style={{marginLeft:'40px'}}>
                      <Link to="/news" className="nav-link font-weight-bold" activeClassName="active">NEWS</Link>
                    </li>
                    <li className="nav-item" style={{marginLeft:'40px'}}>
                      <Link to="/contact" className="nav-link font-weight-bold" activeClassName="active">CONTACT</Link>
                    </li>
                  </ul>
                </nav>
			</div>
		)
	}

}
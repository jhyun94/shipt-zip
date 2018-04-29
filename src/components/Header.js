import React from 'react';

import logo from '../images/logo.svg';

const Header = () => {

	return (
		<div className="navbar">
			<div className="container">
				<a href="/" className="navbar-brand"><img src={logo} alt="logo"/></a>
				<a className="btn btn-primary" href="/">Sign Up</a>
			</div>
		</div>
	)

}


export default Header;
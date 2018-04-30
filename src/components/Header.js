import React from 'react';

import logo from '../images/logo.svg';

const Header = () => {

	return (
		<div className="navbar border-bottom py-3">
			<div className="container">
				<a href="/" className="navbar-brand"><img src={logo} alt="logo"/></a>
				<ul className="list-unstyled mb-0">
					<li><a className="btn btn-primary btn-lg" href="/">SIGN UP</a></li>
				</ul>
			</div>
		</div>
	)

}


export default Header;
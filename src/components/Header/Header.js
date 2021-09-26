import React from 'react';
import './Header.css';
import logo from '../../logo-white.svg';

const Header = () => {
	return (
		<header className="text-center">
			<div className="top-bar p-base">
				<img src={logo} alt="Logo" className="logo" />
				<h1 className="title-main">Fund for Environment</h1>
			</div>
			<div className="description p-base">
				<p>We are raising a fund with the help of some great philanthropists to protect the environment. <br /> It's now or never.</p>
				<h2>Projected Fund: <span>5 million</span></h2>
			</div>
		</header>
	);
};

export default Header;
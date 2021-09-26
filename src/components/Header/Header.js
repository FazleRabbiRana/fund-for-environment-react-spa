import React from 'react';
import './Header.css';
import logo from '../../logo-white.svg';

const Header = () => {
	return (
		<header>
			<div className="top-bar p-base">
				<img src={logo} alt="Logo" className="logo" />
				<h1 className="title-main">Fund for Environment</h1>
			</div>
			<div className="p-base">
				<p>Building a strong resistance to protect the environment before it is too late. Let's secure the future for the next generations.</p>
				<p>We are raising a fund with the help of some great philanthropists to protect the environment.</p>
				<h2>Projected Fund: <span>5 million</span></h2>
			</div>
			<div className="fund-amount">
				
			</div>
		</header>
	);
};

export default Header;
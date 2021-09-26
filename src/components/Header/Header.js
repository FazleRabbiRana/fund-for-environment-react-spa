import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<header className="p-base">
			<h1>Fundraising for Environment</h1>
			<p>Building a strong resistance to protect the environment before it is too late. Let's secure the future for the next generations.</p>
			<h2>Projected Fund: <span>5 million</span></h2>
		</header>
	);
};

export default Header;
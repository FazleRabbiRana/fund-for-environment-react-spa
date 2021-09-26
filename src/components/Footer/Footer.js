import React from 'react';
import './Footer.css';

const Footer = () => {
	const getCurrentYear = () => new Date().getFullYear();
	return (
		<footer className="text-center p-base mb-base">
			<p>&copy; {getCurrentYear()} Created by <span style={{color: 'hsl(0, 0%, 94%)'}}>Fazle Rabbi Rana</span></p>
		</footer>
	);
};

export default Footer;
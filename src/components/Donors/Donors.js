import React, { useEffect, useState } from 'react';
import Donor from '../Donor/Donor';
import Selection from '../Selection/Selection';
import './Donors.css';

const Donors = () => {
	const [donors, setDonors] = useState([]);

	useEffect(() => {
		fetch('./donors.json')
			.then(res => res.json())
			.then(data => setDonors(data));
	}, []);

	return (
		<section className="donors-section">
			<div className="all-donors">
				{
					donors.map(donor => <Donor key={donor.id} donor={donor} />)
				}
			</div>
			<div className="selected-donors-container">
				<Selection />
			</div>
		</section>
	);
};

export default Donors;
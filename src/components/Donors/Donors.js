import React, { useEffect, useState } from 'react';
import Donor from '../Donor/Donor';
import Selection from '../Selection/Selection';
import './Donors.css';

const Donors = () => {
	const [donors, setDonors] = useState([]);
	const [selectedDonors, setSelectedDonors] = useState([]);

	useEffect(() => {
		fetch('./donors.json')
			.then(res => res.json())
			.then(data => setDonors(data));
	}, []);

	const selectDonor = donor => {
		const newDonors = [...selectedDonors];
		if(newDonors.indexOf(donor) === -1) {
			newDonors.push(donor);
		}
		setSelectedDonors(newDonors);
	}

	return (
		<section className="donors-section">
			<div className="all-donors">
				{
					donors.map(donor => <Donor key={donor.id} donor={donor} selectDonor={selectDonor} />)
				}
			</div>
			<div className="selected-donors-container">
				<h3>Selected Donors</h3>
				<Selection selectedDonors={selectedDonors} />
			</div>
		</section>
	);
};

export default Donors;
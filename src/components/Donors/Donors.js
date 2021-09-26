import React, { useEffect, useState } from 'react';
import Donor from '../Donor/Donor';
import Selection from '../Selection/Selection';
import moneyBagIcon from '../../images/money-bag-icon-white.svg';
import './Donors.css';

const Donors = () => {
	const [donors, setDonors] = useState([]);
	const [selectedDonors, setSelectedDonors] = useState([]);

	// load donors data
	useEffect(() => {
		fetch('./donors.json')
			.then(res => res.json())
			.then(data => setDonors(data));
	}, []);

	// select donor button click handler
	const selectDonor = donor => {
		const newDonors = [...selectedDonors];
		if(newDonors.indexOf(donor) === -1) {
			newDonors.push(donor);
		}
		setSelectedDonors(newDonors);
	}

	// get selected total amount
	const selectedTotalReducer = (previous, current) => previous + current.grantedAmount;
	const selectedTotalAmount = selectedDonors.reduce(selectedTotalReducer, 0);

	// selection summery toggle on button click
	const summeryViewToggle = () => document.getElementById('selection_summery').classList.toggle('active');

	return (
		<section className="donors-section">
			<div className="all-donors p-base">
				{
					donors.map(donor => <Donor key={donor.id} donor={donor} selectDonor={selectDonor} />)
				}
			</div>
			
			<div className="selections-container p-base">
				<div className="floating-amount">
					<button onClick={summeryViewToggle} className="selection-viewer">
						<img src={moneyBagIcon} alt="Money bag icon" className="icon" />
						<span>${selectedTotalAmount}</span>
					</button>
				</div>
				<Selection selectedDonors={selectedDonors} />
			</div>
		</section>
	);
};

export default Donors;
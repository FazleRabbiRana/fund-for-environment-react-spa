import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './Donor.css';

const Donor = (props) => {
	const {grantorName, grantorImage, nationality, organization, designation, grantedAmount} = props.donor;

	return (
		<div className="donor">
			<div className="donor-image">
				<img src={grantorImage} alt={grantorName} />
			</div>
			<h3>{grantorName}</h3>
			<p>{designation}</p>
			<p><em>{organization}, {nationality}</em></p>
			<h4>
				<span className="label">Grant Amount:</span>
				<span className="value">{grantedAmount}</span>
			</h4>
			<button 
				className="btn-regular"
				onClick={() => props.selectDonor(props.donor)}
			>
				<FontAwesomeIcon icon={faPlusCircle} />
				Select Donor
			</button>
		</div>
	);
};

export default Donor;
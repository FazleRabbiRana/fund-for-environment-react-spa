import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './Donor.css';

const Donor = (props) => {
	const {grantorName, grantorImage, nationality, organization, designation, grantedAmount} = props.donor;

	return (
		<div className="donor text-center">
			<div className="donor-image">
				<img src={grantorImage} alt={grantorName} />
			</div>
			<h3 className="donor-name mt-base">{grantorName}</h3>
			<p className="donor-desc">
				<span className="designation">{designation}</span>
				<br />
				<span className="organization">{organization}, {nationality}</span>
			</p>
			<h4 className="donor-grant py-base">
				<span className="label">Grant Amount: </span>
				<span className="value">${grantedAmount}</span>
			</h4>
			<button 
				className="btn-regular mt-base"
				onClick={(event) => {
					props.selectDonor(props.donor);
					event.target.setAttribute('disabled', 'true');
				}}
			>
				<FontAwesomeIcon icon={faPlusCircle} className="icon" />
				Select Donor
			</button>
		</div>
	);
};

export default Donor;
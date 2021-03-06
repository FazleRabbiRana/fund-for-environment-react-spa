import React from 'react';
import './Selection.css';

const Selection = (props) => {
	const selections = props.selectedDonors;

	// calculate total amount
	const totalReducer = (previous, current) => previous + current.grantedAmount;
	const totalAmount = selections.reduce(totalReducer, 0);

	// insert class based on total amount
	const fundStatusClass = totalAmount >= 5000000 ? 'enough' : 'not-enough';

	return (
		<div id="selection_summery" className="selection-summery p-base">
			<h2 className="summery-title text-center mb-base pb-base">Selection Summery</h2>

			<div className="selections-brief pb-base mb-base">
				<h3 className="selected-number">Donors selected: {selections.length}</h3>
				<h3 className="selected-amount">Amount: $<span className={fundStatusClass}>{totalAmount}</span></h3>
			</div>

			<h3 className="selections-list-title text-center my-base pt-base">List of selected donors</h3>
			<ol className="selection-list text-left">
				{
					selections.map(donor => <li key={donor.id}>{donor.grantorName} <span>(${donor.grantedAmount})</span></li>)
				}
			</ol>
		</div>
	);
};

export default Selection;
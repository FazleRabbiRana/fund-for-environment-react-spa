import React from 'react';
import './Selection.css';

const Selection = (props) => {
	const selections = props.selectedDonors;
	return (
		<ul className="selected-donors">
			{
				selections.map(donor => <li key={donor.id}>{donor.grantorName}</li>)
			}
		</ul>
	);
};

export default Selection;
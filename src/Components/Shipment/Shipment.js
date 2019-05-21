import React from 'react';

function Shipment(props) {
	const { id, capacity } = props;

	return <div className="shipment">
		<p>SHIP_ID: {id} Capacity: {capacity}</p>
	</div>
};

export default Shipment;
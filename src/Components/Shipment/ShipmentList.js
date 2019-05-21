import React from 'react';

import Shipment from './Shipment';
import './Shipment.css';

function Shipments(props) {
	const { shipments } = props;

	return <div className="shipment-list-wrapper">
		<h2>Shipment List</h2>
		<div className="shipment-list">
		 {shipments.map(shipment=> <Shipment key={`shipment_${shipment.id}`} {...shipment} />)}
		</div>
	</div>
}

export default Shipments;
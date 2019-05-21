import React from 'react';

import Shipment from '../Shipment/Shipment';

import './Truck.css';

function Truck(props) {
		const { id, capacity, availableCapacity, shipments } = props;

		return (
			<div className={`truck ${props.isEmpty() ? "empty" : ""}`}>
				<div className="truck-info">
				<p>ID: {id}</p>
				<p>Capacity: {capacity}</p>
				<p>Available Space: {availableCapacity}</p>
				</div>
				<div className="shipments-list">
					{shipments.map(shipment => <Shipment key={shipment.id} {...shipment} />)}
				</div>
			</div>
		)
}

export default Truck;
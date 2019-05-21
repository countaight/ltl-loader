import React from 'react';

import Truck from './Truck';

function TruckList (props) {
	const { trucks } = props;

	return (
		<div className="truck-list-wrapper">
			<h2>Truck List</h2>
			<div className="truck-list">
				{trucks.map(truck => <Truck key={`truck_${truck.id}`} {...truck} isEmpty={truck.isEmpty}/>)}
			</div>
		</div>
	)
}

export default TruckList;
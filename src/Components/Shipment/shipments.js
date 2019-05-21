import Shipment from './ShipmentModel';

const SHIPMENTS = [
	{id: 1, capacity: 16000},
	{id: 2, capacity: 42000},
	{id: 3, capacity: 8000},
	{id: 4, capacity: 12000},
	{id: 5, capacity: 38000},
	{id: 6, capacity: 1200},
	{id: 7, capacity: 1000},
	{id: 9, capacity: 18000},
	{id: 10, capacity: 28000},
	{id: 11, capacity: 7500},
	{id: 12, capacity: 17000},
	{id: 13, capacity: 37000}
];

export default SHIPMENTS.map(shipment => new Shipment(shipment));
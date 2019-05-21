import Truck from './TruckModel';

const TRUCKS = [
	{id: 1, capacity: 44000},
	{id: 2, capacity: 42000},
	{id: 3, capacity: 20000},
	{id: 4, capacity: 24000},
];

export default TRUCKS.map(truck => new Truck(truck));
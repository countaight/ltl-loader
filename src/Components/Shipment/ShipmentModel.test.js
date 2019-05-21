import Shipment from './ShipmentModel';

describe('a shipment', () => {
	const newShipment = new Shipment({id: 1, capacity: 2000});

	it('has an id', () => {
		expect(newShipment.id).toEqual(1);
	});

	it('has capacity', () => {
		expect(newShipment.capacity).toEqual(2000);
	});
});
import Truck from './TruckModel';
import Shipment from '../Shipment/ShipmentModel';

describe('a truck', () => {
	const shinyTruck = new Truck({id: 1, capacity: 40000});

	it('has capacity', () => {
		expect(shinyTruck.capacity).toEqual(40000);
	});

	it('has an id', () => {
		expect(shinyTruck.id).toEqual(1);
	});

	it('starts out empty', () => {
		expect(shinyTruck.isEmpty()).toBe(true);
	});

	describe('when filled', () => {
		afterEach(() => {
			shinyTruck.emptyTruck();
		});

		beforeEach(() => {
			shinyTruck.loadShipment(new Shipment({id: 1, capacity: 2000}));
		});

		it('can be filled', () => {
			expect(shinyTruck.isEmpty()).toBe(false);
		});

		it('can keep track of available space', () => {
			expect(shinyTruck.availableCapacity).toEqual(38000);
		});
	});

});
import loadShipments from './load_shipments';
import SHIPMENTS from '../Components/Shipment/shipments';
import TRUCKS from '../Components/Truck/trucks';

describe('loadShipments', () => {
	const result = loadShipments(SHIPMENTS, TRUCKS);

	it('returns object with shipments', () => {
		expect(result).toHaveProperty('shipments');
	});

	it('returns object with trucks', () => {
		expect(result).toHaveProperty('trucks');
	});
});
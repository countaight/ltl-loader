function loadShipments(shipments, trucks) {
	// Sort shipments and trucks from lowest to highest units
	const sortedShip = shipments.sort(function(a, b) {
		return a.capacity - b.capacity;
	});

	const sortedTrucks = trucks.sort(function(a, b) {
		return a.capacity - b.capacity;
	});

	// Set array for leftover shipments
	const leftOverShip = [];

	// Iterate through shipments and place them in the first available truck
	sortedShip.forEach(function(shipment) {
		const availableTruck = findTruck(shipment, sortedTrucks);

		if (availableTruck) {
			availableTruck.loadShipment(shipment);
		} else {
			leftOverShip.push(shipment);
		}
	});

	// This was needed to sort the original array back on reset
	sortById(sortedShip);

	// Sort the arrays back in order of ID
	return { shipments: sortById(leftOverShip), trucks: sortById(sortedTrucks) }
};

function findTruck(shipment, trucks) {
	return trucks.find(function(truck) {
		return truck.availableCapacity >= shipment.capacity
	});
};

function sortById(array) {
	return array.sort(function(a, b) {
		return a.id - b.id
	});
};

module.exports = loadShipments;
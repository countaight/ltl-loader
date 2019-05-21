function Truck({id, capacity}) {
	this.id = id;
	this.capacity = capacity;
	this.shipments = [];
	this.availableCapacity = this.capacity;
}

Truck.prototype.isEmpty = function() {
	return this.capacity === this.availableCapacity
};

Truck.prototype.loadShipment = function(shipment) {
	this.shipments.push(shipment);
	this.availableCapacity = this.availableCapacity - shipment.capacity;
};

Truck.prototype.emptyTruck = function() {
	this.shipments = [];
	this.availableCapacity = this.capacity;
}

export default Truck;
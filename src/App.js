import React, { useState } from 'react';
import './App.css';

import TruckList from './Components/Truck/TruckList';
import TRUCKS from './Components/Truck/trucks';
import ShipmentList from './Components/Shipment/ShipmentList';
import SHIPMENTS from './Components/Shipment/shipments';
import loadShipments from './utils/load_shipments';

function App() {
  // Using hooks to set state in functional components
  const [shipments, setShipments] = useState(SHIPMENTS);
  const [trucks, setTrucks] = useState(TRUCKS);

  function handleClick() {
    const {shipments: newShipments, trucks: newTrucks} = loadShipments(shipments, trucks);
    setShipments(newShipments);
    setTrucks(newTrucks);
  }

  function reset() {
    setShipments(SHIPMENTS);
    TRUCKS.forEach(truck => truck.emptyTruck());
    setTrucks(TRUCKS);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mastery Code Challenge</h1>
      </header>
      <main>
        <ShipmentList shipments={shipments}/>
        <TruckList trucks={trucks}/>
        <button onClick={handleClick}>Sort Shipments</button>
        <button onClick={reset}>Reset</button>
      </main>
    </div>
  );
}

export default App;

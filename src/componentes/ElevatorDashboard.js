import React from 'react';
import ElevatorControl from './ElevatorControl';

function ElevatorDashboard() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      <ElevatorControl id="1" />
      <ElevatorControl id="2" />
      <ElevatorControl id="3" />
      <ElevatorControl id="4" />
    </div>
  );
}

export default ElevatorDashboard;

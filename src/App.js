import React from 'react';
import Sidebar from './componentes/Sidebar';
import ElevatorDashboard from './componentes/ElevatorDashboard';
import './App.css';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Control de Elevadores</h1>
        <ElevatorDashboard />
      </div>
    </div>
  );
}

export default App;

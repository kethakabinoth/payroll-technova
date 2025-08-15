import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <Outlet />
    </div>
  );
};

export default App;  // This is the crucial line that was missing
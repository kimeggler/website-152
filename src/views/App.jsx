import React from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './AppRouter';

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default withRouter(App); 

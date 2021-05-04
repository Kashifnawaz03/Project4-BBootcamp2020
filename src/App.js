import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Navbar } from './components/Navbar';
import { Main } from './components/Main';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;


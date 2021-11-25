import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import './assets/css/App.css';

export default function App() {
  return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
  );
}

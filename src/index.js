// BRING IN REACT MODULE AND REACTDOM
import React from 'react';
import ReactDOM from 'react-dom';
// CONNECT APP AND STYLESHEETS
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// RENDER THE APP IN STRICT MODE
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';  // <-- Import BrowserRouter

ReactDOM.render(
  <BrowserRouter>   {/* <-- Wrap your app in BrowserRouter */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

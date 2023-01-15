import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import './index.css';
import { WebRoute } from './app/routes/WebRoute';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Router>
      <WebRoute />
    </Router>
  </React.StrictMode>
);

reportWebVitals();

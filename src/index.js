// Using an online API of your choice, create a React project. You will be working on this for the next three weeks.
// Project must meet the following criteria:
// Use React Router and have at least 3 pages using React Bootstrap or an alternative styling library - DONE
// Contain at least 10 components - 2/10 DONE
// Allow for all CRUD operations - 

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

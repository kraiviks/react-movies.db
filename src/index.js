import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
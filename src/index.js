import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import "./Button.module.css" 전역적으로 사용할 때 (잘 사용하지 않음)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
import 'modern-normalize/modern-normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// const link = React.createElement("a",{href: "https://learn.javascript.ru/arrow-functions"},"lern.js")
// console.log(link)
// ReactDOM.render(link,document.getElementById("root"))

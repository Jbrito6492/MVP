import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App.jsx';
import Routes from './Routes.jsx';
import { BrowserRouter } from 'react-router-dom';


const root = document.getElementById("root")

let renderMethod;
if (root && root.innerHTML !== "") {
  renderMethod = ReactDOM.hydrate
} else {
  renderMethod = ReactDOM.render
}

renderMethod(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.querySelector("#root"))
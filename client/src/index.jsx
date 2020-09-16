import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App.jsx';
import { Container } from '@material-ui/core';

const root = document.getElementById("root")

let renderMethod;
if (root && root.innerHTML !== "") {
  renderMethod = ReactDOM.hydrate
} else {
  renderMethod = ReactDOM.render
}
const context = {
  insertCss: (...styles) => {
    const removeCss = styles.map(x => x._insertCss());
    return () => {
      removeCss.forEach(f => f());
    };
  },
}

renderMethod(<App />, document.getElementById("root"))
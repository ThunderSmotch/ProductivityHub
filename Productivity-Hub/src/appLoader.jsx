import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

const render = () => {
  console.log("AppLoader Ran");
  const App = require('./app').default;
  ReactDOM.render(<AppContainer><App /></AppContainer>, document.getElementById('App'));
}

render();

if (module.hot) {
  module.hot.accept(render);
}

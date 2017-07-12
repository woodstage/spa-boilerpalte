import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Application from './component/Application.jsx';
import { AppContainer } from 'react-hot-loader';

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );

render(Application);

if (module.hot) {
  module.hot.accept('./component/Application.jsx', () => { 
    render(require('./component/Application.jsx').default); 
  });
};

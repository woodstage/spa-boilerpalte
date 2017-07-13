import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import { AppContainer } from 'react-hot-loader';

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );

render(App);

if (module.hot) {
  module.hot.accept('./component/App', () => { 
    render(require('./component/App').default); 
  });
};

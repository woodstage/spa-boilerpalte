import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { AppContainer } from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';
import reducers from './reducer'
import App from './component/App';
import HomeContainer from './container/HomeContainer';
import CheckoutContainer from './container/CheckoutContainer';

injectTapEventPlugin();

const logger = createLogger({
  level: 'info',
  collapsed: true
});

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const routerMw = routerMiddleware(history)

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }), {}, applyMiddleware(thunk, logger, routerMw)
);

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        { /* Tell the Router to use our enhanced history */}
        <ConnectedRouter history={history}>
          <Component>
            <Route exact path='/' component={HomeContainer} />
            <Route path='/checkout' component={CheckoutContainer} />
          </Component>
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );

render(App);

if (module.hot) {
  module.hot.accept('./component/App', () => {
    render(require('./component/App').default);
  });
};

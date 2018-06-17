import React from 'react';
import ReactDOM from 'react-dom';
import 'isomorphic-fetch';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './main.less';
import OverviewPage from './pages/overview-page.jsx';
import ErrorBoundary from './components/error-boundary.jsx';
import MainPage from './pages/main-page.jsx';
import NotFoundPage from './pages/not-found-page.jsx';
import { store, persistor } from './store-config.jsx';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ErrorBoundary>
        <Router>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/overview/:id" component={OverviewPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Router>
      </ErrorBoundary>
    </PersistGate>
  </Provider>,
  document.getElementById('container'),
);

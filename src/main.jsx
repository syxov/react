import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './main.less';
import OverviewPage from './pages/overview-page.jsx';
import ErrorBoundary from './components/error-boundary.jsx';
import MainPage from './pages/main-page.jsx';
import FilmsReducer from './reducers/films-reducer';
import FilmReducer from './reducers/film-reducer';
import NotFoundPage from './pages/not-found-page.jsx';

const persistConfig = {
  key: 'root',
  storage,
};

const reducers = combineReducers({
  films: FilmsReducer,
  filmOverview: FilmReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  applyMiddleware(thunkMiddleware),
);

export default store;

const persistor = persistStore(store);

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

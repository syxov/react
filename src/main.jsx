import './main.less';
import {OverviewPage} from './pages/overview-page/overview-page';
import {ErrorBoundary} from './components/error-boundary';
import {MainPage} from './pages/main-page/main-page';
import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {FilmsReducer} from './reducers/films-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import {
	HashRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import {FilmReducer} from './reducers/film-reducer';

const persistConfig = {
	key: 'root',
	storage,
};

const reducers = combineReducers({
    films: FilmsReducer,
	filmOverview: FilmReducer
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
	persistedReducer,
    applyMiddleware(
        thunkMiddleware
    )
);

const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<ErrorBoundary>
				<Router>
					<Switch>
						<Route path="/" exact component={MainPage}/>
						<Route path="/overview/:id" component={OverviewPage}/>
					</Switch>
				</Router>
			</ErrorBoundary>
		</PersistGate>
    </Provider>,
    document.getElementById('container')
);
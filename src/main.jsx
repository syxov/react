import './main.less';
import {OverviewPage} from './pages/overview-page';
import {ErrorBoundary} from './components/error-boundary';
import {MainPage} from './pages/main-page';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {FilmsReducer} from './reducers/films-reducer';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {PersistGate} from 'redux-persist/integration/react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {FilmReducer} from './reducers/film-reducer';
import {NotFoundPage} from './pages/not-found-page';

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
						<Route path="*" component={NotFoundPage}/>
					</Switch>
				</Router>
			</ErrorBoundary>
		</PersistGate>
    </Provider>,
    document.getElementById('container')
);
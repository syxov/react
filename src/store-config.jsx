import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import FilmReducer from './reducers/film-reducer';
import FilmsReducer from './reducers/films-reducer';

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

const persistor = persistStore(store);

export { store, persistor };

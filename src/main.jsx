import './main.less';
import {OverviewPage} from './pages/overview-page/overview-page';
import {ErrorBoundary} from './components/error-boundary';
import {MainPage} from './pages/main-page/main-page';
import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import filmReducer from './reducers/FilmFilter';
import thunkMiddleware from 'redux-thunk'
import {FilmsReducer} from "./reducers/films-reducer";

const reducers = combineReducers({
    film: filmReducer,
    films: FilmsReducer
});
export const store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware
    )
);

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <MainPage/>
            {/*<OverviewPage/>*/}
        </ErrorBoundary>
    </Provider>,
    document.getElementById('container')
);
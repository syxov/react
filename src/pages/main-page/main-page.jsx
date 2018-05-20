import {FilmsList} from '../../components/films-list/films-list';
import {Fragment} from 'react';
import {SearchHeader} from '../../components/search-header/search-header';
import {connect} from 'react-redux';
import {store} from "../../main";
import {fetchMovies} from "../../action/films-download-actions-generator";

@connect(state => ({
    films: state.films
}))
export class MainPage extends React.PureComponent {
    constructor(...args) {
        super(...args);
        store.dispatch(fetchMovies());
    }

    render() {
        return (
            <Fragment>
                <SearchHeader/>
                <FilmsList films={this.props.films}/>
            </Fragment>
        );
    }
}
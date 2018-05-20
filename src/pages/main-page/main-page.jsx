import {FilmsList} from '../../components/films-list/films-list';
import {Fragment} from 'react';
import {SearchHeader} from '../../components/search-header/search-header';
import {connect} from 'react-redux';
import {store} from "../../main";
import {FetchMovies} from "../../action/ActionGenerators";

@connect(state => ({
    films: state.films
}))
export class MainPage extends React.PureComponent {
    constructor(...args) {
        super(...args);
        store.dispatch(FetchMovies());
    }

    render() {
        console.log(this.props.films);
        return (
            <Fragment>
                <SearchHeader/>
                <FilmsList films={this.props.films}/>
            </Fragment>
        );
    }
}
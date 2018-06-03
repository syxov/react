import {FilmInfoHeader} from '../../components/film-info-header/film-info-header';
import {FilmsList} from '../../components/films-list/films-list';
import {Fragment} from 'react';
import {fetchMovieInfo} from '../../action/film-download-actions-generator';
import {connect} from 'react-redux';
import {store} from "../../main";

@connect(state => ({
	film: state.filmOverview
}))
export class OverviewPage extends React.PureComponent {
	constructor(...args) {
		super(...args);
		store.dispatch(fetchMovieInfo(this.props.match.params.id));
	}

    render() {
        return (
            <Fragment>
                <FilmInfoHeader {...(this.props.film || {})}/>
                <FilmsList films={[]}/>
            </Fragment>
        );
    }
}
import {FilmInfoHeader} from '../../components/film-info-header/film-info-header';
import {FilmsList} from '../../components/films-list/films-list';
import {Fragment} from 'react';

export class OverviewPage extends React.PureComponent {
	constructor(...args) {
		super(...args);
		this.state = {
			selectedFilm: {
				id: 1,
				title: 'Kill Bill',
				runtime: 2003,
				genre: 'Action',
				posterPath: 'http://cdn.funcheap.com/wp-content/uploads/2009/10/kill-bill.jpg',
				duration: 154,
				rating: 4.1,
				description: 'The lives of two mob hitmen, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.'
			}
		};
	}

    render() {
        return (
            <Fragment>
                <FilmInfoHeader
					posterPath={this.state.selectedFilm.posterPath}
					title={this.state.selectedFilm.title}
					runtime={this.state.selectedFilm.runtime}
					duration={this.state.selectedFilm.duration}
					description={this.state.selectedFilm.description}
					rating={this.state.selectedFilm.rating}
					genre={this.state.selectedFilm.genre}
				/>
                <FilmsList films={[]}/>
            </Fragment>
        );
    }
}
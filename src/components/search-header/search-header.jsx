import './search-header.less';
import {store} from "../../main";
import {fetchMovies} from "../../action/films-download-actions-generator";
import {connect} from 'react-redux';

const searchBy = {
    title: 'title',
    genre: 'genres'
};

const sortBy = {
    releaseDate: 'release_date',
    rating: 'vote_average'
};

@connect(state => ({
    filmsCount: state.films.length
}))
export class SearchHeader extends React.PureComponent {
    constructor(props) {
        super(props);
        this.nameInput = React.createRef();
        this.reloadMovies = this.reloadMovies.bind(this);
        this.searchBy = searchBy.title;
        this.sortBy = sortBy.rating;
    }

    render() {
        return (
            <div className="search-header">
                <div className="search">
                    <div className="netflix">netflixroulette</div>
                    <div className="find-movie-label">FIND YOUR MOVIE</div>
                    <input ref={this.nameInput} type="search"/>
                    <div className="search-block">
                        <div>
                            SEARCH BY
                            <button className={this.searchBy === searchBy.title ? 'active' : ''} onClick={() => this.searchBy = searchBy.title}>Title</button>
                            <button className={this.searchBy === searchBy.genre ? 'active' : ''} onClick={() => this.searchBy = searchBy.genre}>Genre</button>
                        </div>
                        <button onClick={this.reloadMovies} className="active">Search</button>
                    </div>
                </div>
                <div className="search-result">
                    <span>{this.props.filmsCount} movies found</span>
                    <div className="sort-by">
                        Sort by
                        <span onClick={() => this.sortBy = sortBy.releaseDate}>Release date</span>
                        <span onClick={() => this.sortBy = sortBy.rating} className="active">Rating</span>
                    </div>
                </div>
            </div>
        );
    }

    reloadMovies() {
        store.dispatch(fetchMovies({
            search: this.nameInput.current.value,
            searchBy: this.searchBy,
            sortBy: this.sortBy
        }));
    }
}
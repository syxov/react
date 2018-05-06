import './search-header.less';

export function SearchHeader(props) {
    return (
        <div className="search-header">
            <div className="netflix">netflixroulette</div>
            <div className="find-movie-label">FIND YOUR MOVIE</div>
            <input type="search"/>
            <div className="search-block">
                <div>
                    SEARCH BY <button className="active">Title</button><button>Genre</button>
                </div>
                <button className="active">Search</button>
            </div>
        </div>
    );
}
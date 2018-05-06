import './search-header.less';

export function SearchHeader() {
    return (
        <div className="search-header">
            <div className="search">
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
            <div className="search-result">
                <span>7 movies found</span>
                <div className="sort-by">
                    Sort by <span>Release date</span><span className="active">Rating</span>
                </div>
            </div>
        </div>
    );
}
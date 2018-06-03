import './film-info-header.less';

export function FilmInfoHeader(props) {
    return (
        <div className="info-header">
            <div className="header">
                <div className="netflix-and-search">
                    <span>netflixroulette</span>
                    <button>Search</button>
                </div>
                <div className="info">
                    <img src={props.poster_path}/>
                    <div>
						<div className="title-and-rating">
							<div className="title">{props.title}</div>
							<div className="rating">{props.vote_average}</div>
						</div>
                        <div className="runtime-and-duration">
                            <span>{props.release_date}</span><span>{props.runtime} min</span>
                        </div>
                        <div className="description">{props.overview}</div>
                    </div>
                </div>
            </div>
            <div className="films-by-genre">
                Films by {props.genre} genre
            </div>
        </div>
    );
}
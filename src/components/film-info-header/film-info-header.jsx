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
                    <img src={props.posterPath}/>
                    <div>
						<div className="title-and-rating">
							<div className="title">{props.title}</div>
							<div className="rating">{props.rating}</div>
						</div>
                        <div className="runtime-and-duration">
                            <span>{props.runtime}</span><span>{props.duration} min</span>
                        </div>
                        <div className="description">{props.description}</div>
                    </div>
                </div>
            </div>
            <div className="films-by-genre">
                Films by {props.genre} genre
            </div>
        </div>
    );
}
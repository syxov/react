import './film-preview.less';

export function FilmPreview(props) {
    return (
        <div className="film-preview">
            <img src={props.filmPosterSrc}/>
            <div className="film-preview-info">
                <div className="first-row">
                    <span>{props.filmName}</span><span className="year">{props.filmCreationYear}</span>
                </div>
                <div className="second-row">{props.filmGenre.join(', ')}</div>
            </div>
        </div>
    );
}
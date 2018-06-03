import './film-preview.less';
import {
    Link
} from 'react-router-dom';

export function FilmPreview(props) {
    return (
        <div className="film-preview">
            <Link to={`/overview/${props.id}`}>
                <img src={props.filmPosterSrc}/>
			</Link>
            <div className="film-preview-info">
                <div className="first-row">
                    <span>{props.filmName}</span><span className="year">{props.filmCreationYear}</span>
                </div>
                <div className="second-row">{props.filmGenre.join(', ')}</div>
            </div>
        </div>
    );
}
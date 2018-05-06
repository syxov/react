import {FilmPreview} from './film-preview/film-preview';
import './films-list.less';

export function FilmsList(props) {
    return (
        <div className="films-preview-container">
            {
                props.films.map(info =>
                    <FilmPreview
                        key={info.id.toString()}
                        filmPosterSrc={info.posterPath}
                        filmName={info.title}
                        filmCreationYear={info.runtime}
                        filmGenre={info.genre}/>)
            }
        </div>
    );
}
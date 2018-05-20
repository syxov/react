import {FilmPreview} from './film-preview/film-preview';
import './films-list.less';

export function FilmsList(props) {
    if (props.films && props.films.length) {
        return <FilmsPreviewContainer films={props.films}/>;
    } else {
        return <NoResultsFound/>;
    }
}

function FilmsPreviewContainer(props) {
    return (
        <div className="films-preview-container">
            {
                props.films.map(info =>
                    <FilmPreview
                        key={info.id.toString()}
                        filmPosterSrc={info.poster_path}
                        filmName={info.title}
                        filmCreationYear={info.release_date}
                        filmGenre={info.genres}/>)
            }
        </div>
    );
}

function NoResultsFound() {
    return (
        <div className="films-preview-container">
            <h1>No Films Found</h1>
        </div>
    );
}
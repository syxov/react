import React from 'react';
import FilmPreview from './film-preview/film-preview.jsx';
import './films-list.less';

export default function FilmsList(props) {
  if (props.films && props.films.length) {
    return <FilmsPreviewContainer films={props.films} />;
  }
  return <NoResultsFound />;
}

function FilmsPreviewContainer(props) {
  return (
    <div className="films-preview-container">
      {
                props.films.map(info =>
                    (<FilmPreview
                      key={info.id.toString()}
                      id={info.id}
                      filmPosterSrc={info.poster_path}
                      filmName={info.title}
                      filmCreationYear={info.release_date}
                      filmGenre={info.genres}
                    />))
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

import React from 'react';
import { Link } from 'react-router-dom';
import './film-preview.less';

export default function FilmPreview(props) {
  return (
    <div className="film-preview">
      <Link to={`/overview/${props.id}`}>
        <img src={props.filmPosterSrc} />
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

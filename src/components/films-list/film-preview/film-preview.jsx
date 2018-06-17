import React from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import './film-preview.less';

const styles = {
  poster: {
    width: '250px',
    height: '300px',
  },
  previewFistRow: {
    display: 'flex',
    'justify-content': 'space-between',
  },
  year: {
    border: '1px solid black',
    padding: '3px',
  },
};

function FilmPreview(props) {
  return (
    <div>
      <Link to={`/overview/${props.id}`}>
        <img className={props.classes.poster} src={props.filmPosterSrc} />
      </Link>
      <div>
        <div className={props.classes.previewFistRow}>
          <span>{props.filmName}</span><span className={props.classes.year}>{props.filmCreationYear}</span>
        </div>
        <div>{props.filmGenre.join(', ')}</div>
      </div>
    </div>
  );
}

export default injectSheet(styles)(FilmPreview);

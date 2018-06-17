import * as Types from './actions';

export function startFilmDownloadSuccess(film) {
  return {
    type: Types.DOWNLOAD_FILM_SUCCESS,
    film,
  };
}

export function fetchMovieInfo(filmId) {
  return function fetchMovieInfoGenerator(dispatch) {
    return fetch(`http://react-cdp-api.herokuapp.com/movies/${filmId}`)
      .then(response => response.json())
      .then(json => dispatch(startFilmDownloadSuccess(json)));
  };
}

import * as Types from './actions';

export function startFilmsDownloadSuccess(films) {
    return {
        type: Types.DOWNLOAD_FILMS_SUCCESS,
        films
    }
}

export function fetchMovies(params = {}) {
    return function (dispatch) {
        const query = Object.keys(params)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
            .join('&');
        return fetch(`http://react-cdp-api.herokuapp.com/movies?${query}`)
            .then(
                response => response.json()
            )
            .then(json => dispatch(startFilmsDownloadSuccess(json.data)))
    };
}
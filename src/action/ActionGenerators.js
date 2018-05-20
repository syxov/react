import * as Types from './ActionTypes';

export function setMovieFilter(name) {
    return {
        type: Types.FILTER_MOVIES,
        name
    };
}

export function startFilmsDownload() {
    return {
        type: Types.DOWNLOAD_FILMS
    }
}

export function startFilmsDownloadSuccess(films) {
    return {
        type: Types.DOWNLOAD_FILMS_SUCCESS,
        films
    }
}

export function FetchMovies() {
    return function (dispatch) {
        return fetch(`http://react-cdp-api.herokuapp.com/movies`)
            .then(
                response => response.json()
            )
            .then(json => dispatch(startFilmsDownloadSuccess(json.data)))
    };
}
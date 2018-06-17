import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import FilmInfoHeader from '../components/film-info-header/film-info-header.jsx';
import FilmsList from '../components/films-list/films-list.jsx';
import { fetchMovieInfo } from '../action/film-download-actions-generator';
import store from '../main.jsx';

@connect(state => ({
  film: state.filmOverview,
}))
export default class OverviewPage extends React.PureComponent {
  constructor(...args) {
    super(...args);
    store.dispatch(fetchMovieInfo(this.props.match.params.id));
  }

  render() {
    return (
      <Fragment>
        <FilmInfoHeader {...(this.props.film || {})} />
        <FilmsList films={[]} />
      </Fragment>
    );
  }
}

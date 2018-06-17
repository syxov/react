import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import FilmsList from '../components/films-list/films-list.jsx';
import SearchHeader from '../components/search-header/search-header.jsx';
import store from '../main.jsx';
import { fetchMovies } from '../action/films-download-actions-generator';

@connect(state => ({
  films: state.films,
}))
export default class MainPage extends React.PureComponent {
  constructor(...args) {
    super(...args);
    store.dispatch(fetchMovies());
  }

  render() {
    return (
      <Fragment>
        <SearchHeader />
        <FilmsList films={this.props.films} />
      </Fragment>
    );
  }
}

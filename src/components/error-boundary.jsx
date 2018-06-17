import React from 'react';

export default class ErrorBoundary extends React.PureComponent {
  componentDidCatch(error, info) {
    console.log(this, error, info);
  }

  render() {
    return this.props.children;
  }
}

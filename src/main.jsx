import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement('p', null, 'Hello, created word');

class Greeting extends React.Component {
    render() {
        return <p>Hello, {this.props.name}</p>;
    }
}

class PureGreeting extends React.PureComponent {
    render() {
        return <p>Hello, pure {this.props.name}</p>;
    }
}

function functionalGreeting(name) {
    return <p>Hello, functional {name}</p>;
}

ReactDOM.render(element, document.getElementById('created-element'));
ReactDOM.render(<Greeting name="World"/>, document.getElementById('impure-component'));
ReactDOM.render(<PureGreeting name="World"/>, document.getElementById('pure-component'));
ReactDOM.render(functionalGreeting('World'), document.getElementById('functional-element'));
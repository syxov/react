export class ErrorBoundary extends React.PureComponent {
    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {
        return this.props.children;
    }
}
import './main.less';
import {OverviewPage} from './pages/overview-page/overview-page';
import {ErrorBoundary} from './components/error-boundary';
import {MainPage} from './pages/main-page/main-page';

ReactDOM.render(
    <ErrorBoundary>
        <MainPage/>
        {/*<OverviewPage/>*/}
    </ErrorBoundary>,
    document.getElementById('container')
);
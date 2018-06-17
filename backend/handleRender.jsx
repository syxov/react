import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../src/store-config.jsx';
import NotFoundPage from '../src/pages/not-found-page';
import OverviewPage from '../src/pages/overview-page';
import MainPage from '../src/pages/main-page.jsx';
import ErrorBoundary from '../src/components/error-boundary.jsx';

function renderFullPage() {
	return `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>Title</title>
		</head>
		<body>
			<div id="container">${renderToString(  
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<ErrorBoundary>
							<Router>
								<Switch>
									<Route path="/" exact component={MainPage} />
									<Route path="/overview/:id" component={OverviewPage} />
									<Route path="*" component={NotFoundPage} />
								</Switch>
							</Router>
						</ErrorBoundary>
					</PersistGate>
				</Provider>
			)}</div>
			<script src="../dist/bundle.js"></script>
		</body>
		</html>
	`;
}

function handleRender(req, res) {
	res.send(renderFullPage());
}

export default handleRender;
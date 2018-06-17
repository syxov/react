import React from 'react';
import { renderToString } from 'react-dom/server';
import store from '../src/main';
import NotFoundPage from '../src/pages/not-found-page';
import OverviewPage from '../src/pages/overview-page';
import MainPage from '../src/pages/main-page';

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
		</body>
		</html>
	`;
}

function handleRender(req, res) {
	res.send(renderFullPage());
}

export default handleRender;
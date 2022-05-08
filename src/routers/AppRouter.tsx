import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import WorkPage from '../pages/WorkPage';
import { AppProvider } from '../store/AppContext';

const AppRouter = () =>
{
	return (
		<Router>
			<AppProvider>
				<Header />

				<main className="no-scroll">
					<Switch>
						<Route exact path="/" component={ HomePage }/>
						<Route exact path="/work" component={ WorkPage }/>
						<Route exact path="/contact" component={ ContactPage }/>

						<Redirect to="/" />
					</Switch>
				</main>
			</AppProvider>
		</Router>
	);
};

export default AppRouter;

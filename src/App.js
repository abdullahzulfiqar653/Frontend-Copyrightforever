import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import AboutUs from './screens/AboutUs';
import CopyrightCategories from './screens/CopyrightCategories';
import MyAccount from './myaccount/MyAccount.js';
import { formRoutes } from './formRoutes';
// import { load_user, checkAuthenticated } from "./actions/auth";
import { Provider } from 'react-redux';
import store from './store'


const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Header />
					<main className='py-3'>
						<Container>
							<Route path='/login' component={LoginScreen} />
							<Route path='/register' component={RegisterScreen} />
							{formRoutes.map((route, id) => (
								<Route
									exact
									key={id}
									path={`/registration/${route.path}`}
									component={route.component}
								/>
							))}
						</Container>
						<Switch>
							<Route exact path='/' component={HomeScreen} />
							<Route path='/about-us' component={AboutUs} />
							<Route path='/copyrightcategories' component={CopyrightCategories} />
							<Route path='/myaccount' component={MyAccount} />
						</Switch>
					</main>
				<Footer />
			</Router>
		</Provider>
	);
};
export default App;

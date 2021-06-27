import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import AboutUs from './screens/AboutUs';
import CopyrightCategories from './screens/CopyrightCategories';
import MyAccount from './myaccount/MyAccount.js';
import { formRoutes } from './formRoutes';
import { logout } from "./actions/auth"
import jwt_decode from "jwt-decode"
import { useDispatch } from "react-redux";
import PrivateRoute from "./private/Private"

const App = () => {
  useEffect(() => {
    
  })
  const dispatch = useDispatch()
  // const token = localStorage.getItem('access');

  // if (token) {
  //     const decodeToken = jwt_decode(token);
  //     const expiresIn = new Date(decodeToken.exp * 1000);
  //     if (new Date() > expiresIn) {
  //       console.log(new Date() > expiresIn);
  //       dispatch(logout())
  //       return null;
  //     }
  //   }
  //   else {
  //     dispatch(logout())
  // }
  
  setInterval(() => {
    const token = localStorage.getItem('access');
    if (token) {
        
      const decodeToken = jwt_decode(token);
      const expiresIn = new Date(decodeToken.exp * 1000);
      console.log(new Date() > expiresIn);
      if (new Date() > expiresIn) {
        console.log(new Date() > expiresIn);
        dispatch(logout())
        return null;
      }
    }
      else {
        console.log("in else conditions")
      dispatch(logout())
    }
  }, 1000)

    
  
  return (
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
  );
};
export default App;

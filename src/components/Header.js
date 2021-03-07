import React from 'react';
import { Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { TextField } from '@material-ui/core';
import SearchBox from './SearchBox';
import NavBarLink from './NavBarLink';
import Logo from '../design_113638_3249872_424123_sourcefile.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ isAuthenticated }) => {
  console.log('is Authenticated:', isAuthenticated);
  return (
    <header className='bg-dark'>
      <Container className='main-navbar'>
        <Link to='/' className='logo'>
          <img src={Logo} alt='lgo' />
        </Link>
        <div className='social-link-cont'>
          <div className='social__links'>
            {isAuthenticated ? (
              <Link to='/myaccount' className='myacount ml-3'>
                <i className='fas fa-shopping-cart'></i> My Account
              </Link>
            ) : (
              <Link to='/login'>
                <i className='fas fa-user'></i> Sign In
              </Link>
            )}
          </div>
          <SearchBox />
        </div>
      </Container>
      <Container>
        <NavBarLink />
      </Container>
    </header>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, {})(Header);

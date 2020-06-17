import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/vidToGist.svg';

import { NavDropdown, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className="Navbar">
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to='/'>
        <Logo className='logo' />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} className='option' to='/create'>Create</Nav.Link>
          <Nav.Link as={Link} className='option' to='/explore'>Explore</Nav.Link>
          {currentUser ? (
            <Nav.Link as={Link} className='option' onClick={() => auth.signOut()}>Sign out</Nav.Link>
          ) : (
              <Nav.Link as={Link} className='option' to='/signin'>Sign in</Nav.Link>
            )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  </div>

);

export default Header;

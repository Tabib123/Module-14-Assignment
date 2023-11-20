import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const WNavbar = () => {
  const navStyle = {
    fontFamily: 'Poppins',
  };

  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: '#D7F5DC', boxShadow: 'none', ...navStyle }}>
        <Container fluid>
          <Navbar.Brand href="#" className="ms-4">
            <span style={{ color: '#000000', fontWeight: 'bold' }}>Design</span>
            <span style={{ color: '#F55F1D', fontWeight: 'bold' }}>AGENCY</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px', fontFamily: 'Poppins' }} navbarScroll />
            <Nav style={{ fontFamily: 'Poppins' }}>
              <NavLink to="/" className="nav-link me-5">Home</NavLink>
              <NavLink to="/team" className="nav-link me-5">Team</NavLink>
              <NavLink to="/service" className="nav-link me-5">Service</NavLink>
              <NavLink to="/projects" className="nav-link me-5">Projects</NavLink>
              <NavLink to="/testiomonials" className="nav-link me-5">Testimonials</NavLink>
              <Button variant="outline-success" className="me-4 text-black">Login</Button>
              <Button variant="btn btn-success" className="me-4">Register</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default WNavbar;

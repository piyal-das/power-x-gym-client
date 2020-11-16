import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {

    return (
        <Navbar className="navbar" bg="none" variant="light">
            <div className="container">
                <Navbar.Brand><Link to="/" className="logo">POWER <span className="special">X</span></Link></Navbar.Brand>
                <Nav className="ml-auto">
                    <Link className="nav-link" to="/home">Home</Link>
                    <Link className="nav-link" to="#">Services</Link>
                    <Link className="nav-link" to="/classes">Our Classes</Link>
                    <Link className="nav-link" to="#">About us</Link>
                    <Link className="nav-link" to="#">Blog</Link>
                    <Link className="nav-link" to="/pricing">Pricing</Link>
                    <Link className="nav-link" to="/membership">Contact Us</Link>
                </Nav>
            </div>
        </Navbar>
    );
};

export default Header;
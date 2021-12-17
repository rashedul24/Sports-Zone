import React from "react";
import './Header.css'
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Trainers from "../Trainers/Trainers";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <NavLink to="/" className="brand">
          Sports Zone
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <NavLink className="nav-item" to="home">
              Home
            </NavLink>
            <NavLink className="nav-item" to="category">
              Category
            </NavLink>
            <NavLink className="nav-item" to="trainers">
             Trainers
            </NavLink>
            <NavLink className="nav-item" to="about">
              About Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

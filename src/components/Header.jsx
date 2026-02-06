import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      className="bg-white border-bottom shadow-sm py-3"
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center gap-2 fw-bold fs-4"
        >
          <img
            src="https://cdn.pixabay.com/photo/2012/04/16/11/34/shopping-35594_1280.png"
            width="40"
            alt="ShopNShop"
          />
          SnapCart
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          {/* Center Navigation */}
          <Nav className="mx-auto gap-4 text-uppercase fw-semibold small">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link px-0 ${
                  isActive ? "border-bottom border-dark" : "text-dark"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                `nav-link px-0 ${
                  isActive ? "border-bottom border-dark" : "text-dark"
                }`
              }
            >
              All Products
            </NavLink>

          </Nav>

          {/* Right Icons */}
          <Nav className="d-flex align-items-center gap-4">
           

            <Link to="/wishlist" className="position-relative text-danger">
              <FaHeart size={20} />
            </Link>

            <Link to="/cart" className="text-dark">
              <FaShoppingCart size={20} />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

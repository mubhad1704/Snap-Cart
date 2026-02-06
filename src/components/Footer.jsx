import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaGlobe, FaCamera, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-light border-top mt-auto pt-5">
      <Container>
        <Row className="gy-4">
          {/* Brand */}
          <Col md={3}>
            <h5 className="fw-bold mb-3">SnapCart</h5>
            <p className="text-muted small">
              Elevating your beauty routine with premium products and
              sophisticated care.
            </p>

            <div className="d-flex gap-3">
              <FaGlobe className="text-muted fs-5" />
              <FaCamera className="text-muted fs-5" />
              <FaEnvelope className="text-muted fs-5" />
            </div>
          </Col>

          {/* Customer Care */}
          <Col md={3}>
            <h6 className="text-uppercase fw-semibold small mb-3">
              Customer Care
            </h6>
            <ul className="list-unstyled small text-muted">
              <li><Link className="text-muted text-decoration-none" to="#">Shipping Policy</Link></li>
              <li><Link className="text-muted text-decoration-none" to="#">Returns & Exchanges</Link></li>
              <li><Link className="text-muted text-decoration-none" to="#">Contact Us</Link></li>
              <li><Link className="text-muted text-decoration-none" to="#">FAQs</Link></li>
            </ul>
          </Col>

          {/* Explore */}
          <Col md={3}>
            <h6 className="text-uppercase fw-semibold small mb-3">
              Explore
            </h6>
            <ul className="list-unstyled small text-muted">
              <li><Link className="text-muted text-decoration-none" to="#">Skincare</Link></li>
              <li><Link className="text-muted text-decoration-none" to="#">Makeup</Link></li>
              <li><Link className="text-muted text-decoration-none" to="#">Fragrance</Link></li>
              <li><Link className="text-muted text-decoration-none" to="#">Best Sellers</Link></li>
            </ul>
          </Col>

          {/* Newsletter */}
          <Col md={3}>
            <h6 className="text-uppercase fw-semibold small mb-3">
              Newsletter
            </h6>
            <p className="text-muted small">
              Join our community for exclusive offers and tips.
            </p>

            <Form className="d-flex gap-2">
              <Form.Control
                type="email"
                placeholder="Your email"
                size="sm"
              />
              <Button variant="dark" size="sm">
                Join
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Bottom */}
        <div className="d-flex justify-content-between align-items-center border-top mt-4 pt-3 text-muted small">
          <p className="mb-0">
            © {new Date().getFullYear()} SnapCart. All rights reserved.
          </p>
          <p className="mb-0">Designed with elegance.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

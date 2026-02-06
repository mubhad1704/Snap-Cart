import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      {/* HERO CAROUSEL */}
      <Carousel fade controls indicators>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/premium-photo/female-hand-holding-colorful-shopping-bags-yellow-studio-background_116547-76196.jpg"
            alt="Shop smart"
            style={{ height: "600px", objectFit: "cover" }}
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
            <h1 className="fw-bold">Shop Smart</h1>
            <p>Discover the best deals on trending products</p>
            <Link to="/products">
              <Button variant="warning">Shop Now</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-vector/flat-super-sale-banner-with-photo_23-2149026967.jpg"
            alt="Mega Sale"
            style={{ height: "600px", objectFit: "cover" }}
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
            <h1 className="fw-bold">Mega Sale</h1>
            <p>Up to 50% off on top brands</p>
            <Link to="/products">
              <Button variant="danger">Explore Deals</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.freepik.com/free-vector/online-shopping-banner-template_23-2148705280.jpg"
            alt="Online Shopping"
            style={{ height: "600px", objectFit: "cover" }}
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
            <h1 className="fw-bold">Shop Anytime</h1>
            <p>Fast delivery • Secure payment • Easy returns</p>
            <Link to="/products">
              <Button variant="success">Start Shopping</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* BRAND INTRO */}
      <section className="bg-dark text-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center">
              <img
                src="https://img.freepik.com/premium-photo/exited-attractive-woman-stylish-colorful-outfit-holding-shopping-bags-with-exited-happy-face-exp_1042628-461334.jpg"
                alt="ShopNShop"
                className="img-fluid rounded shadow"
              />
            </Col>

            <Col md={6} className="p-4">
              <h1 className="fw-bold">SnapCart</h1>
              <h4 className="text-warning mb-3">
                Shop Smart, Live Better
              </h4>
              <p className="text-secondary">
                Your one-stop destination for trending products,
                unbeatable prices, and a seamless shopping experience.
              </p>

              <Link to="/products">
                <Button variant="warning" size="lg">
                  Get Started
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* PROMO BANNER */}
      <section>
        <img
          src="https://www.middletonshoppingcentre.co.uk/wp-content/uploads/2024/03/Middleton-Slider-Image-3-1-2048x857.jpg"
          alt="Shopping Banner"
          className="img-fluid w-100"
        />
      </section>
    </>
  );
}

export default LandingPage;

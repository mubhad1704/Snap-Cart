import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Badge } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { addToWishList } from "../redux/slices/wishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";

function ViewProducts() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const baseUrl = `https://dummyjson.com/products/${id}`;
  const [product, setProduct] = useState({});

  const getData = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center g-5">
          {/* Product Image */}
          <Col md={6} className="text-center">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: "450px", objectFit: "cover" }}
            />
          </Col>

          {/* Product Details */}
          <Col md={6}>
            <p className="text-uppercase text-muted small mb-2">
              {product.brand || "Premium Brand"}
            </p>

            <h1 className="fw-bold mb-3">{product.title}</h1>

            <h3 className="fw-semibold text-dark mb-3">
              $ {product.price}
              <Badge bg="success" className="ms-2 fs-6">
                {product.discountPercentage}% OFF
              </Badge>
            </h3>

            <p className="text-muted mb-4">{product.description}</p>

            <p className="mb-2">
              <strong>Rating:</strong> ⭐ {product.rating}
            </p>

            <p className="mb-4">
              <strong>Stock:</strong>{" "}
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </p>

            {/* Action Buttons */}
            <Row className="g-3">
              <Col sm={6}>
                <Button
                  variant="outline-danger"
                  className="w-100 d-flex align-items-center justify-content-center gap-2 rounded-pill"
                  onClick={() => dispatch(addToWishList(product))}
                >
                  <FaHeart />
                  Add to Wishlist
                </Button>
              </Col>

              <Col sm={6}>
                <Button
                  variant="dark"
                  className="w-100 d-flex align-items-center justify-content-center gap-2 rounded-pill"
                  onClick={() => dispatch(addToCart(product))}
                >
                  <FaShoppingCart />
                  Add to Cart
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      
    </section>
  );
}

export default ViewProducts;

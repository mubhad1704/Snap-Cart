import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { addToWishList } from "../redux/slices/wishlistSlice";

function AllProducts() {
  const baseUrl = "https://dummyjson.com/products";
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch()

  const getData = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    setProducts(data.products);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* Header Section */}
      <section className="py-5 text-center bg-light">
        <Container>
          <h1 className="fw-bold display-6">All Products</h1>
          <p className="text-muted">
            Discover our curated collection of premium products
          </p>
        </Container>
      </section>

      {/* Products Grid */}
      <section className="py-5">
        <Container>
          <Row className="g-4">
            {products.length > 0 ? (
              products.map((item) => (
                <Col key={item.id} sm={12} md={6} lg={4}>
                  <Card className="border-0 shadow-sm h-100 product-card">
                    <div className="position-relative overflow-hidden">
                      <Link to={`/viewProducts/${item.id}`}>
                        <Card.Img
                          src={item.thumbnail}
                          alt={item.title}
                          style={{
                            height: "350px",
                            objectFit: "cover",
                          }}
                        />
                      </Link>

                      {/* Wishlist */}
                      <Button
                        variant="light"
                        className="position-absolute top-0 end-0 m-3 rounded-circle shadow-sm"
                         onClick={() => dispatch(addToWishList(item))}
                      >
                        <FaHeart className="text-danger" />
                      </Button>
                    </div>

                    <Card.Body className="text-center">
                      <p className="text-muted text-uppercase small mb-1">
                        {item.brand || "Premium Brand"}
                      </p>

                      <Card.Title className="fw-semibold">
                        {item.title}
                      </Card.Title>

                      <p className="fw-bold fs-5">$ {item.price}</p>

                      <Button
                        variant="dark"
                        className="w-100 rounded-pill d-flex align-items-center justify-content-center gap-2"
                        onClick={() => dispatch(addToCart(item))}
                      >
                        <FaShoppingCart />
                        Add to Cart
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <p className="text-center">No products found</p>
            )}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AllProducts;

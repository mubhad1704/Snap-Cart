import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartslice";
import { deleteFromWishlist } from "../redux/slices/wishlistSlice";
import { FaHeartBroken, FaShoppingCart } from "react-icons/fa";

function Wishlist() {
  const wishlistArray = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(wishlistArray.items);
  }, [wishlistArray.items]);

  return (
    <Container className="py-5">
      {products.length > 0 ? (
        <>
          <h3 className="fw-bold mb-4">My Wishlist</h3>

          <Row className="g-4">
            {products.map((item) => (
              <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
                <Card className="h-100 shadow-sm border-0 text-center">
                  <Card.Img
                    variant="top"
                    src={item.thumbnail}
                    className="p-3"
                    style={{ height: "160px", objectFit: "contain" }}
                  />

                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="fs-6 fw-semibold">
                      {item.title}
                    </Card.Title>

                    <h6 className="text-success mb-3">$ {item.price}</h6>

                    <div className="mt-auto d-grid gap-2">
                      <Button
                        variant="dark"
                        onClick={() => dispatch(addToCart(item))}
                      >
                        <FaShoppingCart className="me-2" />
                        Add to Cart
                      </Button>

                      <Button
                        variant="outline-danger"
                        onClick={() =>
                          dispatch(deleteFromWishlist(item.id))
                        }
                      >
                        Remove
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      ) : (
        /* Empty Wishlist */
        <div className="text-center py-5">
          <FaHeartBroken size={90} className="text-muted mb-3" />
          <h3>Your wishlist is empty</h3>
          <p className="text-muted">
            Add products you love and find them here ❤️
          </p>
        </div>
      )}
      
    </Container>
  );
}

export default Wishlist;

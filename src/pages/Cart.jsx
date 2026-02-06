import React, { useEffect, useState } from "react";
import { Button, Form, Table, Container, Row, Col, Card } from "react-bootstrap";
import { FaMinus, FaPlus, FaShoppingBag } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decreaseQuantity,
  deleteFromCart,
  increaseQuantity,
} from "../redux/slices/cartslice";

function Cart() {
  const cartArray = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(cartArray.items);
  }, [cartArray.items]);

  const cartTotal = products.reduce(
    (sum, item) => sum + item.totalPrice,
    0
  );

  return (
    <Container className="py-5">
      {products.length > 0 ? (
        <Row className="g-4">
          {/* Cart Table */}
          <Col lg={8}>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <h4 className="fw-bold mb-4">Shopping Cart</h4>

                <Table responsive className="align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    {products.map((item) => (
                      <tr key={item.id}>
                        <td className="d-flex align-items-center gap-3">
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            width="60"
                            className="rounded"
                          />
                          <span className="fw-semibold">{item.title}</span>
                        </td>

                        <td>$ {item.price}</td>

                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <Button
                              size="sm"
                              variant="outline-dark"
                              onClick={() =>
                                dispatch(decreaseQuantity(item))
                              }
                            >
                              <FaMinus />
                            </Button>

                            <Form.Control
                              value={item.quantity}
                              readOnly
                              className="text-center"
                              style={{ width: "60px" }}
                            />

                            <Button
                              size="sm"
                              variant="outline-dark"
                              onClick={() =>
                                dispatch(increaseQuantity(item))
                              }
                            >
                              <FaPlus />
                            </Button>
                          </div>
                        </td>

                        <td className="fw-semibold">
                          $ {Math.ceil(item.totalPrice)}
                        </td>

                        <td>
                          <Button
                            variant="outline-danger"
                            onClick={() =>
                              dispatch(deleteFromCart(item.id))
                            }
                          >
                            <MdDelete size={20} />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>

          {/* Cart Summary */}
          <Col lg={4}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="text-center">
                <h5 className="fw-bold mb-3">Cart Summary</h5>

                <div className="d-flex justify-content-between mb-3">
                  <span>Total</span>
                  <strong>$ {Math.ceil(cartTotal)}</strong>
                </div>

                <Button variant="dark" className="w-100 rounded-pill">
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        /* Empty Cart */
        <div className="text-center py-5">
          <FaShoppingBag size={80} className="text-muted mb-3" />
          <h3>Your cart is empty</h3>
          <p className="text-muted">
            Looks like you haven’t added anything yet.
          </p>

          <Link to="/products">
            <Button variant="dark" className="rounded-pill px-4">
              Explore Products
            </Button>
          </Link>
        </div>
      )}
    </Container>
  );
}

export default Cart;

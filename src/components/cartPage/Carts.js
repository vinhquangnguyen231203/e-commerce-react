import { createSelector } from "@reduxjs/toolkit";
import { Divider } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { summarySelectors } from "../../redux/selectors/summarySelector";
import "./carts.scss";
import Cart from "./Cart";
import { deleteCart, updateCart } from "../../redux/reducers/cartSlice";
import { displayPrice } from "../../utilities/ulties";
import { addWish } from "../../redux/reducers/wishSlice";
import { toast } from "react-toastify";

export default function Carts() {
  // State
  const { carts } = useSelector((state) => state.carts);
  const { products } = useSelector((state) => state.products);
  const { wish } = useSelector((state) => state.wish);
  const total = useSelector(summarySelectors);
  const dispatch = useDispatch();

  // Function handler
  const handleDeleteCart = (cartID) => {
    dispatch(deleteCart(cartID));
  };
  const handleUpdateCart = (cartItem) => {
    dispatch(updateCart(cartItem));
  };
  const handleAddWish = (cartID) => {
    const res = products.find((item) => item.id === cartID);
    const index = wish.findIndex((item) => item.id === cartID);

    if (index < 0) {
      toast.success("Đã thêm sản phẩm vào wishlist");
      dispatch(addWish(res));
    } else {
      toast.warning("Đã tồn tại sản phẩm trong wishlist");
    }
  };

  // Render
  return (
    <Container>
      <Divider />

      {/* Render cart items */}
      <div className="cart-items">
        {carts &&
          carts.map((item, index) => (
            <Cart
              key={index}
              product={item}
              handleDeleteCart={handleDeleteCart}
              handleUpdateCart={handleUpdateCart}
              handleAddWish={handleAddWish}
            />
          ))}
      </div>

      <Divider />
      <div className="footer-cart w-100">
        <Row>
          <Col md={6} sm={12}>
            <h5>
              Số lượng sản phẩm:{" "}
              <span style={{ color: "blue" }}>{carts.length}</span>
            </h5>
          </Col>
          <Col md={6} sm={12}>
            <h5 className="footer-cart-total">
              Tổng thành tiền:{" "}
              <span style={{ color: "blue" }}>{displayPrice(total)}</span>
            </h5>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

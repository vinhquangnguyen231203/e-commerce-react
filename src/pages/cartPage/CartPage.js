import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./cartpage.scss";
import { Container } from "reactstrap";
import { Col, Empty, Row } from "antd";
import { IoBagHandleOutline } from "react-icons/io5";
import Carts from "../../components/cartPage/Carts";
import { useSelector } from "react-redux";
import CartTotal from "../../components/cartPage/CartTotal";

export default function CartPage() {
  // state
  const { carts } = useSelector((state) => state.carts);

  return (
    <div>
      <Header />
      <section id="cartpage">
        <Container className="text-center">
          <div className="box-title ">
            <span>
              <IoBagHandleOutline size={30} />
            </span>{" "}
            <h4>Giỏ hàng</h4>
          </div>
          {carts.length > 0 ? (
            <Row gutter={[16, 16]} className="mt-5">
              <Col md={16} sm={24}>
                <Carts />
              </Col>
              <Col md={8} sm={24}>
                <CartTotal/>
              </Col>
            </Row>
          ) : (
            <Empty className="mt-5" />
          )}
        </Container>
      </section>
      <Footer />
    </div>
  );
}

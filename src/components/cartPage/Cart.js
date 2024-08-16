import React, { useState } from "react";
import { Container } from "reactstrap";

import { Avatar, Button, Card, Col, InputNumber, Row, Tooltip } from "antd";

import {
  DeleteOutlined,
  HeartOutlined,
  LineOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import "./cart.scss";
import { baseURL, emptyImage } from "../../utilities/common";
import { displayPrice } from "../../utilities/ulties";

export default function Cart(props) {
  // State
  const { product, handleUpdateCart, handleDeleteCart, handleAddWish } = props;

  // Function handle
  const addWish = (cartID) => {
      handleAddWish(cartID)
  }
  const updateCart = (cartItem, num) => {
    const newObject = { ...cartItem, num: num };
    handleUpdateCart(newObject);
  };
  const deleteCart = (cartID) => {
    handleDeleteCart(cartID);
  };

  // Render
  return (
    <Card className="cart-item" hoverable>
      <Row gutter={[16, 16]} align="middle">
        <Col xs={6}>
          <Avatar
            shape="square"
            size={64}
            src={
              product.thumbnail
                ? `${baseURL}${product.thumbnail.url}`
                : emptyImage
            }
          />
        </Col>
        <Col xs={12}>
          <h5>{product.name}</h5>
          <div>
            {product.isPromotion ? (
              <>
                <p style={{ textDecoration: "line-through" }}>
                  {displayPrice(product.originalPrice)}
                </p>
                <h6>
                  {displayPrice(product.salePrice * product.quantity)}
                  <span className="sale">- {product.promotionPercent} %</span>
                </h6>
              </>
            ) : (
              <h6>{displayPrice(product.salePrice * product.quantity)} </h6>
            )}
          </div>
        </Col>
        <Col xs={6}>
          <div className="control-quantity">
            <Tooltip title="Tăng số lượng">
              <Button
                type="link "
                icon={<PlusOutlined />}
                onClick={() => {
                  updateCart(
                    {
                      id: product.id,
                      quantity: product.quantity,
                    },
                    1
                  );
                }}
              />
            </Tooltip>
            <h6>{product.quantity}</h6>
            <Tooltip title="Giảm số lượng">
              <Button
                type="link "
                icon={<LineOutlined />}
                onClick={() => {
                  updateCart(
                    {
                      id: product.id,
                      quantity: product.quantity,
                    },
                    -1
                  );
                }}
              />
            </Tooltip>
          </div>
          <Tooltip title="Thêm sản phẩm vào wishlist">
            <Button type="link" icon={<HeartOutlined />} onClick={() => {
              addWish(product.id)
            }}/>
          </Tooltip>
          <Tooltip title="Xóa sản phẩm khỏi giỏ hàng">
            <Button
              type="link"
              icon={<DeleteOutlined />}
              onClick={() => {
                deleteCart(product.id);
              }}
            />
          </Tooltip>
        </Col>
      </Row>
    </Card>
  );
}

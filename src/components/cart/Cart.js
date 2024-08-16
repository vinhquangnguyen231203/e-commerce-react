import { Button, Col, Image, Popconfirm, Row, Tooltip } from "antd";
import React, { useState } from "react";
import "./cart.scss";
import { TiDeleteOutline } from "react-icons/ti";
import { RiDeleteBin2Line } from "react-icons/ri";
import { baseURL, emptyImage } from "../../utilities/common";
import { DeleteOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";

export default function Cart(props) {
  // State
  const { product, handleDeleteCart, handleNavigateDetail } = props;

  //Function handler

  const deleteCart = (cartId) => {
    toast.info("Đã xóa khỏi giỏ hàng");
    handleDeleteCart(cartId);
  };

  const navigateDetail = (value) => {
    handleNavigateDetail(value);
  };

  // Render
  return (
    <tr className="cart-row">
      <th scope="row">
        <div
          className="cartItem"
          onClick={() => {
            navigateDetail(product);
          }}
        >
          <Row>
            <Col span={8}>
              <div className="cartItem-image">
                <img
                  src={
                    product.thumbnail
                      ? `${baseURL}${product.thumbnail.url}`
                      : emptyImage
                  }
                  alt="sản phẩm"
                  width="80%"
                />
              </div>
            </Col>
            <Col span={16}>
              <div className="cartItem-content">
                <h6>{product.name}</h6>
              </div>
            </Col>
          </Row>
        </div>
      </th>
      <th>
        <div className="cartItem-content">
          <h6>
            <span>
              <Tooltip title="Xóa sản phẩm">
                <span>
                  <Popconfirm
                    title={`Xóa sản phẩm khỏi giỏ hàng`}
                    description={`Xóa sản phẩm ${product.name.toLowerCase()} ?`}
                    onConfirm={() => deleteCart(product.id)}
                    okText="Đồng ý"
                    cancelText="Không"
                  >
                    <Button
                      size="30px"
                      type="link"
                      icon={<DeleteOutlined size={40} />}
                    />
                  </Popconfirm>
                </span>
              </Tooltip>
            </span>
          </h6>
        </div>
      </th>
    </tr>
  );
}

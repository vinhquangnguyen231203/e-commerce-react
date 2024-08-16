import React from "react";
import { Drawer, Button, List, Typography, Empty } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Container, Table } from "reactstrap";
import Cart from "./Cart";

import { deleteCart } from "../../redux/reducers/cartSlice";
import { useNavigate } from "react-router-dom";
import { formatProductName } from "../../utilities/ulties";

const { Title } = Typography;

const CartDrawer = ({ visible, onClose }) => {
  // State
  const { carts } = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  const navigator = useNavigate();



  // Function handler
  const handleNavigateDetail = (product) => {
      const productName = formatProductName(product.name);
      navigator(`/san-pham/${productName}`, {
        state: {
          product : product
        }
      })

  }
  const handleDeleteCart = (cartID) => {
    dispatch(deleteCart(cartID));
  };

  // Render
  return (
    <Drawer
      title={<Title level={4}>Giỏ Hàng</Title>}
      placement="right"
      onClose={onClose}
      open={visible}
      width={400}
    >
      <Container className="d-flex flex-column  justify-content-center align-items-center">
        {carts.length ? (
          <>
            <Table hover>
              <thead>
                <tr>
                  <th>Sản phẩm</th>
                  <th>Xóa</th>
                </tr>
              </thead>
              <tbody>
                {carts &&
                  carts.map((item, index) => (
                    <Cart
                      key={index}
                      product={item}
                      handleDeleteCart={handleDeleteCart}
                      handleNavigateDetail={handleNavigateDetail}
                    />
                  ))}
              </tbody>
            </Table>
            <Button className="mt-3" size="large" onClick={() => {
              navigator('/gio-hang')
            }}>Kiểm tra giỏ hàng</Button>
          </>
        ) : (
          <Empty />
        )}
      </Container>
    </Drawer>
  );
};

export default CartDrawer;

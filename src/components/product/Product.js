import { Avatar, Button, Card, Col, Image, Rate, Tooltip } from "antd";
import React, { useState } from "react";
import { CgDetailsMore } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa";
import { baseURL, emptyImage } from "../../utilities/common";
import { TbJewishStar } from "react-icons/tb";
import './product.scss'
import { displayPrice } from "../../utilities/ulties";
import { toast } from "react-toastify";




const { Meta } = Card;
export default function Product(props) {
  // State, props
  const { product, handleAddCart, handleAddWish,  handleNavigateDetail } = props;

  // Function handle

  const addToCart = (cartID) => {
    handleAddCart(cartID);
    toast.success('Đã thêm vào giỏ hàng !')
  };

  const addToWish = (cartID) => {
    handleAddWish(cartID);
  };

  const navigateDetail = (value) => {
    handleNavigateDetail(value)
  }
  
  // Render
  return (
    <Col
      lg={8}
      md={12}
      xs={24}
      sm={24}
      className="d-flex justify-content-center align-items-center text-center"
    >
      <Tooltip title={product.name}>
        <Card
          onClick={() => {
            handleNavigateDetail(product)
          }}
          hoverable
          style={{ width: 240, height: 420 }}
          cover={
            <img
              alt="product-images"
              src={
                product.thumbnail
                  ? `${baseURL}${product.thumbnail?.url}`
                  : emptyImage
              }
              height={200}
            />
          }
          actions={[
            <Tooltip title="Thêm sản phẩm vào giỏ hàng">
              <span>
                <Button
                  type="link"
                  icon={<FaCartPlus
                    size={20}
                  />}
                  onClick={() => {
                    addToCart(product.id)
                  }}
                />
              </span>
            </Tooltip>,
            <Tooltip title="Thêm sản phẩm vào wishlist">
              <span>
                <Button
                  type="link"
                  icon={<TbJewishStar
                    size={20}
  
                  />}
                  onClick={() => {
                    addToWish(product.id)
                  }}
                />
              </span>
            </Tooltip>,
            <Tooltip title="Chi tiết sản phẩm">
              <span>
                <Button 
                  type="link"
                  icon={<CgDetailsMore key="ellipsis" size={20} />}
                  onClick={() => {
                    navigateDetail(product)
                  }}
                />
              </span>
            </Tooltip>,
          ]}
        >
          <Meta on
            title={product.name}
            description={<Tooltip title='Lượt đánh giá: 5/5 sao'>
              <span>
                  <Rate value={5} disabled={true} />
              </span>
              <div >
                {
                  product.isPromotion?(
                    <h5>{displayPrice(product.salePrice)} <span className="sale">- {product.promotionPercent} %</span></h5>
                  ): (
                    <h5>{displayPrice(product.salePrice)} </h5>
                  )
                }
              </div>
              
          </Tooltip>} 
          />
        </Card>
      </Tooltip>
    </Col>
  );
}

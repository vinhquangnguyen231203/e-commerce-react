import React from "react";
import "./wishlist.scss";
import { Button, Card, Col, Popconfirm, Rate, Tooltip } from "antd";
import { baseURL, emptyImage } from "../../utilities/common";
import { FaCartPlus } from "react-icons/fa";
import Meta from "antd/es/card/Meta";
import { CgDetailsMore } from "react-icons/cg";
import { displayPrice } from "../../utilities/ulties";
import { DeleteOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";

export default function WishList(props) {
  // State
  const { product, handleAddCart, handleDeleteWish , handleNavigateDetail} = props;

  // Function handler
  const addCart = (cartID) => {
    toast.success("Đã thêm sản phẩm vào giỏ hàng")
    handleAddCart(cartID);
  };

  const deleteWish = (wishID) => {
    toast.info("Đã xóa sản phẩm khỏi wishlist");
    handleDeleteWish(wishID);
  };

  const navigateDetail = (product) => {
    handleNavigateDetail(product)
  }

  // Render
  return (
    <Col xs={24} sm={24} md={12} lg={6} className="box-product-item">
      <Tooltip title={product.name}>
        <Card
         
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
            />
          }
          actions={[
            
            <Tooltip title="Thêm sản phẩm vào giỏ hàng">
              <Popconfirm
                title={`Xóa sản phẩm khỏi wishlist`}
                description={`Bạn có muốn đồng thời xóa sản phẩm ${product.name.toLowerCase()} khỏi wishlist không?`}
                onConfirm={() => deleteWish(product.id)}
                okText="Đồng ý"
                cancelText="Không"
              >
              <span>
                <Button
                  type="link"
                  icon={<FaCartPlus size={20} />}
                  onClick={() => {
                    addCart(product.id);
                  }}
                />
                
              </span>
              </Popconfirm>
            </Tooltip>
            ,
            <Tooltip title="Xóa sản phẩm khỏi wishlist">
              <Popconfirm
                title={`Xóa sản phẩm khỏi giỏ hàng`}
                description={`Xóa sản phẩm ${product.name.toLowerCase()} ?`}
                onConfirm={() => deleteWish(product.id)}
                okText="Đồng ý"
                cancelText="Không"
              >
                <Button
                  type="link"
                  icon={<DeleteOutlined />}
                />
              </Popconfirm>
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
          <Meta
            title={product.name}
            description={
              <Tooltip title="Lượt đánh giá: 5/5 sao">
                <span>
                  <Rate value={5} disabled={true} />
                </span>
                <div>
                  {product.isPromotion ? (
                    <h5>
                      {displayPrice(product.salePrice)}{" "}
                      <span className="sale">
                        - {product.promotionPercent} %
                      </span>
                    </h5>
                  ) : (
                    <h5>{displayPrice(product.salePrice)} </h5>
                  )}
                </div>
              </Tooltip>
            }
          />
        </Card>
      </Tooltip>
    </Col>
  );
}

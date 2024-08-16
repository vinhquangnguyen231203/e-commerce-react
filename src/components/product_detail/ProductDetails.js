import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "reactstrap";
import "./product_details.scss";
import { Breadcrumb, Button, Col, Image, Row, Tabs, Tooltip } from "antd";
import { baseURL, emptyImage } from "../../utilities/common";
import { displayPrice } from "../../utilities/ulties";
import { LineOutlined, PlusOutlined } from "@ant-design/icons";
import ProductDetailsDescription from "./product_detail_description/ProductDetailsDescription";
import ProductDetailsReviews from "./product_detail_review/ProductDetailsReview";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../redux/reducers/cartSlice";
import { toast } from "react-toastify";
import { addWish } from "../../redux/reducers/wishSlice";


export default function ProductDetails() {
  // State
  const location = useLocation();
  const product = location.state?.product;
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.products)
  const {carts} = useSelector(state => state.carts)
  const {wish} = useSelector(state => state.wish)
  const [count, setCount] = useState(1);
  
  // Function handler
  const handleAddWish = (wishID) => {
    const index = wish.findIndex(item => item.id === wishID)

    if(index < 0) {
        const res = products.find(item => item.id === wishID)
        toast.success("Đã thêm sản phẩm vào wishlist")
        dispatch(addWish(res))
    }
    else {
        toast.warning("Sản phẩm đã tồn tại trong wishlist")
        return
    }
  }
  const handleUpCount = () => {
    setCount(prevCount => prevCount + 1)
  }
  const handleDownCount = () => {
      if(count>1) {
        setCount(prevCount => prevCount - 1)
      }
      
  }
  const handleAddCart = (cartID) => {
    const res = products.find((item) => item.id === cartID);
    const index = carts.findIndex((item) => item.id === cartID);

    let updatedData;

    if (index < 0) {
      const newObject = { ...res, quantity: count };
      updatedData = [...carts, newObject];
    } else {
      const data = [...carts];
      updatedData = data.map((item) =>
        item.id === cartID ? { ...item, quantity: item.quantity + count } : item
      );
    }
    toast.success("Đã thêm sản phẩm vào giỏ hàng")
    dispatch(addCart(updatedData));
  }
  const itemsTab = [
    {
      key: '1',
      label: 'Sản phẩm',
      children: <ProductDetailsDescription product={product}/>,
    },
    {
      key: '2',
      label: 'Đánh giá từ khách hàng',
      children: <ProductDetailsReviews/>
    },

  ];



  // Render
  return (
    <Container>
      <Breadcrumb
        items={[
          {
            title: <Link to="/"><h6>Home</h6></Link>
          },
          {
            title: <Link to="/Tất cả sản phẩm"><h6>Tất cả sản phẩm</h6></Link>,
          },
          {
            title: <Link to={`/categories/${product.category.slug}`}><h6>{product.category.name}</h6></Link>,
          },
          {
            title: <h6>{product.name}</h6>,
          },
        ]}
        className="mb-3"
      />
      <Row gutter={[16, 16]}>
        <Col lg={8} md={8} sm={24} xs={24}>
          <div className="detail-image">
            <Tooltip title="Nhấp vào để phóng to hình ảnh">
              <Image
                alt="product-image"
                src={
                  product.thumbnail
                    ? `${baseURL}${product.thumbnail?.url}`
                    : emptyImage
                }
                width="80%"
              />
            </Tooltip>
          </div>
        </Col>
        <Col lg={16} md={16} sm={24} xs={24}>
          <div className="detail-content">
            <h4>{product.name}</h4>
            <div className="detail-content-price">
              {product.isPromotion ? (
                <>
                  <span className="detail-price-original">
                    {displayPrice(product.originalPrice)}
                  </span>
                  <h2 className="detail-price-sale mx-4">
                    {displayPrice(product.salePrice)}
                  </h2>
                  <span className="detail-price-percent">
                    -{product.promotionPercent} %
                  </span>
                </>
              ) : (
                <div>
                  <h2 className="detail-price-sale mx-4">
                    {displayPrice(product.salePrice)}
                  </h2>
                </div>
              )}
            </div>
          </div>
          <div className="details-count">
              <Tooltip title="Tăng số lượng">
                <Button
                  type="link"
                  icon={<PlusOutlined />}
                  onClick={() => {
                    handleUpCount();
                  }}
                />
              </Tooltip>
              <h6 className="title-total">{count}</h6>
              <Tooltip title="Giảm số lượng">
                <Button
                  type="link"
                  icon={<LineOutlined />}
                  onClick={() => {
                    handleDownCount()
                  }}
                />
              </Tooltip>
            </div>
            
          <div className="details-content-handle">
            
            <Button
              type="primary"
              className="btn-add-to-cart"
              onClick={() => {
                handleAddCart(product.id)
              }}
            >
              Thêm vào giỏ hàng
            </Button>
            
            <Button
              type="default"
              className="btn-add-to-favorite"
              onClick={() => {
                handleAddWish(product.id)
              }}
            >
              Thêm vào yêu thích
            </Button>
          </div>
        </Col>
      </Row>

      <Container className="w-100">
          <Tabs defaultActiveKey="1"  items={itemsTab} />
      </Container>
    </Container>
  );
}

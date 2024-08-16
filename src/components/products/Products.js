import React, { useEffect, useState } from "react";
import "./products.scss";
import { Container } from "reactstrap";
import { Col, Pagination, Row, Skeleton, Tabs } from "antd";
import Categories from "../categories/Categories";
import { useDispatch, useSelector } from "react-redux";
import { getProductThunk } from "../../redux/thunk/productThunk";
import Product from "../product/Product";
import { addCart, updateCart } from "../../redux/reducers/cartSlice";
import { addWish } from "../../redux/reducers/wishSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import diacritics from "diacritic";
import { formatProductName } from "../../utilities/ulties";

export default function Products() {
  // State
  const { products, pagination, status, error } = useSelector(
    (state) => state.products
  );
  const { carts, total } = useSelector((state) => state.carts);
  const { wish } = useSelector((state) => state.wish);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 9,
    _sort: "salePrice:ASC",
  });

  // useEffect
  useEffect(() => {
    if (status === "idle") {
      dispatch(getProductThunk(filters));
    }
  }, [dispatch, status, filters]);

  useEffect(() => {
    dispatch(getProductThunk(filters));
  }, [filters, dispatch]);

  // Function handle
  const handlePageChange = (page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: page,
    }));
  };

  const handleSortChange = (sort) => {
    setFilters((prevFilters) => ({ ...prevFilters, _sort: sort }));
  };

  const handleCategoryChange = (categoryID) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      "category.id": categoryID,
    }));
  };

  const handleNavigateDetail = (product) => {
    const productName = formatProductName(product.name);

    navigate(`/san-pham/${productName}`, {
      state: {
        product: product,
      },
    });
  };

  const handleAddCart = (cartID) => {
    const res = products.find((item) => item.id === cartID);
    const index = carts.findIndex((item) => item.id === cartID);

    let updatedData;

    if (index < 0) {
      const newObject = { ...res, quantity: 1 };
      updatedData = [...carts, newObject];
    } else {
      const data = [...carts];
      updatedData = data.map((item) =>
        item.id === cartID ? { ...item, quantity: item.quantity + 1 } : item
      );
    }
    dispatch(addCart(updatedData));
  };

  const handleAddWish = (cartID) => {
    const res = products.find((item) => item.id === cartID);
    const index = wish.findIndex((item) => item.id === cartID);

    if (index >= 0) {
      toast.warning("Đã tồn tại trong wishlist");
      return;
    }
    toast.success("Thêm sản phẩm vào wishlist");
    dispatch(addWish(res));
  };

  // LayoutProduct
  const layoutProduct = () => {
    if (status === "loading") {
      return (
        <Row
          gutter={[16, 20]}
          className="d-flex justify-content-center align-items-center"
        >
          {[...Array(12)].map((_, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <Skeleton active />
            </Col>
          ))}
        </Row>
      );
    }

    return (
      <Container>
        <div className="product-render">
          <Row
            gutter={[16, 20]}
            className="d-flex justify-content-center align-items-center"
          >
            {products &&
              products.map((item, index) => (
                <Product
                  key={index}
                  product={item}
                  handleAddCart={handleAddCart}
                  handleAddWish={handleAddWish}
                  handleNavigateDetail={handleNavigateDetail}
                />
              ))}
          </Row>
        </div>
        <div className="w-100 d-flex flex-column justify-content-center align-items-center">
          <Pagination
            className="mt-3"
            current={pagination.page}
            pageSize={pagination.limit}
            total={pagination.total}
            onChange={handlePageChange}
            showSizeChanger={false}
          />
        </div>
      </Container>
    );
  };

  // Layout product2
  const layoutProduct2 = () => {
    if (status === "loading") {
      return (
        <Row
          gutter={[16, 20]}
          className="d-flex justify-content-center align-items-center"
        >
          {[...Array(12)].map((_, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <Skeleton active />
            </Col>
          ))}
        </Row>
      );
    }

    return (
      <Container>
        <div className="product-render">
          <Row
            gutter={[16, 20]}
            className="d-flex justify-content-center align-items-center"
          >
            {products &&
              products.map((item, index) => (
                <Product
                  key={index}
                  product={item}
                  handleAddCart={handleAddCart}
                  handleAddWish={handleAddWish}
                  handleNavigateDetail={handleNavigateDetail}
                />
              ))}
          </Row>
        </div>
        <div className="w-100 d-flex flex-column justify-content-center align-items-center">
          <Pagination
            className="mt-3"
            current={pagination.page}
            pageSize={pagination.limit}
            total={pagination.total}
            onChange={handlePageChange}
            showSizeChanger={false}
          />
        </div>
      </Container>
    );
  };
  const handleChangeTab = (key) => {
    let value = "salePrice:ASC";
    key === "1" ? handleSortChange(value) : handleSortChange("salePrice:DESC");
  };

  const handleClearFilter = () => {
    setFilters({
      _page: 1,
      _limit: 9,
      _sort: "salePrice:ASC",
    });
  };
  // Ant-Design
  const items = [
    {
      key: "1",
      label: "Giá từ thấp đến cao",
      children: layoutProduct(),
    },
    {
      key: "2",
      label: "Giá từ cao đến thấp",
      children: layoutProduct2(),
    },
  ];

  // Render
  return (
    <Container>
      <Row gutter={[16, 24]}>
        <Col xs={24} lg={8}>
          <Categories
            handleCategoryChange={handleCategoryChange}
            handleClearFilter={handleClearFilter}
          />
        </Col>
        <Col xs={24} lg={16}>
          <Tabs defaultActiveKey="1" items={items} onChange={handleChangeTab} />
        </Col>
      </Row>
    </Container>
  );
}

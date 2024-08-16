import { Empty, Row } from "antd";
import React from "react";
import { TbJewishStar } from "react-icons/tb";
import { Container } from "reactstrap";
import "./wishLists.scss";
import { useDispatch, useSelector } from "react-redux";
import WishList from "../wishlist/WishList";
import { addCart } from "../../redux/reducers/cartSlice";
import { deleteWish } from "../../redux/reducers/wishSlice";
import { formatProductName } from "../../utilities/ulties";
import { useNavigate } from "react-router-dom";


export default function WishLists() {
  // State
  const { wish } = useSelector((state) => state.wish);
  const {products} = useSelector(state => state.products)
  const {carts} = useSelector(state => state.carts)
  const dispatch = useDispatch();
  const navigator = useNavigate();

  // Functional handler
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

  const handleDeleteWish = (wishID) => {
    dispatch(deleteWish(wishID))
  }
  const handleNavigateDetail = (product) => {
    const productName = formatProductName(product.name);
    navigator(`/san-pham/${productName}`, {
      state: {
        product : product
      }
    })

}

  // Render
  return (
    <Container className="text-center">
      <div className="box-title ">
        <span>
          <TbJewishStar size={30} />
        </span>{" "}
        <h4>WishList</h4>
      </div>

      {wish.length > 0 ? (
        <Container className="mt-5 box-product">
          <Row gutter={[16, 16]} justify="center">
            {wish &&
              wish.map((item, index) => (
                <WishList key={index} product={item} handleAddCart={handleAddCart} handleDeleteWish={handleDeleteWish}  handleNavigateDetail={handleNavigateDetail}/>
              ))}
          </Row>
        </Container>
      ) : (
        <Empty className="mt-5" />
      )}
    </Container>
  );
}

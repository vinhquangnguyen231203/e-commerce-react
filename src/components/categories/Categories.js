import React, { useEffect, useState } from 'react';
import {Container, Button} from 'reactstrap';
import './categories.scss';
import {Checkbox, Divider, Slider} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryThunk } from '../../redux/thunk/categoryThunk';
import { useNavigate } from 'react-router-dom';

export default function Categories(props) {
  // State
  const [priceValue, setPriceValue] = useState(30)
  const dispatch = useDispatch();
  const {categories} = useSelector(state => state.categories)
  const {handleCategoryChange, handleClearFilter} = props
  const navigate = useNavigate();
  // Function handle
  const clearFilter = () => {
      handleClearFilter();
  }

  const handleChangePrice = (value) => {
      setPriceValue(value)
  }

  const onChangeCategory = (categoryID) => {
    handleCategoryChange(categoryID)
  }


  useEffect(() => {
    dispatch(getCategoryThunk())
  }, [dispatch])



  // Render
  return (
    <Container id="filter-category">
      {/* Category */}
      <div className="box">
        <div className="box-title">
          <p className='title'>Danh mục sản phẩm</p>
        </div>
        <div className="box-content">
          {/* <Checkbox>Quần áo</Checkbox> <br /> */}
          {
            categories && categories.map((item, index) =>(
              <li onClick={() => {
                onChangeCategory(item.id)
              }} key={index}>{item.name}</li>
            ))
          }
        </div>
        <Divider />
        
        {/* Filter price */}
        <div className="box-price">
          <div className="box-price-title">
            <p className='title'>Lọc sản phẩm theo giá</p>
          </div>
          <div className="box-price-content">
            <p>Giá bắt đầu 
              <span>

              </span>
            </p>
          </div>
        </div>

        {/* Clear Filter */}
        <Divider/>
        <Button
          onClick={clearFilter}
          className="clear-filter-btn"
          
        >
          Clear Filter
        </Button>
      </div>
    </Container>
  );
}

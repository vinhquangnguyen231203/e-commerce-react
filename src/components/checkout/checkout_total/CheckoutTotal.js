import {Button, Divider, Input} from 'antd';
import React from 'react';
import {MdOutlineLocalShipping} from 'react-icons/md';
import {Container} from 'reactstrap';

import {useSelector} from 'react-redux';

import {BsMinecartLoaded} from 'react-icons/bs';
import {CiMoneyBill} from 'react-icons/ci';


import './checkoutTotal.scss'
import { summarySelectors } from '../../../redux/selectors/summarySelector';
import ContinueShopping from '../../cartPage/ContinueShopping';
import { displayPrice } from '../../../utilities/ulties';

export default function CheckoutTotal() {
  // State
  const total = useSelector(summarySelectors);

  // Render
  return (
    <Container>
      <div className="checkout-total">
        <h5 className="text-start">Mã khuyến mãi</h5>
        <div className="checkout-price-sale ">
          <Input className="w-50" placeholder="Nhập mã khuyến mãi" />
          <Button type="primary" className="mx-3">
            Nhập mã
          </Button>
        </div>
        <Divider />
        <div className="checkout-total text-start">
          <div className="checkout-total-shipping">
            <span>
              <MdOutlineLocalShipping size={25} />
            </span>

            <h6 className="mx-2">Vận chuyển:</h6>

            <span className="mx-2">
              <p style={{color: 'blue'}}>Miễn phí</p>
            </span>
          </div>

          <div className="checkout-total-shipping">
            <span>
              <BsMinecartLoaded size={25} />
            </span>

            <h6 className="mx-2">Tiền sản phẩm:</h6>

            <span className="mx-2">
              <p style={{color: 'blue'}}>{displayPrice(total)}</p>
            </span>
          </div>

          <Divider />

          <div className="checkout-total-all text-start">
            <span>
              <CiMoneyBill size={25} />
            </span>

            <h6 className="mx-2">Tiền sản phẩm:</h6>

            <span className="mx-2">
              <p  style={{color: 'blue'}}>{displayPrice(total)}</p>
            </span>
          </div>
        </div>
      </div>


    </Container>
  );
}

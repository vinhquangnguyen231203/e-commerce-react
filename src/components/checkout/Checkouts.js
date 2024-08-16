import {Col, Divider, Empty, Form, Input, Radio, Row, Space} from 'antd';
import React, {useState} from 'react';
import {Container} from 'reactstrap';
import './checkouts.scss';
import {useSelector} from 'react-redux';
import InputCheckout from './input_checkout/InputCheckout';
import CheckoutTotal from './checkout_total/CheckoutTotal';

export default function Checkouts() {
  // State
  const [value, setValue] = useState(1);
  const {carts} = useSelector((state) => state.carts);

  //Function handler
  const onChange = (e) => {
    setValue(e.target.value);
  };

  // Render
  return (
    <Container className="text-center ">
      <h2>Thanh toán sản phẩm</h2>
      {carts.length > 0 ? (
        <Container>
          <div className="box mt-5">
            <Row gutter={[16, 16]}>
              <Col md={14} sm={24}>
                <div className="box-procedure text-start ">
                  <h4>Phuơng thức thanh toán</h4>
                  <Divider />
                  <div className="box-procedure-radio mt-4">
                    <Radio.Group onChange={onChange} value={value}>
                      <Space direction="vertical">
                        <Radio value={1}>Thanh toán COD</Radio>
                        <Radio value={2}>Thanh toán bằng tín dụng</Radio>
                      </Space>
                    </Radio.Group>
                  </div>
                </div>

                {/* Infomation form */}
                <div className='box-checkout-info'>
                    <InputCheckout/>
                </div>
              </Col>

              {/* Total and cart item */}
              <Col md={10} sm={24}>
                <CheckoutTotal/>
              </Col>
            </Row>
          </div>
        </Container>
      ) : (
        <Empty />
      )}
    </Container>
  );
}

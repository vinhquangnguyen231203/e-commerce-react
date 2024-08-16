import {Button, Col, Row} from 'antd';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Container} from 'reactstrap';
import './continueshopping.scss';

export default function ContinueShopping() {
  // State
  const navigation = useNavigate();

  // Render
  return (
    <Container className="text-center box-around my-5">
      <Row gutter={[16, 16]}>
        <Col md={16} sm={24}>
            <div className="box-continue text-start">
                <h4>Tiếp tục mua sắm</h4>
                <p>
                    Khám phá thêm nhiều sản phẩm của chúng tôi!!!
                </p>
            </div>
        </Col>
        <Col md={8} sm={24}>
          <div className="box-function">
            <Button className='btn-continue ' onClick={() => {
                navigation('/san-pham')
            }}>Tiếp tục mua sắm</Button>
            <Button className='btn-payment' onClick={() => {
                navigation('/thanh-toan')
            }}> Thanh toán </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

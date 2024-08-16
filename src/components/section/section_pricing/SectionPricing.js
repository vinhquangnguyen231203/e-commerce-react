import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import './section_pricing.scss';

export default function SectionPricing() {
  return (
    <Container className="my-5 p-5">
      <Row>
        <Col
          lg={12}
          md={12}
          xs={12}
          sm={12}
          className="justify-content-center align-items-center text-center"
        >
          <h3>Gói hội viên</h3>
          <p>Khám phá thêm nhiều quyền lợi và tiết kiệm khi đăng ký hội viên</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col
          lg={4}
          md={12}
          xs={12}
          sm={12}
          className="d-flex justify-content-center align-items-center mb-5"
        >
          <div className="box box-brown">
            <div className="box-title mt-5">
              <h4 style={{color: 'brown'}}>Bronze Member</h4>
            </div>
            <div className="box-price mt-5">
              <p>
                <span>99.000 VNĐ</span>/tháng
              </p>
            </div>
            <div className="box-content mt-4 d-flex flex-column ">
              <p><span>Giảm giá 5%</span> trên mọi đơn hàng</p>
              <p>Nhận thông báo sớm về các chương trình khuyến mãi</p>
              <p>Tặng mã <span>giảm giá sinh nhật 10%</span></p>
            </div>
          </div>
        </Col>
        <Col
          lg={4}
          md={12}
          xs={12}
          sm={12}
          className="d-flex justify-content-center align-items-center mb-5"
        >
          <div className="box box-sliver">
            <div className="box-title mt-5">
              <h4 style={{color: 'red'}}>Sliver Member</h4>
            </div>
            <div className="box-price mt-5">
              <p>
                <span>199.000 VNĐ</span>/tháng
              </p>
            </div>
            <div className="box-content mt-4 d-flex flex-column ">
                <p><span>Giảm giá 10%</span> trên mọi đơn hàng</p>
              <p>Tặng mã <span>giảm giá sinh nhật 20%</span></p>
              <p>Tặng 1 mã <span>giảm giá 15% mỗi tháng</span></p>
              <p>Tham gia các sự kiện <span>độc quyền cho thành viên Silver</span></p>
            </div>
          </div>
        </Col>
        <Col
          lg={4}
          md={12}
          xs={12}
          sm={12}
          className="d-flex justify-content-center align-items-center mb-5"
        >
          <div className="box box-gold">
            <div className="box-title mt-5">
              <h4 style={{color: 'blue'}}>Gold Member</h4>
            </div>
            <div className="box-price mt-5">
              <p>
                <span>299.000 VNĐ</span>/tháng
              </p>
            </div>
            <div className="box-content mt-4 d-flex flex-column ">
                <p><span>Giảm giá 15%</span> trên mọi đơn hàng</p>
                <p><span>Ưu tiên xử lý đơn hàng và giao hàng nhanh nhất</span></p>
                <p>Tặng<span> 2 mã giảm giá 20% mỗi tháng</span></p>
                <p>Tham gia các sự kiện <span>độc quyền cho thành viên Gold</span></p>
                <p><span>Hỗ trợ khách hàng 24/7</span></p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

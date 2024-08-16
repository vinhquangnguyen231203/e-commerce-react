import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './section_countup.scss';

export default function SectionCountup() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section id="countup" ref={ref}>
      <div className="bg-overlay"></div>
      <Container>
        <Row className="d-flex justify-content-center text-center align-items-center">
          <Col lg={4} xs={12} sm={12}>
            <div className="box">
              <span className="box-icon">📦</span>
              <div className="box-content">
                {inView && <h3><CountUp end={25000} duration={3} /></h3>}
              </div>
              <div className="box-title">
                <h4>Tổng đơn hàng đã xử lý</h4>
              </div>
            </div>
          </Col>

          <Col lg={4} xs={12} sm={12}>
            <div className="box">
              <span className="box-icon">😊</span>
              <div className="box-content">
                {inView && <h3><CountUp end={10000} duration={3} />+</h3>}
              </div>
              <div className="box-title">
                <h4>Số lượng khách hàng hài lòng</h4>
              </div>
            </div>
          </Col>

          <Col lg={4} xs={12} sm={12}>
            <div className="box">
              <span className="box-icon">📈</span>
              <div className="box-content">
                {inView && <h3><CountUp end={50000} duration={3} />+</h3>}
              </div>
              <div className="box-title">
                <h4>Số lượng sản phẩm bán ra</h4>
              </div>
            </div>
          </Col>

          
        </Row>
      </Container>
    </section>
  );
}

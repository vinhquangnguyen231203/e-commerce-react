import { Carousel } from "antd";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import tech from "../../../assets/advertise/Technology.jpg";
import apple from "../../../assets/advertise/apple.jpg";
import clothes1 from '../../../assets/advertise/clothes1.jpg'
import clothes2 from '../../../assets/advertise/clothes2.jpg'
import furniture1 from '../../../assets/advertise/furniture1.jpg'
import furniture2 from '../../../assets/advertise/furniture2.jpg'
import shoes1 from '../../../assets/advertise/shoes1.png'
import shoes2 from '../../../assets/advertise/shoes.jpg'


const contentStyle = {
  margin: 0,
};
export default function AdvertiseCarousel() {
  return (
    <Container fluid className="p-0">
      <Carousel
        arrows
        infinite={true}
        autoplaySpeed={2300}
        autoplay={true}
        draggable={true}
      >

        {/* Clothes */}
        <div>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12} className="mb-2">
              <div className="box-image">
                <img alt="tech" src={clothes1} width="100%" />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12} className="mb-2">
              <div className="box-image">
                <img alt="tech" src={clothes2} width="100%" />
              </div>
            </Col>
          </Row>
        </div>

        {/* Tech */}
        <div>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12} className="mb-2">
              <div className="box-image">
                <img alt="tech" src={apple} width="100%" />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12} className="mb-2">
              <div className="box-image">
                <img alt="tech" src={tech} width="100%" />
              </div>
            </Col>
          </Row>
        </div>

        {/* Furniture */}
        <div>
        <Row>
            <Col lg={6} md={6} sm={12} xs={12} className="mb-2">
              <div className="box-image">
                <img alt="tech" src={furniture1} width="100%" />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12} className="mb-2">
              <div className="box-image">
                <img alt="tech" src={furniture2} width="100%" />
              </div>
            </Col>
          </Row>
        </div>
          
          {/* Shoes */}
          <div>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12} className="mb-2">
              <div className="box-image">
                <img alt="tech" src={shoes1} width="100%" />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12} className="mb-2">
              <div className="box-image">
                <img alt="tech" src={shoes2} width="100%" height='100%'/>
              </div>
            </Col>
          </Row>
          </div>
      </Carousel>
    </Container>
  );
}

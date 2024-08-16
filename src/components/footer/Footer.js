import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./footer.scss";
import logo from "../../assets/images/omnistore-high-resolution-logo-transparent.png";
import appstore_logo from "../../assets/download/app-store-n.svg";
import googleplay_logo from "../../assets/download/gg-play-n.svg";

export default function Footer() {
  return (
    <Container fluid className="footer">
      <Container>
        <Row>
          <Col lg={3} sm={6} xs={12}>
            <div className="box">
              <div className="box__image">
                <img alt="logo" src={logo} width={100} height={50} />
              </div>
              <div className="box__content mt-3">
                <h5>CÔNG TY CỔ PHẦN THƯƠNG MẠI ĐIỆN TỬ OMNISTORE</h5>
                {/* <p>
                  <span>Trụ sở kinh doanh: </span> SN 20, ngách 234/35, Đ.Hoàng
                  Quốc Việt, P.Cổ Nhuế 1, Q.Bắc Từ Liêm, TP.Hà Nội.
                </p> */}
                <p>
                  <span>Địa chỉ liên hệ: </span> Tầng 4 Tòa Vinaconex-34 Đ.Láng, Q.Đống Đa, TP.Hà Nội.
                  <span>
                    <iframe className="mt-2"
                      title="GoogleMap - OMNISTORE"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.4467521980146!2d105.81069611199621!3d21.01480308055023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab64dbdbe56b%3A0xd8e0835979630a0d!2sVinaconex%20Tower!5e0!3m2!1sen!2s!4v1722898049459!5m2!1sen!2s"
                      width="100%"
                      height="300px"
                      style={{ border: '3px blue solid'}}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </span>
                </p>
              </div>
            </div>
          </Col>
          <Col lg={3} sm={6} xs={12}>
            <div className="box_no">
              <div className="box__title">
                <h5>Về OmniStore</h5>
                <p>Giới thiệu</p>
                <p>Tuyển dụng</p>
              </div>
            </div>
          </Col>

          <Col lg={3} sm={6} xs={12}>
            <div className="box_no">
              <div className="box__title">
                <h5>Thông tin</h5>
                <p>Điều kiện và điều khoản giao dịch</p>
                <p>Chính sách thanh toán</p>
                <p>Chính sách bảo vệ thanh toán</p>
                <p>Chính sách bảo vệ thông tin cá nhân</p>
                <p>Điều kiện vận chuyển</p>
              </div>
            </div>
          </Col>
          <Col lg={3} sm={6} xs={12}>
            <div className="box_no">
              <div className="box_tile d-flex flex-column justify-content-center align-items-center">
                <h5>Tải ứng dụng trên điện thoại</h5>
                <img alt="appstore" src={appstore_logo} />
                <img alt="google_play" src={googleplay_logo} className="mt-3" />
              </div>
            </div>
          </Col>
        </Row>
        <hr />
        <div className="mt-3">
          <p className="copyright text-center">
            @2024 - E-Commerce OmniStore - No coppyright reversed
          </p>
        </div>
      </Container>
    </Container>
  );
}

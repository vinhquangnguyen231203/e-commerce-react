import React from "react";

import AdvertiseCarousel from "./AdvertiseCarousel";
import { Container, Row } from "reactstrap";

export default function SectionAdvertise() {
  return (
    <Container>
      <Row>
        <div className="box">
          <div className="box-video">
            {/* <iframe
              width="100%"
              height="680"
              src="https://www.youtube.com/embed/hHqW0gtiMy4"
              title="Ecommerce Advertising Video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe> */}
          </div>
        </div>
      </Row>
      <AdvertiseCarousel />
    </Container>
  );
}

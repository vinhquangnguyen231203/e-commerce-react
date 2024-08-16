import { Collapse } from "antd";

import React from "react";
import { Container } from "reactstrap";

export default function ProductDetailsDescription(props) {
  // state
  const { product } = props;

  const items = [
    {
      key: "1",
      label: "Thông tin sản phẩm",
      children: <Container>{product.shortDescription}</Container>,
    },
    {
      key: "2",
      label: "Chi tiết sản phẩm",
      children: (
        <Container className="markdown-content">
          <div dangerouslySetInnerHTML={{ __html: product.description }} />
        </Container>
      ),
    },
  ];

  return <Collapse items={items} className="w-100" defaultActiveKey={["1"]} />;
}

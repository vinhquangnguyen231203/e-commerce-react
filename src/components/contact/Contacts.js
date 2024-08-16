// ContactPage.jsx
import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Form, Input, Button, Space, notification } from "antd";
import { MailOutlined } from "@ant-design/icons";
import emailjs from "emailjs-com"; // Import EmailJS
import "./contacts.scss";
import TextArea from "antd/es/input/TextArea";
import { toast } from "react-toastify";

const Contacts = () => {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement) => {
    api.info({
      message: `Đăng ký thành công`,
      description:
        "Bạn đã mua hàng thành công - Vui lòng kiểm tra hòm thư để xem chi tiết hóa đơn",
      placement,
    });
  };
  const onFinish = (values) => {
    const templateParams = {
      name: values.name,
      phone: values.phone,
      email: values.email,
      message: values.message,
    };

    toast
      .promise(
        emailjs.send(
          "service_lmcfy18", // Thay bằng serviceID của bạn
          "template_1k94eko", // Thay bằng templateID của bạn
          templateParams,
          "_z7g04iMK0R0_oiLQ" // Thay bằng userID của bạn
        ),
        {
          pending: "Đang gửi thông tin ...",
          success: "Đã gửi thông báo thành công!",
          error: "Xảy ra lỗi khi gửi thông báo",
        }
      )
      .then((res) => {
        openNotification("topLeft"); // Gọi openNotification khi đăng ký thành công
        form.resetFields(); // Reset form sau khi gửi thành công
      })
      .catch((error) => {
        console.log("Failed to send email.", error);
      });
  };

  return (
    <div className="contact-page">
      <Container>
        <Row className="justify-content-center align-items-center h-100">
          <Col xs={24} md={18} lg={12}>
            <div className="contact-form-wrapper">
              <h1 className="contact-title">
                <MailOutlined className="contact-icon" /> Liên hệ
              </h1>
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                initialValues={{
                  name: "",
                  phone: "",
                  email: "",
                  message: "",
                }}
              >
                <Form.Item
                  label="Tên"
                  name="name"
                  rules={[
                    { required: true, message: "Vui lòng nhập tên của bạn!" },
                  ]}
                >
                  <Input placeholder="Nhập tên của bạn" />
                </Form.Item>
                <Form.Item
                  label="Số điện thoại"
                  name="phone"
                  rules={[
                    { required: true, message: "Vui lòng nhập số điện thoại!" },
                    {
                      pattern: /^[0-9]{10,11}$/,
                      message: "Số điện thoại không hợp lệ!",
                    },
                  ]}
                >
                  <Input placeholder="Nhập số điện thoại của bạn" />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Vui lòng nhập email của bạn!" },
                    { type: "email", message: "Email không hợp lệ!" },
                  ]}
                >
                  <Input placeholder="Nhập email của bạn" />
                </Form.Item>
                <Form.Item
                  label="Nội dung cần tư vấn và trao đổi"
                  name="message"
                  rules={[
                    { required: true, message: "Vui lòng nhập nội dung!" },
                  ]}
                >
                  <TextArea rows={4} placeholder="Nhập nội dung cần tư vấn" />
                </Form.Item>
                <Space direction="vertical" style={{ width: "100%" }}>
                  <Button type="primary" htmlType="submit" block>
                    Gửi thông tin
                  </Button>
                </Space>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contacts;

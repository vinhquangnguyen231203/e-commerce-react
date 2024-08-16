import { Button, Divider, Form, Input, notification } from "antd";
import React from "react";
import { Container } from "reactstrap";
import emailjs from "emailjs-com";
import { servicesID, userID } from "../../../utilities/common";
import { useSelector } from "react-redux";
import { summarySelectors } from "../../../redux/selectors/summarySelector";
import { toast } from "react-toastify";

export default function InputCheckout() {
  const [form] = Form.useForm();
  const { carts } = useSelector((state) => state.carts);
  const { total } = useSelector(summarySelectors);
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement) => {
    api.info({
      message: `Đăng ký thành công`,
      description:
        "Bạn đã mua hàng thành công - Vui lòng kiểm tra hòm thư để xem chi tiết hóa đơn",
      placement,
    });
  };

  const handleOrder = (values) => {
    const orderData = {
      customer_name: values.name,
      customer_email: values.email,
      order_items: carts.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        total: item.price * item.quantity,
      })),
      total_price: total,
    };

    toast
      .promise(
        emailjs.send(servicesID, "template_e3a2tig", orderData, userID),
        {
          pending: "Đang gửi thông tin thanh toán...",
          success: "Đăng ký nhận thông báo thành công!",
          error: "Xảy ra lỗi khi thanh toán",
        }
      )
      .then(() => {
        openNotification("topLeft"); // Gọi openNotification khi đăng ký thành công
        form.resetFields(); // Reset form sau khi gửi thành công
      })
      .catch((error) => {
        console.log("Failed to send email.", error);
      });
  };

  return (
    <Container className="text-start d-flex flex-column justify-content-center align-items-start">
      {contextHolder}
      <h2>Thông tin thanh toán</h2>
      <Divider />
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={handleOrder}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Nhập email!!" },
            {
              type: "email",
              message: "Thông tin nhập không phải trường email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Nhập tên !!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Số điện thoại"
          name="phone"
          rules={[
            { required: true, message: "Nhập số điện thoại !!" },
            {
              pattern: /^(0[3|5|7|8|9])+([0-9]{8})$/,
              message: "Invalid phone number format!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Địa chỉ"
          name="address"
          rules={[{ required: true, message: "Nhập địa chỉ !!" }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Thanh toán
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
}

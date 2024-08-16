import { Button, notification } from 'antd';
import React, { useState } from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import { Col, Container, Form, Input, Row } from 'reactstrap';
import './section_signup.scss';
import emailjs from 'emailjs-com';
import { servicesID, templateID, userID } from '../../../utilities/common';
import { toast } from 'react-toastify';

export default function SectionSingup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [api, contextHolder] = notification.useNotification();
  
  // Function handler for notification
  const openNotification = (placement) => {
    api.info({
      message: `Đăng ký thành công`,
      description:
        'Bạn đã đăng ký nhận thông báo thành công- Vui lòng kiểm tra hòm thư- Cảm ơn bạn đã đăng ký!',
      placement,
    });
  };

  const handleRegister = (e) => {
    
    e.preventDefault();
    
    const templateParams = {
      user_name: name,
      user_email: email,
    };

    toast.promise(
      emailjs.send(`${servicesID}`, `${templateID}`, templateParams, `${userID}`),
      {
        pending: 'Đang gửi thông tin đăng ký...',
        success: 'Đăng ký nhận thông báo thành công!',
        error: 'Xảy ra lỗi khi đăng ký'
      }
    ).then(() => {
      openNotification('topLeft'); // Gọi openNotification khi đăng ký thành công
      setEmail("");
      setName("");
    }).catch((error) => {
      console.log('Failed to send email.', error);
    });
  };

  // Render
  return (
    <>
      {contextHolder}
      <Container className="d-flex flex-column justify-content-center align-items-center p-5 bg-section">
        <Row className="my-5 text-center">
          <div className="box-content">
            <h3>Đăng ký ngay để nhận nhiều ưu đãi và hấp dẫn</h3>
            <p className='my-2'>Tặng mã 10% và nhiều ưu đãi khác khi đăng ký</p>
          </div>

          <div className="mt-4 w-100">
            <Form onSubmit={handleRegister}>
              <Row className="d-flex align-items-center justify-content-center">
                <Col lg={12} sm={12} xs={12} className="d-flex flex-column justify-content-center align-items-center mb-4">
                  <Input
                    placeholder="Tên đăng ký *"
                    required={true}
                    value={name}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    className='w-75 my-3 input-data'
                  />
                  <Input
                    placeholder="Tên email *"
                    required={true}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-75 input-data'
                  />
                </Col>
              </Row>
              <Row className="d-flex align-items-center justify-content-center">
                <Button
                  type="primary"
                  icon={<IoMdCheckmark />}
                  size="large"
                  className="btn-submit"
                  htmlType='submit'
                >
                  Đăng ký
                </Button>
              </Row>
            </Form>
          </div>
        </Row>
      </Container>
    </>
  );
}

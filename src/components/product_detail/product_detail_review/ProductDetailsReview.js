import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Avatar, Rate, List, Typography, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './product_review.scss'

const { Title, Paragraph } = Typography;

const reviews = [
    {
        id: 1,
        name: 'Nguyễn Văn A',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        rating: 4,
        comment: 'Sản phẩm rất tốt, chất lượng tốt hơn mong đợi!',
    },
    {
        id: 2,
        name: 'Trần Thị B',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
        rating: 5,
        comment: 'Dịch vụ tuyệt vời, giao hàng nhanh chóng và sản phẩm chính hãng!',
    },
    {
        id: 3,
        name: 'Lê Văn C',
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
        rating: 3,
        comment: 'Sản phẩm ổn nhưng có thể cải thiện hơn.',
    },
];

export default function ProductDetailsReviews() {
    return (
        <Container className="reviews-container">
            <Title level={3}>Đánh giá từ khách hàng</Title>
            <List
                dataSource={reviews}
                renderItem={item => (
                    <List.Item key={item.id} className="review-item">
                        <Row gutter={16} align="middle">
                            <Col>
                                <Avatar src={item.avatar} icon={<UserOutlined />} size={64} />
                            </Col>
                            <Col flex="auto">
                                <div className="review-content">
                                    <Title level={4} className="review-name">{item.name}</Title>
                                    <Rate disabled value={item.rating} />
                                    <Paragraph className="review-comment">{item.comment}</Paragraph>
                                </div>
                            </Col>
                        </Row>
                        <Divider />
                    </List.Item>
                )}
            />
        </Container>
    );
}

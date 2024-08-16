import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './section_category.scss'
// Image
import clothes from '../../../assets/categories/Clothes.jpeg'
import electronic from '../../../assets/categories/Electronic.jpeg'
import furniture from '../../../assets/categories/Furniture.jpeg'
import shoes from '../../../assets/categories/Shoes.jpeg'
import { Divider } from 'antd'

export default function SectionCategory() {
  return (
    <Container>
        <h3 className='font-title'>Danh mục sản phẩm</h3>
        <Row className='text-center d-flex justify-content-center align-items-center mt-5'>
            <Col lg={3} md={6} sm={12} xs={12}>
                <div className="box">
                    <div className="box-image">
                        <div className='box-image-contain'>
                            <img className='image' src={clothes} alt="clothes" width='100%'/>
                        </div>
                    </div>
                    <Divider/>
                    <div className="box-title">
                        <p>Quần áo</p>
                    </div>
                </div>
            </Col>
            <Col lg={3} md={6} sm={12} xs={12}>
                <div className="box">
                    <div className="box-image">
                        <div className='box-image-contain'>
                            <img className='image' src={electronic} alt="electronics" width='100%'/>
                        </div>
                    </div>
                    <Divider/>
                    <div className="box-title">
                        <p>Điện tử</p>
                    </div>
                </div>
            </Col>
            <Col lg={3} md={6} sm={12} xs={12}>
                <div className="box">
                    <div className="box-image">
                        <div className='box-image-contain'>
                            <img className='image' src={furniture} alt="clothes" width='100%'/>
                        </div>
                    </div>
                    <Divider/>
                    <div className="box-title">
                        <p>Nội thất</p>
                    </div>
                </div>
            </Col>
            <Col lg={3} md={6} sm={12} xs={12}>
                <div className="box">
                    <div className="box-image">
                        <div className='box-image-contain'>
                            <img className='image' src={shoes} alt="clothes" width='100%'/>
                        </div>
                    </div>
                    <Divider/>
                    <div className="box-title">
                        <p>Giày dép</p>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

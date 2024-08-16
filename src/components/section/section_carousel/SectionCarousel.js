import React from 'react';
import { Carousel } from 'antd';
import { Container } from 'reactstrap';

import './section_carousel.scss'
const contentStyle= {
  margin: 0,
};

const SectionCarousel = () => (
  <Container  >
    <Carousel arrows infinite={true} autoplaySpeed={2300} autoplay={true} draggable={true}>
      <div>
        <div style={contentStyle} >
            <img alt='anh1'  width='100%'  className='frame'/>
        </div>
      </div>
      <div>
        <div style={contentStyle}>
            <img alt='anh2'  width='100%'  className='frame'/>
        </div>
      </div>
      <div>
        <div style={contentStyle} >
            <img alt='anh3'  width='100%'  className='frame'/>
        </div>
      </div>
    </Carousel>
  </Container>
);

export default SectionCarousel ;
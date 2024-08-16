import React from 'react';

import aeon from '../../assets/trusted/aeon.png';
import adidas from '../../assets/trusted/adidias.png';
import hm from '../../assets/trusted/HM-Logo.png';
import kingstom from '../../assets/trusted/Kingston-Emblem.png';
import sendo from '../../assets/trusted/sendo.png';
import tiki from '../../assets/trusted/tiki.png';
import Slider from 'react-slick';
import {Container} from 'reactstrap';

const GalaxySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000, // Tốc độ chuyển động
    slidesToShow: 5, // Số logo hiển thị cùng lúc
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Chạy liên tục
    cssEase: 'linear', // Chuyển động mượt mà
    pauseOnHover: false, // Không dừng lại khi hover
    responsive: [
      {
        breakpoint: 1024, // Kích thước màn hình lớn hơn 1024px
        settings: {
          slidesToShow: 4, // Hiển thị 4 logo
        }
      },
      {
        breakpoint: 768, // Kích thước màn hình lớn hơn 768px
        settings: {
          slidesToShow: 2, // Hiển thị 2 logo
        }
      },
      {
        breakpoint: 480, // Kích thước màn hình nhỏ hơn 480px
        settings: {
          slidesToShow: 1, // Hiển thị 1 logo
        }
      }
    ]
  };

  return (
    <div className="galaxy-slider">
      <Slider {...settings}>
          <div>
            <img src={aeon} alt="aeon" width="100" />
          </div>
          <div>
            <img src={adidas} alt="adidas" width="100" />
          </div>
          <div>
            <img src={hm} alt="hm" width="100" />
          </div>
          <div>
            <img src={kingstom} alt="kingstom" width="100" />
          </div>
          <div>
            <img src={sendo} alt="sendo" width="100" />
          </div>
          <div>
            <img src={tiki} alt="tiki" width="100" />
          </div>
      </Slider>
    </div>
  );
};

export default GalaxySlider;

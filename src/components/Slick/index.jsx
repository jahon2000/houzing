import React from 'react'
// import { Container } from './style'
import Slider from 'react-slick'
import { Container, LogoAp, LogoDom, LogoKv, LogoVill } from './style';
// import Category from '../Category'
const Slick = () => {
     var settings = {
       dots: true,
       infinite: true,
       autoplay: true,
       autoplaySpeed: 2000,
       centerPadding: "20px",
       speed: 2000,
       slidesToShow: 4,
       slidesToScroll: 1,
       initialSlide: 0,
       responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
             infinite: true,
             dots: true,
             centerPadding: "20px",
           },
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
             initialSlide: 2,
             centerPadding: "20px",
           },
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1,
             centerPadding: "20px",
           },
         },
       ],
     };
  return (
    <Container>
      <Slider {...settings}>
        <div>
          <LogoKv />
        </div>
        <div>
          <LogoAp />
        </div>
        <div>
          <LogoVill />
        </div>
        <div>
          <LogoDom />
        </div>
        <div>
          <LogoKv />
        </div>
        <div>
          <LogoAp />
        </div>
      </Slider>
    </Container>
  );
}

export default Slick
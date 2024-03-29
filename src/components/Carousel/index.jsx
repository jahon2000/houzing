import React ,{useRef} from 'react'
import CarouselCard from '../CarouselCard';
import { CarouselWrapper, Icon,  Img, MainCarousel, Img1 } from './style'

export const Carousel = () => {
    const slider = useRef();
  return (
    <CarouselWrapper>
      <Icon.Left onClick={() => slider.current?.prev()} />
      <Icon.Right onClick={() => slider.current?.next()} />
      <CarouselCard/>
      <MainCarousel ref={slider} dots autoplay>
        <Img />
        <Img1 />
        <Img />
        <Img1 />
        <Img />
      </MainCarousel>
    </CarouselWrapper>
  );
}

export default Carousel

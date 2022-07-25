import React ,{useRef} from 'react'
import { CarouselWrapper, Icon,  Img, MainCarousel, Img1, Overlay } from './style'

export const Carousel = () => {
    const slider = useRef();
  return (
    <CarouselWrapper>
      <Icon.Left onClick={() => slider.current?.prev()} />
      <Icon.Right onClick={() => slider.current?.next()} />
      <MainCarousel ref={slider} dots autoplay>
        <Img />
        <Img1 />
        <Img />
        <Img1 />
        <Img />
      <Overlay></Overlay>
      </MainCarousel>
    </CarouselWrapper>
  );
}

export default Carousel

import React, { useRef } from "react";
import { ArrowLeft, ArrowRight, Cards, Container, Item, Items, Wrapp, Wrapper } from './style'
import AliceCarousel from 'react-alice-carousel';
import Card from '../Generic/Card'


const Recent = () => {
  const slider = useRef();

  const responsive = {
  
      0: {
          items: 1,
      },
      1024: {
          items: 3
      }
    
  };
  const items = [
      <Card />,
      <Card />,
      <Card />,
      <Card />,
      <Card />,
      <Card />
  ];
  return (
    <Container className="nocopy">
      <Item>Recent Properties for Rent</Item>
      <Wrapper>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit
      </Wrapper>
      <Items>112 Glenwood Ave Hyde Park, Boston, MA</Items>
      <Wrapp>
        <Cards>
          <AliceCarousel
            arrows={false}
            ref={slider}
            autoWidth
            autoPlay
            autoPlayInterval={1000}
            animationDuration={1000}
            infinite
            mouseTracking
            items={items}
            responsive={responsive}
          />
          <ArrowRight onClick={() => slider.current?.slideNext()}></ArrowRight>
          <ArrowLeft onClick={() => slider.current?.slidePrev()}></ArrowLeft>
        </Cards>
      </Wrapp>
    </Container>
  );
}

export default Recent
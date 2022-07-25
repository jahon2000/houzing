import React from 'react'
import { Btn, Container , IconBath, IconBed, IconCar, IconRelur, Item, ItemWrap, Menu, Wrap, Wrapper, Wrappers } from './style'
import { Button } from './style';
const CarouselCard = () => {
  return (
    <Container>
      <Item>Skyper Pool Partment</Item>
      <Wrap>112 Glenwood Ave Hyde Park, Boston, MA </Wrap>
      <Wrapper>
        <IconBed />
        <IconBath />
        <IconCar />
        <IconRelur />
      </Wrapper>
      <Wrappers>
        <ItemWrap>4 Beds</ItemWrap>
        <ItemWrap>2 Bath</ItemWrap>
        <ItemWrap>3 Cars</ItemWrap>
        <ItemWrap>9 Ruler</ItemWrap>
      </Wrappers>
          <Menu>$5,250/mo</Menu>
          <Btn>
          <Button>Read More</Button>
          </Btn>
    </Container>
  );
}

export default CarouselCard
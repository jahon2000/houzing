import React from 'react'
import { Container, Item, LogoAp, LogoDom, LogoKv, LogoVill, Wrap, Wrapper } from './style'

const Category = () => {
  return (
    <Container>
      <Wrap>Category</Wrap>
      <Wrapper>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </Wrapper>
      <Item>
        <LogoKv />
        <LogoAp />
        <LogoVill />
        <LogoDom />
      </Item>
    </Container>
  );
}

export default Category
import React from 'react'
import { Container, Item, Logo, Overlay, Wrap, Wrapper } from './style'
import {Button} from '../../Generic/Button'
const Cards = () => {
  return (
    <Container>
      <Logo />
      <Overlay></Overlay>
      <Item>
        <Wrap>
          Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home
        </Wrap>
      </Item>
      <Wrapper>
         <Button width={'180px'} height={'44px'} type={'five'}>Read More</Button>
      </Wrapper>
    </Container>
  );
}

export default Cards
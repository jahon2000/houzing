import React from 'react'
import { Body, Container, Item, Title } from './style'
import Card from '../Generic/Card'
export const Recommem = () => {
  return (
    <Container>

          <Title> Recommended</Title>
          <>
      <Item>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit
      </Item>
      </>
      <Body>
      <Card/>
      </Body>
    </Container>
  );
}
export default Recommem
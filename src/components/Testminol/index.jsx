import React from 'react'
import { Card, Container, Item, NavItem, Title, TitleCard, Wrap, Wrapper, WrapTitle } from './style'

const Test = () => {
  return (
    <Container>
      <Title>Testimonials</Title>
      <NavItem>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit
      </NavItem>
      <Wrapper>
        <Wrap>
          <Card>
            <TitleCard>
              “ I believe in lifelong learning and Skola is a great place to
              learn from experts. I've learned a lot and recommend it to all my
              friends “
            </TitleCard>
          </Card>
          <WrapTitle>Marvin McKinney</WrapTitle>
          <Item>Designer</Item>
        </Wrap>
        <Wrap>
          <Card>
            <TitleCard>
              “ I believe in lifelong learning and Skola is a great place to
              learn from experts. I've learned a lot and recommend it to all my
              friends “
            </TitleCard>
          </Card>
          <WrapTitle>Marvin McKinney</WrapTitle>
          <Item>Designer</Item>
        </Wrap>
        <Wrap>
          <Card>
            <TitleCard>
              “ I believe in lifelong learning and Skola is a great place to
              learn from experts. I've learned a lot and recommend it to all my
              friends “
            </TitleCard>
          </Card>
          <WrapTitle>Marvin McKinney</WrapTitle>
          <Item>Designer</Item>
        </Wrap>
      </Wrapper>
    </Container>
  );
}

export default Test 
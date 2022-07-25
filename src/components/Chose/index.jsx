import React from 'react'
import { Calculator, Container, House, Item, ItemNav, Items, Location, Message, Nav, NavItem, NavWrap, Wrapper  } from './style'

const Choose = () => {
  return (
    <Container>
      <Wrapper>
        <Nav>Why Choose Us ?</Nav>
        <NavWrap>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </NavWrap>
        <Item>
          <Items>
            <Message />
            <ItemNav> Trusted By Thousands</ItemNav>
            <NavItem>
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </NavItem>
          </Items>

          <Items>
            <House />
            <ItemNav>Wide Renge Of Properties</ItemNav>
            <NavItem>
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </NavItem>
          </Items>

          <Items>
            <Calculator />
            <ItemNav>Financing Made Easy </ItemNav>
            <NavItem>
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </NavItem>
          </Items>

          <Items>
            <Location />
            <ItemNav> See Neighborhoods</ItemNav>
            <NavItem>
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </NavItem>
          </Items>
        </Item>
      </Wrapper>
    </Container>
  );
}

export default Choose
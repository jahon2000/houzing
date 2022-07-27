import React from 'react'
import Elastic from '../Elastic';
import { Card, Container, Item, Items, Wrapper} from './style'

const Recent = () => {
  return (
    <Container>
      <Item>Recent Properties for Rent</Item>
      <Wrapper>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit
      </Wrapper>
          <Items>112 Glenwood Ave Hyde Park, Boston, MA</Items>
          <Card>
              <Elastic/>
          </Card>
    </Container>
  );
}

export default Recent
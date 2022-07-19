import React from "react";
import { Container, Hr, Img, Title, Wrapp, Wrapper } from "./style";
import { home } from "../../mock/card";

export const Card = () => {
  return (
    <Container>
      {home.map((value, index) => {
        return (
          <Container.Card key={index}>
            <Img src={value.img} />
            <Title>{value.name}</Title>
            <Title.Items>{value.plase}</Title.Items>
            <Wrapp>
              <Img.Icon src={value.icons} />
              <Img.Icon src={value.icons} />
              <Img.Icon src={value.iconss} />
            </Wrapp>
            <Wrapper>
              <Wrapper>{value.bed}</Wrapper>
              <Wrapper>{value.bath}</Wrapper>
              <Wrapper>{value.garage}</Wrapper>
            </Wrapper>
            <Hr />
            <Title.Item>{value.discount}</Title.Item>
          </Container.Card>
        );
      })}
    </Container>
  );
};

export default Card;

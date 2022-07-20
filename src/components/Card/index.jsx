import React from "react";
import { Container, Hr, IMG, Img, Title, Wrap, Wrapp, Wrapper } from "./style";
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
              <Img.Icon src={value.icons1} />
            </Wrapp>
            <Wrapper>
              <Wrapper>{value.bed}</Wrapper>
              <Wrapper>{value.bath}</Wrapper>
              <Wrapper>{value.garage}</Wrapper>
              <Wrapper>{value.ruler}</Wrapper>
            </Wrapper>
            <Hr />
            <Title.Item>{value.discount}</Title.Item>
            <Wrap>
              <Title.P>{value.prise}</Title.P>
              <Wrap.Wraapper>
                <IMG src={value.resize} />
                <IMG.IMGS src={value.love} />
              </Wrap.Wraapper>
            </Wrap>
          </Container.Card>
        );
      })}
    </Container>
  );
};

export default Card;

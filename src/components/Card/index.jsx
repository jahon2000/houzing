import React ,{useState} from "react";
import { BtnWrap,BtnWrapp, Container, Hr, IMG, Img, Title, Wrap, Wrapp, Wrapper} from "./style";
import { home } from "../../mock/card";
import { Button } from '../Generic/Button';

export const Card = () => {
  const [selected, setSelected] = useState(false);
 
  return (
    <Container>
        {home.map((value, index) => {
          return (
            <Container.Card key={index}>
              <Img src={value.img} />
              <BtnWrap>
                <Button type={"seven"}>Featured</Button>
              </BtnWrap>
              <BtnWrapp>
                <Button type={"six"}>Featured</Button>
              </BtnWrapp>
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
                  <IMG.IMGS src={value.love} onClick={()=>setSelected(!selected)} selected={selected} />
                </Wrap.Wraapper>
              </Wrap>
            </Container.Card>
          );
        })}
      </Container>
  );
};

export default Card;

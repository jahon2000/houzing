// import React ,{useState} from "react";
// import { BtnWrap,BtnWrapp, Container, Hr, IMG, Img, Title, Wrap, Wrapp, Wrapper} from "./style";
// import { Button } from '../Button';

// export const Card = () => {
//   const [selected, setSelected] = useState(false);
 
//   return (
//     <Container>
//             <Container.Card>
//               <Img />
//               <BtnWrap>
//                 <Button type={"seven"}>Featured</Button>
//               </BtnWrap>
//               <BtnWrapp>
//                 <Button type={"six"}>Featured</Button>
//               </BtnWrapp>
//               <Title></Title>
//               <Title.Items></Title.Items>
//               <Wrapp>
//                 <Img.Icon />
//                 <Img.Icon />
//                 <Img.Icon  />
//                 <Img.Icon  />
//               </Wrapp>
//               <Wrapper>
//                 <Wrapper></Wrapper>
//                 <Wrapper></Wrapper>
//                 <Wrapper></Wrapper>
//                 <Wrapper></Wrapper>
//               </Wrapper>
//               <Hr />
//               <Title.Item></Title.Item>
//               <Wrap>
//                 <Title.P></Title.P>
//                 <Wrap.Wraapper>
//                   <IMG  />
//                   <IMG.IMGS  onClick={()=>setSelected(!selected)} selected={selected} />
//                 </Wrap.Wraapper>
//               </Wrap>
//             </Container.Card>
//       </Container>
//   );
// };

// export default Card;



//



import React ,{useState} from "react";
import noimg from "../../../assets/images/noimg.png";
import nouser from "../../../assets/images/ellipse2.png";

import {
  Container,
  Image,
  InfoWrapper,
  Info,
  Icons,
  Price,
  User,
  Itms,
} from "./style";

export const Card = () => {
  const [selected, setSelected] = useState(false);
  return (
    <Itms>
      <Container>
        <Image src={noimg} alt="house image" />
        <InfoWrapper>
          <User>
            <User.Img src={nouser} />
          </User>
          <Info.Title></Info.Title>
          <Info.Text></Info.Text>
          <Info.Detailes>
            <Icons.Wrapper>
              <Icons.Bed />
              <Info.Text> Beds</Info.Text>
            </Icons.Wrapper>
            <Icons.Wrapper>
              <Icons.Bath />
              <Info.Text>Baths</Info.Text>
            </Icons.Wrapper>
            <Icons.Wrapper>
              <Icons.Garage />
              <Info.Text> Garages</Info.Text>
            </Icons.Wrapper>
            <Icons.Wrapper>
              <Icons.Ruler />
              <Info.Text> Sq Ft</Info.Text>
            </Icons.Wrapper>
          </Info.Detailes>
        </InfoWrapper>
        <Price>
          <Price.Wrapper>
            <Price.Sale> / month</Price.Sale>
            <Price.Origin> / month</Price.Origin>
          </Price.Wrapper>
          <Price.IconWrapper>
            <Icons.Resize />
            <Icons.Love
              onClick={() => setSelected(!selected)}
              selected={selected}
            />
          </Price.IconWrapper>
        </Price>
      </Container>
    </Itms>
  );
};
export default Card;

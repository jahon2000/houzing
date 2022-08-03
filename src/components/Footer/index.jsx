// import React from "react";
// import {
//   Bottom,
//   BottomDesctiption,
//   Container,
//   Description,
//   Icons,
//   Logo,
//   LogoTitle,
//   Section,
//   Socials,
//   Title,
//   Top,
//   Wrapper,
// } from "./style";

// export const Footer = () => {
//   return (
//     <Container>
//       <Wrapper>
//         <Wrapper.Column>
//           <Title>Contact Us</Title>
//           <Section>
//             <Icons.Location />
//             <Description>
//               329 Queensberry Street, North Melbourne VIC 3051, Australia.
//             </Description>
//           </Section>
//           <Section>
//             <Icons.Call />
//             <Description>123 456 7890.</Description>
//           </Section>
//           <Section>
//             <Icons.Email />
//             <Description>support@houzing.com.</Description>
//           </Section>
//           <Socials>
//             <Icons.Wrapper>
//               <Icons.Facebook />
//             </Icons.Wrapper>
//             <Icons.Wrapper>
//               <Icons.Twitter />
//             </Icons.Wrapper>
//             <Icons.Wrapper>
//               <Icons.Instagram />
//             </Icons.Wrapper>
//             <Icons.Wrapper>
//               <Icons.Linkedin />
//             </Icons.Wrapper>
//           </Socials>
//         </Wrapper.Column>
//         <Wrapper.Column>
//           <Title>Discover</Title>
//           <Section>
//             <Description>Chicago</Description>
//           </Section>

//           <Section>
//             <Description>Los Angeles</Description>
//           </Section>

//           <Section>
//             <Description>Miami</Description>
//           </Section>

//           <Section>
//             <Description>New York</Description>
//           </Section>
//         </Wrapper.Column>
//         <Wrapper.Column>
//           <Title>Lists by Category</Title>
//           <Section>
//             <Description>Apartments</Description>
//           </Section>
//           <Section>
//             <Description>Condos</Description>
//           </Section>
//           <Section>
//             <Description>Houses</Description>
//           </Section>
//           <Section>
//             <Description>Offices</Description>
//           </Section>
//           <Section>
//             <Description>Retail</Description>
//           </Section>
//           <Section>
//             <Description>Villas</Description>
//           </Section>
//         </Wrapper.Column>
//         <Wrapper.Column>
//           <Title>Lists by Category</Title>
//           <Section>
//             <Description>About Us</Description>
//           </Section>
//           <Section>
//             <Description>Terms & Conditions</Description>
//           </Section>
//           <Section>
//             <Description>Support Center</Description>
//           </Section>
//           <Section>
//             <Description>Contact Us</Description>
//           </Section>
//         </Wrapper.Column>
//       </Wrapper>
//       <Bottom>
//         <Bottom.Container>
//           <Bottom.Wrapper>
//             <Logo />
//             <LogoTitle>Houzing</LogoTitle>
//           </Bottom.Wrapper>
//           <BottomDesctiption>
//             Copyright © {new Date().getFullYear()} CreativeLayers. All Right
//             Reserved.
//           </BottomDesctiption>
//           <Top>
//             <Top.Icon />
//           </Top>
//         </Bottom.Container>
//       </Bottom>
//     </Container>
//   );
// };

// export default Footer;


import React from "react";
import img from "../../assets/images/Vector.png";
import email from "../../assets/images/email.png";
import phone from "../../assets/images/phone.png";
import inn from "../../assets/images/inn.png";
import face from "../../assets/images/face.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";
import btn from "../../assets/images/btn.png";

import {
  Container,
  Contact,
  Discover,
  List,
  ListBy,
  Main,
  P,
  Img,
  Span,
  Hr,
  Body,
  House,
  Housing,
  Button,
  Btn,
} from "./style";

export const Footer = () => {
  return (
    <Container>
      <Main>
        <Contact>
          Contact Us
          <Img>
            <P style={{ display: "flex" }}>
              <img style={{ width: "15px", height: "18px" }} src={img} alt="" />
              <Span>
                329 Queensberry Street, North Melbourne VIC 3051, Australia.
              </Span>
            </P>
          </Img>
          <Img>
            <P style={{ display: "flex" }}>
              <img
                style={{ width: "18px", height: "18px" }}
                src={phone}
                alt=""
              />
              <Span> 123 456 7890 </Span>
            </P>
          </Img>
          <Img>
            <P style={{ display: "flex" }}>
              <img
                style={{ width: "18px", heigth: "18px" }}
                src={email}
                alt=""
              />
              <Span> support@houzing.com</Span>
            </P>
          </Img>
          <br />
          <br />
          <Img>
            <P>
              <img
                style={{
                  width: "15px",
                  heigth: "15px",
                  margin: " 0px 40px 0px 0px",
                  fontSize: "14px",
                  lineHeigth: "16px",
                  fontWeight: "400",
                  fontFamily: "Font Awesome 5 Brands",
                  fontStyle: "normal",
                  color: "#FFFFFF",
                }}
                src={face}
                alt=""
              />
              <img
                style={{
                  width: "15px",
                  heigth: "15px",
                  margin: " 0px 40px 0px 0px",
                  fontSize: "14px",
                  lineHeigth: "16px",
                  fontWeight: "400",
                  fontFamily: "Font Awesome 5 Brands",
                  fontStyle: "normal",
                  color: "#FFFFFF",
                }}
                src={twitter}
                alt=""
              />
              <img
                style={{
                  width: "15px",
                  heigth: "15px",
                  margin: " 0px 40px 0px 0px",
                  fontSize: "14px",
                  lineHeigth: "16px",
                  fontWeight: "400",
                  fontFamily: "Font Awesome 5 Brands",
                  fontStyle: "normal",
                  color: "#FFFFFF",
                }}
                src={instagram}
                alt=""
              />
              <img
                style={{
                  width: "15px",
                  heigth: "15px",
                  margin: " 0px 40px 0px 0px",
                  fontSize: "14px",
                  lineHeigth: "16px",
                  fontWeight: "400",
                  fontFamily: "Font Awesome 5 Brands",
                  fontStyle: "normal",
                  color: "#FFFFFF",
                }}
                src={inn}
                alt=""
              />
            </P>
          </Img>
        </Contact>
        <Discover>
          Discover
          <P>Chicago</P>
          <P>Los Angelos</P>
          <P>Miami</P>
          <P>New York</P>
        </Discover>
        <List>
          List by Category
          <P>Apartments</P>
          <P>Condos</P>
          <P>Houses</P>
          <P>Offies</P>
          <P>Retail</P>
          <P>Villas</P>
        </List>
        <ListBy>
          List by Category
          <P>About Us</P>
          <P>Terms Conditions</P>
          <P>Support Center</P>
          <P>Contact Us</P>
        </ListBy>
      </Main>
      <Hr></Hr>
      <Body>
        <House>
          <img
            style={{
              width: "30px",
              height: "36px",
              margin: "20px 0px 0px 60px",
            }}
            src={img}
            alt=""
          />
          <Housing>Housing</Housing>
        </House>
        <Btn>
          <P>Copyright © 2021 CreativeLayers. All Right Reserved</P>
          <Button>
            <img style={{ margin: "20px 18px 20px 25px" }} src={btn} alt="" />
          </Button>
        </Btn>
      </Body>
    </Container>
  );
};

export default Footer;
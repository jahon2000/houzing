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
              width: "34px",
              height: "38px",
              margin: "16px 0px 0px 60px",
            }}
            src={img}
            alt=""
          />
          <Housing>Housing</Housing>
        </House>
        <Btn>
          <P>Copyright © 2021 CreativeLayers. All Right Reserved</P>
          <Button>
            <img style={{padding:'18px 18px'}} src={btn} alt="" />
          </Button>
        </Btn>
      </Body>
    </Container>
  );
};

export default Footer;

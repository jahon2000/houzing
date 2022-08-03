// import styled from "styled-components";
// import  location  from "../../assets/icons/logo.svg";
// import  phone  from "../../assets/images/phone.png";
// import  email  from "../../assets/images/email.png";
// import  facebook  from "../../assets/images/face.png";
// import  twitter  from "../../assets/images/twitter.png";
// import  instagram  from "../../assets/images/instagram.png";
// import  linkedIn  from "../../assets/images/inn.png";
// import  backtop  from "../../assets/icons/backtop.svg";
// import  logo  from "../../assets/images/btn.png";

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
//   left: 0px;
//   top: 4294px;
//   background: #0d263b;
// `;

// const Wrapper = styled.div`
//   width: 1440px;
//   padding: 48px 130px 24px 130px;
//   display: flex;
//   justify-content: space-between;
//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//     width: 100%;
//     padding: 40px 0 20px 0;
//   }
// `;

// Wrapper.Column = styled.div`
//   @media (max-width: 768px) {
//     margin-bottom: 40px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }
// `;

// Wrapper.Column2 = styled.div``;

// Wrapper.Column3 = styled.div``;

// Wrapper.Column4 = styled.div``;

// const Title = styled.div`
//   font-style: normal;
//   font-weight: 600;
//   font-size: 18px;
//   line-height: 24px;
//   color: #ffffff;
//   margin-bottom: 32px;
//   @media (max-width: 768px) {
//     font-size: 17px;
//   }
// `;

// const Section = styled.div`
//   display: flex;
//   margin-bottom: 20px;
//   @media (max-width: 768px) {
//     width: 100%;
//     font-size: 13px;
//     display: flex;
//     justify-content: center;
//   }
// `;

// const Description = styled.div`
//   font-style: normal;
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 20px;
//   color: #ffffff;
//   max-width: 300px;
//   @media (max-width: 768px) {
//     font-size: 13px;
//     max-width: 250px;
//   }
// `;

// const Icons = styled.div``;

// const Socials = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 37px;
//   margin-top: 42px;
//   @media (max-width: 768px) {
//     margin-top: 20px;
//   }
// `;

// Icons.Location = styled(location)`
//   margin-right: 22px;
//   width: 18px;
//   height: 18px;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   :active {
//     transform: scale(0.98);
//   }
//   @media (max-width: 768px) {
//     width: 17px;
//     height: 17px;
//     margin-right: 18px;
//   }
// `;
// Icons.Call = styled(phone)`
//   margin-right: 22px;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   :active {
//     transform: scale(0.98);
//   }
//   @media (max-width: 768px) {
//     width: 17px;
//     height: 17px;
//     margin-right: 18px;
//   }
// `;
// Icons.Email = styled(email)`
//   margin-right: 22px;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   :active {
//     transform: scale(0.98);
//   }
//   @media (max-width: 768px) {
//     width: 17px;
//     height: 17px;
//     margin-right: 18px;
//   }
// `;

// Icons.Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 36px;
//   height: 36px;
//   :hover {
//     background-color: #253c4f;
//     border-radius: 3px;
//   }
//   :active {
//     opacity: 0.7;
//   }
// `;

// Icons.Facebook = styled(facebook)`
//   cursor: pointer;
//   transition: all 0.3s ease;
//   width: 36px;

//   :active {
//     transform: scale(0.98);
//   }
// `;

// Icons.Twitter = styled(twitter)`
//   cursor: pointer;
//   transition: all 0.3s ease;
//   :active {
//     transform: scale(0.98);
//   }
// `;
// Icons.Instagram = styled(instagram)`
//   cursor: pointer;
//   transition: all 0.3s ease;
//   :active {
//     transform: scale(0.98);
//   }
// `;
// Icons.Linkedin = styled(linkedIn)`
//   cursor: pointer;
//   transition: all 0.3s ease;
//   :active {
//     transform: scale(0.98);
//   }
// `;

// const Bottom = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   padding: 16px 0;
//   border-top: 1px solid rgba(255, 255, 255, 0.15);
//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//     height: 148px;
//     padding: 24px 0;
//   }
// `;

// Bottom.Container = styled.div`
//   position: relative;
//   max-width: 1440px;
//   width: 100%;
//   padding: 0 130px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//     height: 148px;
//     padding: 0 50px;
//     text-align: center;
//   }
// `;

// Bottom.Wrapper = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const Logo = styled(logo)`
//   margin-right: 12px;
//   @media (max-width: 768px) {
//     width: 25px;
//     height: 25px;
//     margin-right: 6px;
//   }
// `;

// const LogoTitle = styled.div`
//   margin-left: 11px;
//   font-size: 20px;
//   font-weight: 500;
//   color: white;
//   @media (max-width: 768px) {
//     font-size: 19px;
//   }
// `;

// const BottomDesctiption = styled.div`
//   font-style: normal;
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 20px;
//   color: #ffffff;
//   @media (max-width: 768px) {
//     font-size: 13px;
//   }
// `;

// const Top = styled("div")`
//   padding: 10px;
//   width: 43px;
//   height: 43px;
//   background: #0061df;
//   border-radius: 3px;
//   position: absolute;
//   top: 50%;
//   right: 11px;
//   transform: translate(-50%, -50%);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transition: all 0.4s ease;
//   :active {
//     opacity: 0.8;
//   }
//   @media (max-width: 768px) {
//     width: 35px;
//     height: 35px;
//     position: absolute;
//     bottom: 16px;
//     right: 16px;
//     transform: translate(0, 0);
//   }
// `;

// Top.Icon = styled(backtop)``;
// export {
//   Container,
//   Bottom,
//   Wrapper,
//   Title,
//   Top,
//   Socials,
//   Description,
//   Icons,
//   Section,
//   Logo,
//   LogoTitle,
//   BottomDesctiption,
// };


import styled from "styled-components";
export const Container = styled.div`
  background: #0d263b;
  overflow-x: hidden;
  width: 100%;
  height: 380px;
`;
export const Main = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 15px;
`;
export const Contact = styled.div`
  color: #ffff;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;
export const Discover = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffff;
`;
export const List = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffff;
`;

export const ListBy = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;
export const P = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  margin: 20px 70px 0px 0px;
`;
export const Img = styled.div`
  display: flex;
  display: block;
`;
export const Span = styled.div`
  width: 70%;
  margin: 0 0 0 22px;
`;
export const Hr = styled.div`
  background: rgba(255, 255, 255, 0.15);
  width: 100%;
  height: 1px;
  color: #ffffff;
  margin: 0px 0px 0px 0px;
`;
export const Body = styled.div`
  justify-content: space-between;
  display: flex;
`;
export const House = styled.div`
  display: flex;
`;

export const Housing = styled.div`
  margin-left: 10px;
  margin: 30px 0px 0px 15px;
  font-size: 14px;
  font-family: "Montserrat" !important;
  font-weight: 400;
  font-style: normal;
  line-height: 16px;
  color: #ffffff;
`;
export const Button = styled.div`
  background: #0061df;
  border-radius: 3px;
  margin: 12px 11px 12px 11px;
  height: 50px;
  width: 60px;
`;
export const Btn = styled.div`
  display: flex;
`;


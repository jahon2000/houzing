import styled from "styled-components";
import  logoMessage  from "../../assets/images/user.png";
import  logoHouse  from "../../assets/images/homes.png";
import  logoCalculator  from "../../assets/images/cal.png";
import  logoLocation  from "../../assets/images/location.png";

export const Container = styled.div`
  width: 100%;
  /* height: 434px; */
  background: #f5f7fc;
  margin-top:80px ;
  text-align:center;
  @media (max-width:550px){
    padding:30px 0;
    margin-bottom:50px ;
    margin-top: 40px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  justify-content: center;
  align-items: center;
  @media (max-width:550px){
    /* height:100vh; */
    /* width:100%;  */
  }
`;

export const Nav = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #0d263b;
  margin-top: 48px;
  @media (max-width: 550px) {
    margin-top: 24px;
  }
`;
export const NavWrap = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
  text-align:center ;
  margin-top:8px;
  @media (max-width:550px){
    margin-top:6px;
    font-size:14px;
  }
`;

export const Item = styled.div`
display:flex ;
justify-content:center  ;
align-items:center ;
margin-top:18px;
padding-left:40px;
@media (max-width:550px){
    display:inline-block ;
    align-items:center;
    justify-content:center ;
}
`


export const Message = styled.img.attrs({
  src: logoMessage,
})`
  @media (max-width: 550px) {
    margin-right:10px ;
    margin-bottom:1px;
  }
`;export const House = styled.img.attrs({
  src: logoHouse,
})`
  @media (max-width: 550px) {
    margin-right: 10px;
    margin-top: 10px;
  }
`;
export const Calculator = styled.img.attrs({
  src: logoCalculator,
})`
  @media (max-width: 550px) {
    margin-right: 10px;
     margin-top:10px;
  }
`;
export const Location = styled.img.attrs({
  src: logoLocation,
})`
  @media (max-width: 550px) {
    margin-right: 10px;
     margin-top:10px;
  }
`;

export const Items = styled.div`
align-items:center ;
text-align:center ;

`;

export const ItemNav = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0d263b;
  gap:81px;
  text-align:center;
  margin-top:15px;
`;

export const NavItem = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #696969;
  margin-top:10px;
  @media (max-width:550px){
    text-align:center;
    font-size:13px;
    line-height:20px;
    margin-right:30px;
  }
`;
import styled from "styled-components";
import  logoIcon  from "../../assets/images/ellipse2.png";
export const Container = styled.div`
  width: 100%;
  background: #f5f7fc;
  margin-top: 20px;
  overflow-x: hidden;
  overflow-y: hidden;
  cursor:pointer ;
`;
export const Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  color: #0d263b;
  margin-top:48px;
`;
export const NavItem = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
  text-align: center;
  padding:8px 0 ;
`;


export const Wrapper = styled.div` 
position: relative;
display:flex ;
justify-content:center ;
align-items:center;
gap:30px;
margin-bottom:20px ;
margin-top:32px;
`
export const Wrap = styled.div`
  position: relative;
`;


export const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
  border-radius: 3px;
  width: 380px;
  height: 197px;
  :hover {
    filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  }
`;

export const TitleCard = styled.div`
  text-align: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #696969;
  padding:48px 48px;
`;

export const WrapTitle = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #0d263b;
  margin-top:20px;
`;

export const Item = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #696969;
  margin-top:4px;
`;

export const Icon = styled.div`
  position: absolute;
  display: flex;
  bottom: 50px;
  left: 45%;
  padding: 2px;
  background-color: #ffffff;
  border-radius: 50%;
`;

Icon.Img = styled.img.attrs({
  src: logoIcon,
})`
  
`;
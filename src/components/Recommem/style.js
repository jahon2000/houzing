import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/carousel.svg";
const Container = styled.div` 
display:flex;
flex-direction:column ;

`
const Title = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  color: #0d263b;
  margin-top: 96px;
  margin-bottom: 6px;
  @media (max-width: 550px) {
    margin-top: 50px;
  }
`;
const Item = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
  text-align:center ;
  @media (max-width:550px){
    font-size:14px ;
    line-height:18px ;
    text-align:center ;
  }
`;


export const Cards = styled.div`
  display: flex;
  width: 1440px;
  margin-top: 32px;
  justify-content: space-between;
  padding: 0 130px;
`;

export const ArrowLeft = styled(arrow)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translate(100%, -50%) rotate(180deg);
  width: 45px;
  height: 45px;
  color: white;
  background: white;
  padding: 12px;
  opacity: 0.5;
  border-radius: 50%;
  z-index: 999;
  cursor: pointer;
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  :hover {
    opacity: 0.97;
  }
  & path {
    fill: #0d263b;
  }
`;

export const ArrowRight = styled(arrow)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(-100%, -50%);
  width: 45px;
  height: 45px;
  color: white;
  background: white;
  padding: 12px;
  opacity: 0.5;
  border-radius: 50%;
  z-index: 999;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
  & path {
    fill: #0d263b;
  }
`;

export const IconArrow = styled(arrow)`
  width: 7px;
  height: 10px;
`;

export const Wrapp = styled("div")`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export {Container , Title , Item }
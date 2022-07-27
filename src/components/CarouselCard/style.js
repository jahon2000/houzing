import styled from "styled-components";
import { ReactComponent as BathIcon } from "../../assets/icons/bath.svg";
import { ReactComponent as BedIcon } from "../../assets/icons/bed.svg";
import { ReactComponent as CarIcon } from "../../assets/icons/car.svg";
import { ReactComponent as RulerIcon } from "../../assets/icons/ruler.svg";
export const Container = styled.div` 
position:absolute ;
width:100% ;
z-index:1;
max-width:1440px ;
`
const Item = styled.div`
  max-width: 1440px;
  text-align:center ;
  margin-top:80px ;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 45px;
  line-height: 36px;
  color: #ffffff;
  @media (max-width:550px){
    font-size:28px;
  }
`;
const Wrap = styled.div`
  max-width: 1440px;
  text-align: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 20px;
  color: #ffffff;
  margin-top: 20px;
  @media (max-width: 550px) {
    font-size: 14px;
  }
`;

const Wrapper = styled.div` 
display:flex ;
justify-content:center ;
align-items:center ;
margin-top:20px ;
gap:65px;
`

const IconBed = styled(BathIcon)`
  & path {
    fill: #FFFFFF;
  }
`;
const IconBath = styled(BedIcon)`
  & path {
    fill: #ffffff;
  }
`;
const IconCar = styled(CarIcon)`
  & path {
    fill: #ffffff;
  }
`;
const IconRelur = styled(RulerIcon)`
  & path {
    fill: #ffffff;
  }
`;

const Wrappers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap:40px;
`;

const ItemWrap = styled.div`
  color: white;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
`;

export const Menu = styled.div`
  text-align:center ;
  margin-top: 16px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

export const Button = styled.button`
  text-align: center;
  color: white;
  border: 1px solid white;
  height: 44px;
  width: 150px;
  background: rgba(0, 0, 0, 0.1);
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  margin-top: 50px;
  border-radius:5px ;
`;

export const Btn = styled.div`
align-items :center ;
text-align: center;
/* width:100px ; */
`

export { Item, Wrap, Wrapper, IconBed, IconBath, IconCar, IconRelur, ItemWrap, Wrappers }
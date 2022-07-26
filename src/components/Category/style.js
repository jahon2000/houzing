import styled from "styled-components";
// import logoHouses from '../../assets/images/houss.png'
import logoApart from "../../assets/images/apartment.png";
import logoOffice from "../../assets/images/office.png";
import logoVilla from "../../assets/images/villaa.png";
export const Container = styled.div` 
margin-top: 80px;
margin-bottom:50px;
`

export const Wrap = styled.div`
  justify-content: center;
  text-align: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  color: #0d263b;
`;

export const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
  text-align:center ;
  margin-top:8px ;
`;

export const Item = styled.div` 
display:flex ;
align-items: center;
justify-content:center ;
max-width:1440px ;
margin-top:32px ;
gap: 20px;
`

export const LogoKv = styled.img.attrs({
  src: logoApart,
})`

`
  ;
export const LogoAp = styled.img.attrs({
  src:logoApart,
})``

export const LogoVill = styled.img.attrs({
  src:logoOffice,
})``

export const LogoDom = styled.img.attrs({
  src:logoVilla,
})``
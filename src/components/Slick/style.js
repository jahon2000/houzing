import styled from "styled-components";
import logoApart from "../../assets/images/apartment.png";
import logoOffice from "../../assets/images/office.png";
import logoVilla from "../../assets/images/villaa.png";
export const Container = styled.div` 
width:100% ;
padding: 20px 10%;
overflow-x:hidden ;
overflow-y:hidden;
justify-content:center;
align-items: center;
margin-bottom:50px;
position:relative;

`

export const LogoKv = styled.img.attrs({
  src: logoApart,
})``;
export const LogoAp = styled.img.attrs({
  src: logoApart,
})``;

export const LogoVill = styled.img.attrs({
  src: logoOffice,
})``;

export const LogoDom = styled.img.attrs({
  src: logoVilla,
})``;

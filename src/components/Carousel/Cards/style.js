import styled from "styled-components";
import LogoHouse from '../../../assets/images/uy.jpg'
export const Container = styled.div` 
position:relative ;
width:100%;
justify-content:center ;
align-items:center ;
margin-top:136px;
@media (max-width:550px){
  margin-top:90px ;
}
`

export const Logo = styled.img.attrs({
    src:LogoHouse,
})` 
height:571px ;
width: 100%;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;


export const Item = styled.div` 
`

export const Wrap = styled.div`
  position: absolute;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  z-index: 1;
  color: #FFFFFF;
  top: 200px;
  justify-content: center;
  align-items: center;
  right:437px;
  left:435px;
  @media (max-width:550px){
    left:16px;
    right:16px;
    top:250px;
    font-size:26px;
  }
`;

export const Wrapper = styled.div` 
position:absolute;
z-index:1;
top:324px;
left:660px;
  @media (max-width:550px){
    left:90px;
    right:90px;
    top:418px;
  }
`;
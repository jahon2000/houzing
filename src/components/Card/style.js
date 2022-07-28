import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/carousel.svg";
export const Container = styled.div` 
width:100% ;
display:flex ;
align-items:center ;
justify-content:center ;
flex-wrap:wrap ;
gap: 20px;
margin-top: 32px;
@media (max-width:550px){
  padding:0 16px;
}
`

Container.Card = styled.div`
width:380px ;
max-width:1440px ;
height:430px ;
background: #FFFFFF;
border:var(--border);
border-radius: 3px;
position:relative;
`


export const BtnWrap = styled.div`  
position:absolute;
top:20px;
left:20px ;
@media (max-width:550px){
}
`
export const BtnWrapp = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background:white ;
`;

export const Img = styled.img`
width:100% ;
height:220px ;
`
export const Title = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
  margin:20px 0 4px 20px;
`;

Title.Items = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin-left: 20px;
 
`;

Img.Icon = styled.img` 
width:25px ;
height:20px ;
`
export const Wrapp = styled.div` 
align-items:center ;
justify-content:center ;
display:flex ;
gap:65px;
margin-top:18px ;
`

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 8px;
  margin-left: 10px;
  gap: 35px;
  font-family: "Montserrat";
  justify-content:center ;
  align-items:center ;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #696969;
`;

export const Hr = styled.hr`
  background: #e6e9ec;
  width:376px ;
  border:var(--border);
  margin-top: 16px;
`;

Title.Item = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-decoration-line: line-through;
  color: #696969;
  margin-left:20px ;
  margin-top:8px ;
`;

Title.P = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
  margin-left:20px   ;  
`;

export const Wrap = styled.div`  
display:flex ;
justify-content:space-between;
margin-bottom:12px ;
`

Wrap.Wraapper = styled.div` 
display:flex ;
margin-right:20px ;
gap:20px ;
`

export const IMG = styled.img`
width :35px ;
height:20px ;
`
IMG.IMGS = styled.img`
  margin-bottom: 15px;
  width: 35px;
  height: 25px;
  background: ${({ selected }) => (selected ? "#CC4050" : "#f6f8f9")};
  border-radius: 40px;
`;


// carousel
export const Icon = styled.div`

 `;

Icon.Left = styled(arrow)`
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
  :hover {
    opacity: 0.97;
  }
  & path {
    fill: #0d263b;
  }
  @media (max-width: 550px) {
    display: none;
  }
`;
Icon.Right = styled(arrow)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 0px;
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
    opacity: 0.97;
  }
  & path {
    fill: #0d263b;
  }
  @media (max-width: 550px) {
    display: none;
  }
`;
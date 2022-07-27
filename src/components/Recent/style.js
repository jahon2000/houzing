import styled from "styled-components";

export const Container = styled.div` 
width:100%;
justify-content:center ;
align-items:center ;
margin-top:70px;
@media (max-width:550px){
    margin-top:64px;
}
`

export const Item = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  color: #0d263b;
  @media (max-width:550px){
    font-size:30px;
  }
`;

export const Wrapper = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
  text-align: center;
  padding: 6px;
  @media (max-width:550px){
    display:none;
  }
`;

export const Items = styled.div`
  display: none;
  @media (max-width: 550px) {
    display: block;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #696969;
    text-align:center;
    margin-top:8px;
  }
`;

export const Card = styled.div` 
margin-top:32px ;
`
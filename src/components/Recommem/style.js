import styled from "styled-components";

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

const Body = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  width: 100%;
  padding: 0 130px;
  max-width: var(--width);
`;


export {Container , Title , Item  , Body}
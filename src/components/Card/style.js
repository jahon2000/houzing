import styled from "styled-components";

export const Container = styled.div` 
width:100% ;
display:flex ;
align-items:center ;
justify-content:center ;
flex-wrap:wrap ;
gap: 20px;
margin-top: 32px;
`

Container.Card = styled.div`
width:380px ;
max-width:1440px ;
height:420px ;
background: #FFFFFF;
border:var(--border);
border-radius: 3px;
`
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
  margin:24px 0 4px 20px;
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
margin-left:40px ;
display:flex ;
gap:71px;
margin-top:18px ;
`

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 8px;
  margin-left: 12px;
  gap: 33px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
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


import styled from "styled-components";



const getType = (type) => {
    switch (type) {
        case 'secondary':
            return {
              border: "1px solid #E6E9EC",
              color: "#0D263B",
            };
        case 'primary':
            return {
                color: '#FFFFFF',
                border: 'none',
                background: '#0061DF',
            };
        default:
            return {
                border: "1px solid #E6E9EC",
                color: 'black',
            };
    }
}

export const Container = styled.input`
  display: flex;
  height: ${({ height }) => height || "44px"};
  width: ${({ width }) => (width ? width : "100%")};
  border-radius: 2px;
  padding-left: ${({ pl }) => pl || "15px"};
  padding-right:${({pr})=>`${pr}px`} ;
  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  ${({ type }) => getType(type)}
  font-style:normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #e6e9ec;
  :focus{ 
    outline-style: 1px solid ;
    outline-color: #0061DF ;

  }
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
`;

export const Icon = styled.div`  
position:absolute ;
transform:translate(-50% , -50%) ;
top:50% ;
left:30px ;
`


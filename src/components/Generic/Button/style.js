import styled from "styled-components";

const getType = (type) => {
    switch (type) {
      case "secondary":
        return {
          border: "1px solid #e6e9ec",
          color: "#0D263B",
        };
      case "primary":
        return {
          background: "#0061DF",
          color: "#FFFFFF",
          border: "none",
        };
      case "four":
        return {
          border: "1px solid black",
          borderRadius: "2px",
          color: "black",
          background: "#FFFFFF",
        };
      case "five":
        return {
          border: "none",
          borderRadius: "2px",
          background: "#0061DF",
          color: "#ffffff",
        };
      case "six":
        return {
          border: "none",
          borderRadius: "2px",
          background: "#0D263B",
          color: "white",
          width: "80px",
          height: "30px",
        };
      case "seven":
        return {
          border: "none",
          borderRadius: "2px",
          background: "#0061DF",
          color: "white",
          width: "80px",
          height: "30px",
        };
      default:
        return {
          border: "1px solid #E6E9EC",
          color: "#FFFFFF",
        };
    }
};



export const Container = styled.div`
  display: flex;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height || "44px"};
  min-width: ${({ width }) => (width ? width : "100%")};
  width: ${({ width }) => (width ? width : "100%")};
  border-radius: 2px;
  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  cursor: pointer;
  -webkit-touch-callout:none;
  -webkit-user-select:none;
  -khtml-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none ;
  ${({ type }) => getType(type)}
  :active{
    transform: scale(0.98);
    opacity:0.7 ;
  }
 
`;
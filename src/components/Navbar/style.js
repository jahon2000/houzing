import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as logoIcon } from "../../assets/icons/logo.svg";
import { ReactComponent as logoUser } from "../../assets/icons/user.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* z-index:2; */
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primaryColor);
  width: 100%;
  @media (max-width: 550px) {
    padding: 0 50px;
  }
`;
export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  max-width: 1440px;
  padding: 0 100px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  width: 100%;
  color: #ffffff;
`;

export const NavbarBody = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: white;

  .active {
    color: #00fff5;
  }
  @media (max-width: 550px) {
    display: none;
  }
`;
export const Link = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin: 0 32px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: 550px) {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;

Logo.User = styled(logoUser)`
@media (max-width:550px){
  width:25px ;
  height:25px ;
}
`;

export const UserWrap = styled.div`
  display: none;
  @media (max-width: 550px) {
    display: block;
    margin-left:15px ;
  }
`;

Logo.Icon = styled(logoIcon)`
`;
Logo.Title = styled("div")`
  margin-left: 11px;
  font-size: 20px;
  font-weight: 500px;
  @media (max-width: 550px) {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const BTNWRAP = styled.div`
  @media (max-width: 550px) {
    display: none;
  }
`;

export const ModalBurger = styled.div`
  display: none;
  @media (max-width: 550px) {
    display: block;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    width:100% ;
  }
`;

import React from "react";
import { navbar } from "../../utils/navbar";
import { Outlet, useNavigate } from "react-router-dom";
import {
  BTNWRAP,
  Container,
  Link,
  Logo,
  ModalBurger,
  NavbarBody,
  NavbarWrapper,
  UserWrap,
  Wrapper,
} from "./style";
import { Button } from "../Generic/Button";
import Modal from "../Modal";
// import Burger from '../Drawer/Burger'

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <ModalBurger>
          {/* <Burger/> */}
          <Modal />
        </ModalBurger>
        <NavbarWrapper>
          <Logo onClick={() => navigate("/home")}>
            <Logo.Icon />
            <Logo.Title>Houzing</Logo.Title>
          </Logo>
          <NavbarBody>
            {navbar.map(({ title, id, path, hidden }) => {
              return (
                !hidden && (
                  <Link key={id} to={path}>
                    {title}
                  </Link>
                )
              );
            })}
          </NavbarBody>
          {localStorage.getItem("token") ? (
            <>
              <h1 onClick={() => navigate("/myproperties")}>Profile</h1>
              <button
                onClick={() => {
                  localStorage.clear();
                  navigate("/home");
                }}
                width={"120px"}
              >
                Log Out
              </button>
            </>
          ) : (
            <BTNWRAP>
              <Button onClick={() => navigate("/singin")} width={"120px"}>
                Login
              </Button>
            </BTNWRAP>
          )}
        </NavbarWrapper>
        <UserWrap>
          <Logo.User />
        </UserWrap>
      </Container>
      <Outlet />
    </Wrapper>
  );
};
export default Navbar;

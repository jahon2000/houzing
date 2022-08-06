import React from "react";
import { navbar } from "../../utils/navbar";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
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
import Button from "../Generic/Button";
import Modal from "../Modal";

export const Navbar = () => {
  const location = useLocation();

  const gotoSignIn = () => {
    navigate("/signin");
  };
  const logout = () => {
    localStorage.removeItem("token");
    if (location?.pathname?.includes("profile")) {
      navigate("/home");
    } else {
      navigate(location.pathname);
    }
  };

  var button;

  localStorage.getItem("token")
    ? (button = (
        <Button
          onClick={() => navigate("/profile")}
          type={"four"}
          width={"120px"}
        >
          Profile
        </Button>
      ))
    : (button = (
        <Button onClick={gotoSignIn} width={"120px"}>
          Log In
        </Button>
      ));
  location.pathname.includes("profile") &&
    // eslint-disable-next-line no-unused-vars
    (button = (
      <Button onClick={logout} width={"150px"} type="four">
        Log out
      </Button>
    ));

  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <ModalBurger>
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
              <Button mr='10' width={"120px"} onClick={() => navigate("/myproperties")}>
                Profile
              </Button>
              <Button
                onClick={() => {
                  localStorage.clear();
                  navigate("/home");
                }}
                width={"120px"}
                
                type=""
              >
                Log Out
              </Button>
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

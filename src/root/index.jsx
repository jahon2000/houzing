import React from "react";
import { Routes, Route , Navigate } from "react-router-dom";
import { navbar } from "../utils/navbar";
import { Container } from "./style";
import Error from "../pages/Error";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export const Root = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navigate to="/home " />} />
        <Route element={<Navbar/>}>
        {navbar.map((value) => (
          <Route key={value.id} path={value.path} element={value.element} />
          ))}
        </Route>
        <Route element={<Footer/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </Container>
  );
};
export default Root;

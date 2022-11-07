import React from "react";
import { Link as ReactRouter } from "react-router-dom";
import { Container, Link } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Container pb={'1rem'} mb={'1rem'} borderBottom={"solid 1px black"}>
      <Link as={ReactRouter} color={"#2B6CB0"} to="/">User</Link> |{" "}
      <Link as={ReactRouter} color={"#2B6CB0"} to="/admin">Admin</Link>
    </Container>
  );
};

export default NavBar;
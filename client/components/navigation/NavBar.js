// Dependencies
// -----------------------------------
import React from "react";
import styled from "styled-components";
import { View } from "react-native";

// Components
// -----------------------------------
import NavButton from "./NavButton";

// Styled Components
// -----------------------------------
const ButtonContainer = styled.View`
  position: absolute;
  bottom: 80px;
  height: 40px;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px;
  background-color: white;
`;

// -----------------------------------
// CONST->NAV-BAR --------------------
// -----------------------------------
const NavBar = () => (
  <ButtonContainer>
    <NavButton path="/" icon="home" title="home" />
    <NavButton path="/restaurants" icon="list-ul" title="restaurants" />
  </ButtonContainer>
);

// -----------------------------------
// EXPORT ----------------------------
// -----------------------------------
export default NavBar;

// Dependencies
// -----------------------------------
import React from "react";
import { Button } from "react-native";
import { withRouter } from "react-router-native";
import { FontAwesome } from "@expo/vector-icons";

// -----------------------------------
// CONST->NAV-BUTTON -----------------
// -----------------------------------
const NavButton = (props) => (
  <FontAwesome name="camera" />
);

// -----------------------------------
// EXPORT ----------------------------
// -----------------------------------
export default withRouter(NavButton);
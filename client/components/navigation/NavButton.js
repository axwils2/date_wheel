// Dependencies
// -----------------------------------
import React from "react";
import { View, Button } from "react-native";
import { withRouter } from "react-router-native";
import { FontAwesome } from "@expo/vector-icons";

// -----------------------------------
// CONST->NAV-BUTTON -----------------
// -----------------------------------
const NavButton = (props) => (
  <FontAwesome
    name={props.icon}
    onPress={() => props.history.push(props.path)}
  />
);

// -----------------------------------
// EXPORT ----------------------------
// -----------------------------------
export default withRouter(NavButton);
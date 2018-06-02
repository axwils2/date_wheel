// Dependencies
// -----------------------------------
import React from "react";
import styled from "styled-components";
import { Text, View } from "react-native";
import { NativeRouter, Switch, Route } from "react-router-native";

// Components
// -----------------------------------
import { Home, Restaurants } from "./components/pages";
import { NavBar } from "./components/navigation";

// Styled Components
// -----------------------------------
const StyledView = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
`;

// -----------------------------------
// CLASS->APP ------------------------
// -----------------------------------
export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <StyledView>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/restaurants" component={Restaurants} />
          </Switch>
          <Route path="/" component={NavBar} />
        </StyledView>
      </NativeRouter>
    );
  }
}

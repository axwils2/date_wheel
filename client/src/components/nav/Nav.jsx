// Dependencies
// -----------------------------------
import React, { Component } from "react";
import styled from "styled-components";

// Components
// -----------------------------------
import { NavLink } from "../nav";
import { SolidIcon } from "../icons";

// Styled Components
// -----------------------------------
const NavContainer = styled.div`
  display: flex;
`;

// Constants
// -----------------------------------
const Links = {
  home: "/",
  profile: "/profile"
};

// -----------------------------------
// CLASS->NAV ------------------------
// -----------------------------------
export default class Nav extends Component {
  // Constructor
  // -----------------------------------
  constructor() {
    super();
    this.state = {
      active: "home"
    };
  }

  // On-Click
  // -----------------------------------
  onClick = active => {
    this.setState({ active: active });
  };

  // -----------------------------------
  // RENDER ----------------------------
  // -----------------------------------
  render() {
    return (
      <NavContainer>
        {Object.keys(Links).map(link => (
          <NavLink
            key={link}
            page={link}
            to={Links[link]}
            active={this.state.active === link}
            onClick={this.onClick}
          >
            <SolidIcon icon={link} />
          </NavLink>
        ))}
      </NavContainer>
    );
  }
}

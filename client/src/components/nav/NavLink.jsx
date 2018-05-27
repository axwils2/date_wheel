// Dependencies
// -----------------------------------
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// -----------------------------------
// CONST->NAV-LINK -------------------
// -----------------------------------
const NavLink = props => {
  // Syled Components
  // -----------------------------------
  const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    color: ${props.active ? 'white' : 'black'};
    background-color: ${props.active ? 'blue' : 'white'};
  `;

  // On-Click
  // -----------------------------------
  const onClick = () => {
    props.onClick(props.page);
  }

  // -----------------------------------
  // RETURN ----------------------------
  // -----------------------------------
  return (
    <StyledLink to={props.to} onClick={() => onClick()}>
      {props.children}
    </StyledLink>
  );
}

// -----------------------------------
// EXPORT ----------------------------
// -----------------------------------
export default NavLink;
// Dependencies
// -----------------------------------
import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faHome from "@fortawesome/fontawesome-free-solid/faHome";
import faUser from "@fortawesome/fontawesome-free-solid/faUser";

// -----------------------------------
// CONST->FA-ICONS -------------------
// -----------------------------------
const faIcons = {
  home: faHome,
  profile: faUser,
};

// -----------------------------------
// CONST->SOLID-ICONS ----------------
// -----------------------------------
const SolidIcon = props => {
  return <FontAwesomeIcon icon={faIcons[props.icon]} />;
};

// -----------------------------------
// EXPORT ----------------------------
// -----------------------------------
export default SolidIcon;
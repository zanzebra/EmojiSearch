import React from "react";
import { StyledHeader } from "./styles";
import PropTypes from "prop-types";

const Header = ({ text }) => {
  return <StyledHeader>{text}</StyledHeader>;
};

Header.defaultProps = {
  text: "",
};
Header.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Header;

import styled from "styled-components";
import breakpoints from "../theme/breakpoints";

export const StyledHeader = styled.div`
  font-family: Yeseva One;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 55px;
  color: #f7f7f7;
  ${breakpoints("font-size", [
    { 1440: "48px" },
    { 1024: "40px" },
    { 768: "35px" },
    { 425: "35px" },
    { 375: "35px" },
    { 320: "35px" },
  ])};
`;

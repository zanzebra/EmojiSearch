import styled, { css } from "styled-components";
import breakpoints from "../theme/breakpoints";

export const StyledHeader = styled.div`
  font-family: Yeseva One;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 55px;
  color: #f7f7f7;
  margin: 30px 0;
  ${breakpoints("font-size", [
    { 1440: "48px" },
    { 1024: "40px" },
    { 768: "35px" },
    { 425: "35px" },
    { 375: "35px" },
    { 320: "35px" },
  ])};
`;
export const StyledSearchContainer = styled.div`
  margin: 30px 0;
  width: 100%;
  max-width: 700px;
  height: 80px;
  background: #2e2e2e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 10px;
`;
export const StyledSearchInput = styled.input`
  appearance: none;
  background: none;
  border: none;
  outline: none;
  padding: 10px 20px;
  width: calc(100% - 150px);
  color: #7e7e7e;
  ${breakpoints("font-size", [
    { 1440: "25px" },
    { 1024: "18px" },
    { 768: "16px" },
    { 425: "15px" },
    { 375: "14px" },
    { 320: "14px" },
  ])};
  &::placeholder {
    ${breakpoints("font-size", [
      { 1440: "25px" },
      { 1024: "18px" },
      { 768: "16px" },
      { 425: "15px" },
      { 375: "14px" },
      { 320: "14px" },
    ])};
    color: #7e7e7e;
  }
`;
export const StyledSearchButton = styled.button`
  background: #f0b03a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  max-width: 150px;
  width: 100%;
  height: 100%;
  border: none;
  color: #000;
  ${breakpoints("font-size", [
    { 1440: "25px" },
    { 1024: "18px" },
    { 768: "16px" },
    { 425: "15px" },
    { 375: "14px" },
    { 320: "14px" },
  ])};
`;
export const StyledNavigation = styled.div`
  display: flex;
  width: 300px;
  margin: 20px 0;
  justify-content: space-between;
`;

export const StyledNavCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #2e2e2e;
  cursor: pointer;
  svg {
    width: 12px;
    height: 20px;
  }
`;

export const StyledCardDeck = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  height: 300px;
  align-items: center;
`;
export const StyledCardLarge = styled.div`
  width: 300px;
  position: absolute;
  height: 300px;
  background: #fff;
  background: #f1f1f1;
  box-shadow: 8px 8px 24px rgba(130, 130, 130, 0.25);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: ${({ pos }) => (pos > 1 ? (pos * 15).toString() + "px" : "0px")};
  ${({ zIndex }) =>
    zIndex &&
    css`
      z-index: ${zIndex};
    `}
  ${({ width }) =>
    width &&
    css`
      width: ${width + "px"};
      height: ${width + "px"};
    `};
`;

import styled, { css } from "styled-components";
import breakpoints from "../theme/breakpoints";

export const StyledSideDrawer = styled.div`
  height: 100vh;
  z-index: 1;
  overflow-y: auto;
  max-width: 300px;
  width: 100%;
  padding: 20px;
  ${({ length }) =>
    length <= 0 &&
    css`
      max-width: 0px;
      padding: 0px;
    `}
  @media (max-width: 768px) {
    position: fixed;
    height: 120px;
    bottom: 0;
    width: 100vw;
    background: #2e2e2e;
    overflow-y: hidden;
    max-width: 100%;
    padding: 0px 5px;
    ${({ length }) =>
      length <= 0 &&
      css`
        opacity: 0;
      `}
  }
  &::-webkit-scrollbar {
    width: 8px;
    height: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #1b1b1b;
  }
  &::-webkit-scrollbar-thumb {
    background: #333333;
    border-radius: 4px;
  }
`;

export const StyledMainContainer = styled.div`
  width: calc(100% - 300px);
  ${({ length }) =>
    length <= 0 &&
    css`
      width: 100%;
    `};
  height: 100%;
  display: flex;
  transition: all 0.3s ease-in-out;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  ${breakpoints("padding", [
    { 1440: "40px" },
    { 1024: "30px" },
    { 768: "30px" },
    { 425: "30px" },
    { 375: "20px" },
    { 320: "20px" },
  ])}
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const Grid = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    max-width: calc(100vw - 500px);
  }
  @media (max-width: 768px) {
    margin-top: 50px;
    max-width: 100%;
  }
`;

import styled, { css } from "styled-components";
import breakpoints from "../theme/breakpoints";

export const StyledHeader = styled.div`
  font-weight: 900;
  font-size: 55px;
  ${breakpoints("font-size", [
    { 1440: "55px" },
    { 1024: "50px" },
    { 768: "40px" },
    { 425: "40px" },
    { 375: "40px" },
    { 320: "35px" },
  ])};
  line-height: 55px;
  color: #f7f7f7;
  margin: 30px 0;
  ${breakpoints("margin", [
    { 1440: "30px 0" },
    { 768: "20px 0" },
    { 425: "15px 0" },
  ])};
`;
export const StyledSearchContainer = styled.form`
  margin: 30px 0;
  ${breakpoints("margin", [
    { 1440: "30px 0" },
    { 768: "20px 0" },
    { 425: "15px 0" },
  ])};
  width: 100%;
  max-width: 700px;
  height: 80px;
  ${breakpoints("height", [
    { 1440: "80px" },
    { 768: "60px" },
    { 425: "50px" },
  ])};
  background: #2e2e2e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 10px;
  ${breakpoints("padding", [
    { 1440: "10px" },
    { 768: "7.5px" },
    { 425: "5px" },
  ])};
`;
export const StyledSearchInput = styled.input`
  appearance: none;
  background: none;
  border: none;
  outline: none;
  padding: 10px 20px;
  width: calc(100% - 150px);
  ${breakpoints("width", [
    { 1440: "calc(100% - 150px)" },
    { 768: "calc(100% - 120px)" },
    { 425: "calc(100% - 80px)" },
  ])};
  height: 100%;
  font-size: 25px;
  font-weight: bold;
  color: #7e7e7e;
  ${breakpoints("font-size", [
    { 1440: "20px" },
    { 1024: "18px" },
    { 768: "16px" },
    { 425: "15px" },
    { 375: "14px" },
    { 320: "14px" },
  ])};
  &::placeholder {
    ${breakpoints("font-size", [
      { 1440: "20px" },
      { 1024: "18px" },
      { 768: "16px" },
      { 425: "15px" },
      { 375: "14px" },
      { 320: "14px" },
    ])};
    color: #7e7e7e;
    font-weight: bold;
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
  font-size: 20px;
  font-weight: bold;
  ${breakpoints("font-size", [
    { 1440: "20px" },
    { 1024: "18px" },
    { 768: "16px" },
    { 425: "15px" },
    { 375: "14px" },
    { 320: "14px" },
  ])};
  ${breakpoints("max-width", [
    { 1440: "150px" },
    { 768: "120px" },
    { 425: "80px" },
  ])};
`;

export const StyledCardDeck = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  height: 250px;
  ${breakpoints("height", [
    { 1440: "250px" },
    { 768: "230px" },
    { 425: "200px" },
  ])};
  width: 100%;
  max-width: 700px;
  align-items: center;
  margin: 30px 0;
  ${breakpoints("margin", [
    { 1440: "30px 0" },
    { 768: "20px 0" },
    { 425: "15px 0" },
  ])};
`;
export const StyledCardLarge = styled.div`
  width: 100%;
  max-width: 700px;
  height: 200px;
  background: #2e2e2e;
  box-shadow: 8px 8px 24px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  margin: auto;
  height: calc(100% - 50px);
`;

export const CardEmojiContent = styled.div`
  font-size: 100px;
  ${breakpoints("font-size", [
    { 1440: "100px" },
    { 1024: "90px" },
    { 768: "90px" },
    { 425: "80px" },
    { 375: "80px" },
    { 320: "65px" },
  ])};
`;
export const CardTextContent = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  ${breakpoints("font-size", [
    { 1440: "20px" },
    { 1024: "20px" },
    { 768: "18px" },
    { 425: "16px" },
    { 375: "15px" },
    { 320: "15px" },
  ])};
  color: #7e7e7e;
`;
export const StyledMiniCardList = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 20px;
  width: 100%;
  @media (max-width: 768px) {
    padding: 5px;
    flex-wrap: nowrap;
    overflow-x: auto;
    width: 100%;
    justify-content: flex-start;
  }
`;

export const StyledMiniCard = styled.div`
  background: #1b1b1b;
  box-shadow: 12px 12px 18px rgba(4, 4, 4, 0.1);
  border-radius: 20px;
  margin: 10px;
  width: 80px;
  min-width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  ${breakpoints("font-size", [
    { 1440: "40px" },
    { 1024: "35px" },
    { 768: "20px" },
    { 375: "18px" },
    { 320: "16px" },
  ])};
  cursor: pointer;
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    min-width: 50px;
    margin: 7.5px;
    border-radius: 10px;
  }
  position: relative;
  ${({ active }) =>
    active &&
    css`
      background: #101010;
    `}
`;

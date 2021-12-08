import styled from "styled-components";
import breakpoints from "../theme/breakpoints";

export const StyledHeader = styled.div`
  font-weight: 900;
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
export const StyledSearchContainer = styled.form`
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
  font-size: 25px;
  font-weight: bold;
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
  font-size: 30px;
  font-weight: bold;
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
    width: 20px;
    height: 12px;
  }
`;

export const StyledCardDeck = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  height: 300px;
  width: 100%;
  max-width: 700px;
  align-items: center;
  margin: 40px 0;
`;
export const StyledCardLarge = styled.div`
  width: 100%;
  max-width: 700px;
  height: 300px;
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
  font-size: 120px;
  ${breakpoints("font-size", [
    { 1440: "120px" },
    { 1024: "100px" },
    { 768: "100px" },
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
    padding: 10px;
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
  cursor: pointer;
  ${breakpoints("font-size", [
    { 1440: "40px" },
    { 1024: "35px" },
    { 768: "30px" },
    { 425: "25px" },
    { 375: "24px" },
    { 320: "20px" },
  ])};
`;

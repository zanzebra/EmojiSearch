import styled from "styled-components";

export const StyledAppContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  background: #171717;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  max-width: 1500px;
  @media (min-width: 1024px) {
    align-items: center;
  }
`;

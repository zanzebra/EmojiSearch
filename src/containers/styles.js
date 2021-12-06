import styled from "styled-components";

export const StyledSideDrawer = styled.div`
  right: 0;
  top: 0;
  height: 100vh;
  z-index: 1;
  overflow-y: auto;
  max-width: 300px;
  width: 100%;
  background: #2e2e2e;
`;

export const StyledMainContainer = styled.div`
  width: calc(100% - 300px);
  height: 100%;
  display: flex;
  transition: all 0.3s ease-in-out;
  flex-direction: column;
  padding: 40px 15px;
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
`;

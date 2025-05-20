
import { styled } from "styled-components";

export const Content = styled.div`
  & > h1 {
    font-family: 'Gotham', sans-serif;
    padding-top: 1rem;
  }
`;

export const LandingContent = styled.div`
  height: calc(100vh - 97px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
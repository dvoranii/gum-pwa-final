import styled from 'styled-components';
import { colors } from "../../../../../constants/colors";

export const SecondColumnWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  height: 92%;
  padding: 0 2rem 0 1rem;
  position: relative;
`;

export const TopImageWrapper = styled.div`
  img {
    width: 75%;
    height: auto;
    margin-top:2rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

export const TextContent = styled.div`
  margin-bottom: 0.2rem;
  padding-right: 4.2rem;
  
  h2 {
    font-family: "Gotham", sans-serif;
    color: ${colors.primary};
    margin-bottom: 0.4rem;
    font-size: 1.25rem;
  }
  
  ul {
    padding-left: 1.2rem; 
    font-family: "Gotham", sans-serif;
    color: ${colors.black};
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
  }
`;

export const BottomImageWrapper = styled.div`
  margin-bottom: 0.2rem;
  img {
    width: 27%;
    height: auto;
  }
`;

export const SpecsSection = styled.div`
  border-top: 1px solid ${colors.black};
  padding: 0.5rem 0;
`;

export const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
  align-items: center;
`;

export const SpecItem = styled.div`
  font-family: "Gotham", sans-serif;
  color: ${colors.black};
  font-size: 0.8rem;
  
  &:first-child {
    text-align: left;
  }
  
  &:last-child {
    text-align: center;
  }
`;
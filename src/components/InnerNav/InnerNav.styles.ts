import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const NavTabsOuter = styled.div`
    display: flex;
    justify-self: flex-end;
    height: 36px;

    @media screen and (min-width: 2300px) {
        height: 56px;

    }
`;

export const GumLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1rem;
    
    & > img {
        height: 32px;
        width:auto;
    }

    @media screen and (min-width: 2300px) {
      & > img {    
            height: 56px;
        }
    }
`;

export const NavTabs = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-transform: uppercase;
  background-color: #02a6a7;
`;

export const TabLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  white-space: nowrap;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  position: relative;
  font-family: 'Gotham', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: clamp(0.75rem, 0.7vw + 0.5rem, 1.85rem);
  letter-spacing: 0.6px;
  -webkit-tap-highlight-color: transparent;

  
  &.active {
    background-color: #018384;
  }

  @media screen and (min-width: 2300px) {
    font-size: 1.75rem;
    padding: 0.5rem 3rem 0.5rem 1rem;
  }

`;
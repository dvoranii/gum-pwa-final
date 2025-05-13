import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const NavTabsOuter = styled.div`
    display: flex;
    justify-self: flex-end;
`;

export const GumLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1rem;
    
    & > img {
        height: 32px;
        width:auto;
    }

    @media screen and (max-width: 1024px) {
      & > img {    
            height: 30px;
        }
    }
`;

export const NavTabs = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-transform: uppercase;
  margin-top: 2rem;
  background-color: #02a6a7;
  margin-bottom: 2rem;
`;

export const TabLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
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
  font-size: clamp(0.75rem, 0.7vw + 0.5rem, 0.85rem);

  
  &.active {
    background-color: #018384;
  }

  @media (max-width: 1024px) {
    padding: 0.5rem 0.4rem;
    font-size: 0.65rem;
  }
`;
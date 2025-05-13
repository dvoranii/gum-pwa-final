import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BtcContainer = styled.div`
`;

export const NavTabsOuter = styled.div`
    display: flex;
    justify-self: flex-end;
`;

export const GumLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1rem;
    & > img {
        height: 36px;
        width:auto;
    }
`;

export const NavTabs = styled.nav`
  height: 36px;
  display: flex;
  text-transform: uppercase;
  width: fit-content;
  margin-top: 2rem;
  background-color: #02a6a7;
  margin-bottom: 2rem;
`;

export const TabLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0.5rem 0.8rem;
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

export const Content = styled.div`
  max-width: 1200px;
`;


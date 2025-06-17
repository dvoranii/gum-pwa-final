import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { colors } from "../../constants/colors";

export const NavTabsOuter = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 32px;

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
  max-width: fit-content;
  text-transform: uppercase;
  background-color: ${colors.dotBGActive2};
`;

export const TabLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  white-space: nowrap;
  min-width: fit-content;
  flex: 0 1 auto;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #ffffff;
  font-weight: 400;
  position: relative;
  font-family: 'Gotham', sans-serif;
  font-style: normal;
  font-size: clamp(0.85rem, 0.7vw, 1.85rem);
  letter-spacing: 1px;
  -webkit-tap-highlight-color: transparent;

  @media screen and (max-width: 1100px) {
    padding: 0 0.75rem;
  }

  &.active {
    background-color: #018384;
  }

  @media screen and (min-width: 2300px) {
    font-size: 1.75rem;
    padding: 0.5rem 1.8rem 0.5rem 1.8rem;
  }
`;
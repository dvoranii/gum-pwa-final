import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { colors } from "../../constants/colors";

export const NavTabsOuter = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 32px;
  user-select: none;
`;

export const GumLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;

  & > img {
    height: 32px;
    width: auto;
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
  padding: 0 0.75rem;
  text-decoration: none;
  color: #ffffff;
  font-weight: 400;
  position: relative;
  font-family: "Gotham", sans-serif;
  font-style: normal;
  font-size: clamp(0.85rem, 0.7vw, 1.85rem);
  letter-spacing: 1px;
  -webkit-tap-highlight-color: transparent;

  &.active {
    background-color: #018384;
  }
`;

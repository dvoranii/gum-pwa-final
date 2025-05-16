import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const SidebarContainer = styled.nav`
  width: calc(100vh / 8); 
  min-width: 128px;
  height: 100vh;
  z-index: 100;
  background-color: #f8f8f8;
`;


export const NavList = styled.ul`
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const NavItem = styled.li`
  aspect-ratio: 1;
  width: 100%;
  flex: 1; 
  min-height: 0; 
  position: relative;
`;


export const NavIcon = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover; 
  aspect-ratio: 1;
  display: block;
`;

export const NavButton = styled(NavLink)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;

  &.active {
    background-color: #e0e0e0;
  }

`;
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const SidebarContainer = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 120px; 
  height: 100vh;
  z-index: 100;
  background-color: #f8f8f8;
  overflow: hidden;
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
  width: 100%;
  flex: 1; 
  min-height: 0; 
  position: relative;
`;

export const NavButton = styled(NavLink)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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

  &:hover {
    background-color: #e9e9e9;
  }
`;

export const NavIcon = styled.img`
  width: 100%; 
  height: 100%;
  object-fit: cover; 
  aspect-ratio: 1;
  display: block;
`;

export const NavText = styled.span`
  font-size: 12px;
  text-align: center;
  margin-top: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;
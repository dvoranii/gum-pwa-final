import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BtcContainer = styled.div`
  padding: 20px;
  margin-left: 120px; 
`;

export const Title = styled.h1`
  color: #2c3e50;
  margin-bottom: 1.5rem;
`;

export const NavTabs = styled.nav`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid #e0e0e0;
`;

export const TabLink = styled(NavLink)`
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  position: relative;
  
  &:hover {
    color: #0077cc;
  }
  
  &.active {
    color: #0077cc;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      right: 0;
      height: 2px;
      background-color: #0077cc;
    }
  }
`;

export const Content = styled.div`
  max-width: 1200px;
`;


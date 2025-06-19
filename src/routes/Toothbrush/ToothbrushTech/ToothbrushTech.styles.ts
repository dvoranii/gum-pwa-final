import styled from 'styled-components';


export const ContainerOuter = styled.div`
  display: flex;
  width: 100%;
  height: 82vh;
  gap: 40px;
  padding-left: 5%;
  align-items: center;
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vh;

`;

export const SideIcon = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  
  img {
    position: absolute;
    height: auto;
    max-width: 100%; 
  }
`;

export const TechContainer = styled.div`
  display: flex;
  width: 87%;
  height: 92%;
  background-color: #ffffff;
  border-top-left-radius: 28px;
  border-bottom-left-radius: 28px;
  box-shadow: 0px 0px 12px rgba(54, 54, 54, 0.12);
  margin-top: 1.8rem;
  overflow: hidden;
`;

export const MainContent = styled.div`
  width: 100%;
  overflow: hidden;
`;


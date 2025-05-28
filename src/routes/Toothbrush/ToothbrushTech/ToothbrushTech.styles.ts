import styled from 'styled-components';


export const ContainerOuter = styled.div`
  display: flex;
  width: 100%;
  height: 82vh;
  gap: 40px;
`;

export const HeaderLeft = styled.div`
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  width: 20vh;
  padding-right: 20px;

`;

export const SideIcon = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  cursor: pointer;
  
  img {
    position: absolute;
    height: auto;
    max-width: 100%; 
  }
`;

export const TechContainer = styled.div`
  display: flex;
  width: 87%;
  background-color: #ffffff;
  border-radius: 24px;
  box-shadow: 0px 0px 12px rgba(54, 54, 54, 0.12);
  margin-top: 1.8rem;
  overflow: hidden;

  @media screen and (max-width: 1366px) {
    margin-top: 0;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  overflow: hidden;
`;


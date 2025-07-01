import styled from 'styled-components';

export const SecondColumnWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
  position: relative;
`;

export const ImageWrapper = styled.div`
  width: 110%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: -1;
  
  img {
    width: 100%;
    height: auto;
    max-width: 100%;
    object-fit: contain;
    margin-left: -240px;
    margin-bottom: -2rem;
  }

  @media screen and (max-width:1080px) {
    img {
        margin-left: -170px;
    }
  }
`;
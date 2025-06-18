import { styled } from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const HeaderRight = styled.div`
  padding: 60px 40px 40px 60px;
  flex: 2;
  min-width: 0;

 @media screen and (min-width: 2300px) {
     padding: 120px 30px 40px 141px;
  }
`;

export const MainTitle = styled.h1`
  font-family: "Gotham", sans-serif;
  font-weight: 700;
  color: #00a16b;
  font-size: clamp(18px, 4vw, 6.4rem);
  line-height: 1;
`;

export const Trademark = styled.sup`
  position: absolute;
  font-weight: 700;

  @media screen and (min-width: 2300px) {
    font-size: 5.4rem;
  }

`;

export const Description = styled.ul`
  font-family: "Gotham", sans-serif;
  font-size: clamp(16px, 2vw, 2.4rem);
  color: #666666;
  line-height: 1.1;
  margin-bottom: 30px;
  padding-inline-start: 10px;
  letter-spacing: -1px;
  padding-top: 1.2rem;
  padding-right: 4px;

`;

export const DiagramSection = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 1.2rem;

`;

export const AngleDemo = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }


  @media screen and (min-width: 2300px) {
    width: 150px;
    height: 150px;
  }
`;

export const CrossSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: relative;
`;

export const DiagramLabel = styled.span`
  font-family: "Gotham", sans-serif;
  font-size: 12px;
  color: #666666;
  text-align: center;
  margin-bottom: 5px;

  @media screen and (max-width: 1366px) {
    font-size: 10px;
  }

  @media screen and (min-width: 2300px) {
    font-size: 14px;
  }
`;

export const CrossSectionDiagram = styled.div`
  display: flex;
  margin-bottom: 10px;

  img {
    width: 70%;
    height: auto;
  }

   @media screen and (max-width: 1024px) {
        margin-bottom: 0;
   }

  @media screen and (max-width: 1368px) {
    img {
        width: 100%;
    }
  }

  @media screen and (min-width: 2300px) {
    img {
        width: 95%;
    }
  }

`;

export const CrossSectionIcon = styled.div`
  position: absolute;
  right: -50px;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;

  img {
    width: 100%;
    height: 100%;
  }

`;

export const BenefitsList = styled.ul`
    line-height: 1.35;
    padding-inline-start: 20px;

    @media screen and (max-width: 1024px) {
        padding-top: 0;
    }
  
`;

export const BenefitItem = styled.li`
  font-family: "Gotham", sans-serif;
  font-size: clamp(16px, 1.7vw, 2.4rem);
  color: #00a16b;
  font-weight: 600;
  margin: 0;

  @media screen and (max-width: 1024px) {
    font-size: 1.3vw;
  }

  @media screen and (min-width: 1368px) {
    font-size: 1.5vw;
  }

  @media screen and (min-width: 2300px) {
    font-size: 1.8vw;
  }
`;

export const HandImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1.3;
  min-width: 0;

  img {
    width: auto;
    height: 100%;
    max-width: 100%;
    aspect-ratio: 211 / 475;
  }

`;
import { styled } from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const HeaderRight = styled.div`
  padding: 60px 20px 40px 80px;

 @media screen and (min-width: 2300px) {
     padding: 120px 30px 40px 141px;
  }
`;

export const MainTitle = styled.h1`
  font-family: "Gotham", sans-serif;
  font-weight: 700;
  color: #00a16b;
  font-size: clamp(18px, 4.2vw, 6.4rem);
  line-height: 1;
  margin-bottom: 20px;
  letter-spacing: -2px;
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
  font-size: clamp(18px,1.8vw,2.4rem);
  color: #666666;
  line-height: 1.25;
  margin-bottom: 30px;
  padding-inline-start: 20px;
  letter-spacing: -1px;
  padding-right: 185px;

  @media screen and (max-width: 1368px) {
    font-size: 2vw;
    padding-right: 0;
  }

  @media screen and (min-width: 2300px) {
    font-size: 2vw;
  }
`;

export const DiagramSection = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 12px;

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
    padding-top: 2.4rem;
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

export const HandImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  img {
    width: auto;
    height: 100%;
  }

`;
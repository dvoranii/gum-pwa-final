import { styled } from "styled-components";

export const ContentWrapper = styled.div`
    display: flex;
`;

export const ColumnLeft = styled.div`
    max-width: 62%;
    padding: 40px 0 40px 50px;
`;

export const MainTitle = styled.h1`
  font-family: "Gotham", sans-serif;
  font-weight: 700;
  color: #00a16b;
  font-size: clamp(18px, 3.1vw, 6.4rem);
  line-height: 1;
  padding-right: 25px;
  padding-top: 1.4rem;
`;

export const Description = styled.ul`
  font-family: "Gotham", sans-serif;
  font-size: clamp(16px, 1.5vw, 2.4rem);
  color: #666666;
  line-height: 1.2;
  margin-bottom: 24px;
  padding-inline-start: 6px;
  padding-top: 0.8rem;
  padding-right: 60px;

  sup {
    font-size: 12px;
  }

`;

export const ColLeftImgWrapper = styled.div`
    img {
        width: 90%;
    }
`;

export const ColLeftList = styled.ul`
    font-family: 'Gotham', sans-serif;
    margin-top: 1.2rem;
    padding-inline-start: 20px;

    li {
        font-size: clamp(16px, 1.4vw, 2.4rem);
        color: #00a16b;
        font-weight: 600;
    }
`;

export const ColumnRight = styled.div`
    width: 40%;
    display: flex;
    justify-content: flex-end;
`;

export const BristlesDiagramWrapper= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    img {
        width: 90%;
        height: auto;
        padding-top: 1.2rem;
    }

`;
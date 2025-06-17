import { styled } from "styled-components";

export const ContentWrapper = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    gap: 1.2rem;
`

export const ColumnLeft = styled.div`
    max-width: 60%;
    padding: 30px 0 30px 60px;

    @media screen and (min-width: 2300px) {
        padding: 0px 0 40px 100px;    
    }
`;

export const MainTitle = styled.h1`
  font-family: "Gotham", sans-serif;
  font-weight: 700;
  color: #00a16b;
  font-size: clamp(18px, 3.2vw, 6.4rem);
  line-height: 1;

  @media screen and (min-width: 2300px){
      margin-bottom: 20px;
  }
`;

export const Description = styled.ul`
  font-family: "Gotham", sans-serif;
  font-size: clamp(16px, 1.5vw, 2.4rem);
  color: #666666;
  line-height: 1.1;
  margin-bottom: 30px;
  padding-inline-start: 20px;
  letter-spacing: -1px;
  padding-top: 1.2rem;
  padding-right: 80px;

  @media screen and (max-width: 1368px) {
    font-size: 2vw;
    padding-right: 0;
  }

  @media screen and (min-width: 2300px) {
    font-size:clamp(16px, 1.9vw, 3.4rem);
    padding-right: 93px;
  }
`;

export const ColLeftImgWrapper = styled.div`
    img {
        width: 85%;
    }
`;

export const ColLeftList = styled.ul`
    font-family: 'Gotham', sans-serif;
    margin-top: 1.2rem;
    padding-inline-start: 20px;

    li {
        font-size: clamp(16px, 1.6vw, 2.4rem);
        color: #00a16b;
        font-weight: 600;
    }

    @media screen and (min-width: 2300px) {
        margin-top: 2.4rem;
    }
`;

export const ColumnRight = styled.div`
    width: 40%;
    display: flex;
    justify-content: flex-end;
`;

export const BristlesDiagramWrapper= styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: auto;
        padding: 2.4rem 0;
    }

    @media screen and (min-width: 2300px) {
        img {
            width: 100%;
            height: auto;
            padding-top: 6.2rem;
        }
    }
`
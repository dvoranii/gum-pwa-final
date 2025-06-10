import { styled } from "styled-components";
import { colors } from "../../../../../constants/colors";

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const TopRow = styled.div`
    display: flex;
`;

export const BottomRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    img {
        width: 100%;
        margin-top: -100px;

    }

    @media screen and (min-width: 2300px) {
        img {
            width: 100%;
        }
    }
`;

export const ColumnLeft = styled.div`
    max-width: 60%;
    padding:80px 0 40px 80px;

    sup {
        font-size: 18px;
    }


    @media screen and (max-width: 1024px) {
        padding: 60px 0 40px 60px;
    }

    @media screen and (min-width: 2300px) {
        padding: 120px 0 0 120px;    
    }
`;

export const MainTitle = styled.h1`
  font-family: "Gotham", sans-serif;
  font-weight: 700;
  color: ${colors.primary};
  font-size: clamp(18px, 3.2vw, 6.4rem);
  line-height: 1;
  padding-right: 20px;
  z-index: 99;

  @media screen and (min-width: 2300px){
      margin-bottom: 20px;
      font-size: 3.4vw;
  }
`;

export const Description = styled.ul`
  font-family: "Gotham", sans-serif;
  font-size: clamp(16px, 1.5vw, 2.4rem);
  color: ${colors.black};
  line-height: 1.25;
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
    padding-right: 0px;
  }
`;

export const ColumnRight = styled.div`
    width: 40%;
    display: flex;
    justify-content: flex-end;
`;

export const ColRightDiagramWrapper= styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;

    img {
        width: 75%;
        height: auto;
        padding: 2.4rem 0;
    }

    @media screen and (min-width: 2300px) {
        img {
            width: 95%;
            height: auto;
            margin-left: -22px;
        }
    }
`;

export const ImgTextWrapper = styled.div`
    display: flex;
`;

export const TextWrapper = styled.div`
    flex: 2;
    h2 {
        color: ${colors.primary};
        font-size: clamp(18px, 3.4vw, 6.4rem);
        font-family: "Gotham", sans-serif;
        letter-spacing: -2px;
        padding-top: 1.4rem;
    }

    p {
        color: ${colors.black};
        font-family: "Gotham", sans-serif;
        font-size: clamp(16px, 1.2vw, 1.8rem);
    }

    @media screen and (min-width: 2300px) {
        h2 {
            font-size: clamp(18px, 3.8vw, 6.4rem);
            padding-top: 4.2rem;
        }
    }
`;
export const ImgWrapper = styled.div`
    flex: 0.8;

    img {
        width: 100%;
    }

    @media screen and (max-width: 1024px) {
        flex: 0.7;
    }

    @media screen and (max-width: 1368px) {
        flex: 1;
    }

    @media screen and (min-width: 2300px) {
        flex: 1.2;
    }
`;
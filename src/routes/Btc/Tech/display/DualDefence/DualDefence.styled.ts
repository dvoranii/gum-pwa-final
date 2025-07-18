import { styled } from "styled-components";
import { colors } from "../../../../../constants/colors";

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`;

export const TopRow = styled.div`
    display: flex;
`;

export const BottomRow = styled.div`
    img {
        width: 100%;
    }
`;

export const ColumnLeft = styled.div`
    max-width: 60%;
    padding: 20px 0 0px 60px;

    sup {
        font-size: 12px;
    }

`;

export const MainTitle = styled.h1`
  font-family: "Gotham", sans-serif;
  font-weight: 700;
  color: ${colors.primary};
  font-size: clamp(18px, 3.2vw, 6.4rem);
  line-height: 1;
  z-index: 99;
  padding-left: 16px;

`;

export const Description = styled.ul`
  font-family: "Gotham", sans-serif;
  font-size: clamp(16px, 2vw, 2.4rem);
  color: ${colors.black};
  line-height: 1.25;
  margin-bottom: 30px;
  padding-inline-start: 24px;
  letter-spacing: -1px;
  padding-top: 0.8rem;
  padding-right: 80px;

  sup {
    font-size: 12px;
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
`;
export const ImgWrapper = styled.div`
    flex: 1;

    img {
        width: 100%;
    }

`;
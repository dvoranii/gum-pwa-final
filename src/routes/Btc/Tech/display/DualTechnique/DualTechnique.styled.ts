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

export const ColumnLeft = styled.div`
    max-width: 60%;
    padding: 20px 0 0px 60px;
`;

export const MainTitle = styled.h1`
  font-family: "Gotham", sans-serif;
  font-weight: 700;
  color: ${colors.primary};
  font-size: clamp(18px, 3.4vw, 6.4rem);
  line-height: 1;
  padding-right: 20px;
`;

export const Description = styled.ul`
  font-family: "Gotham", sans-serif;
  font-size: clamp(16px, 2vw, 2.4rem);
  color: ${colors.black};
  line-height: 1.25;
  margin-bottom: 20px;
  padding-inline-start: 8px;
  letter-spacing: -1px;
  padding-top: 0.8rem;
  padding-right: 70px;

  sup {
    font-size: 12px;
  }

    li:nth-child(2) {
        padding-top: 0.8rem;
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
        width: 100%;
        height: auto;
        margin-left: -64px;
        margin-top: 48px;

    }
`;


export const ImgWrapper = styled.div`
    width: 35%;
    
    img {
        width: 100%;
    }
`;
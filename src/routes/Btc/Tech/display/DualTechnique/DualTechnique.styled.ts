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

export const ColumnLeft = styled.div`
    max-width: 60%;
    padding:80px 0 40px 80px;

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
  font-size: clamp(18px, 3.4vw, 6.4rem);
  line-height: 1;
  padding-right: 20px;

  @media screen and (min-width: 2300px){
      margin-bottom: 20px;
      font-size: 3.4vw;
      padding-left: 8px;
  }
`;

export const Description = styled.ul`
  font-family: "Gotham", sans-serif;
  font-size: clamp(16px, 2vw, 2.4rem);
  color: ${colors.black};
  line-height: 1.25;
  margin-bottom: 30px;
  padding-inline-start: 8px;
  letter-spacing: -1px;
  padding-top: 1.2rem;
  padding-right: 70px;

  sup {
    font-size: 16px;
  }

    li:nth-child(2) {
        padding-top: 1.4rem;
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
        width: 100%;
        height: auto;
        margin-left: -64px;
        margin-top: 48px;

    }

    @media screen and (min-width: 2300px) {
        img {
            width: 100%;
            padding-top: 13.2rem;
            height: auto;
            margin-left: -100px;
        }
    }
`;


export const ImgWrapper = styled.div`
    width: 35%;
    img {
        width: 100%;
    }
`;
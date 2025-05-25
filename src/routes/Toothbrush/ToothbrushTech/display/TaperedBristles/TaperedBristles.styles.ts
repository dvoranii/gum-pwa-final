import { styled } from "styled-components";

export const ContentWrapper = styled.div`
    padding: 80px 60px;
`

export const ColumnLeft = styled.div`
    max-width: 60%;
`;

export const MainTitle = styled.h1`
  font-family: "Gotham", sans-serif;
  font-weight: 700;
  color: #00a16b;
  font-size: clamp(18px, 3.2vw, 6.4rem);
  line-height: 1;
  margin-bottom: 20px;
  padding-right: 20px;
`;

export const Description = styled.ul`
  font-family: "Gotham", sans-serif;
  font-size: clamp(16px, 1.5vw, 2.4rem);
  color: #666666;
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
    padding-right: 93px;
  }
`;

export const ColumnRight = styled.div`
    width: 40%;
`;
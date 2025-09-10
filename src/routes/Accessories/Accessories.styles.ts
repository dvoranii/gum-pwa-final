import { styled } from "styled-components";
import { colors } from "../../constants/colors";

export const Content = styled.div`
  width: 86%;
  margin: 0 auto;
  height: 95%;
  display: flex;
`;

export const AccessoriesWrapperOuter = styled.div`
  position: relative;
  width: 100%;
  height: 95%;
  display: flex;
`;

export const Row = styled.div`
  width: 100%;
`;

export const TextWrapper = styled.div`
  flex: 1;
  h2 {
    color: ${colors.primary};
    font-family: "Gotham", sans-serif;
    font-weight: 600;
    font-size: clamp(18px, 1.8vw, 2.4rem);
    text-transform: uppercase;

    span {
      font-weight: 300;
    }
  }
`;

interface RowWrapperInnerProps {
  $gap?: string;
}

export const RowWrapperInner = styled.div<RowWrapperInnerProps>`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.black};
  padding-bottom: 2.4rem;
  gap: ${(props) => props.$gap};

  @media screen and (max-width: 1080px) {
    padding-bottom: 1.2rem;
  }
`;

interface MetaDataWrapperProps {
  $gridTemplate?: string;
}

export const MetaDataWrapper = styled.div<MetaDataWrapperProps>`
  display: grid;
  grid-template-columns: ${(props) => props.$gridTemplate || "1fr 1fr"};
  gap: 1rem;
  align-items: center;
  padding-top: 0.2rem;

  p {
    font-family: "Gotham", sans-serif;
    font-weight: 300;
    font-size: clamp(14px, 1.2vw, 1.4rem);
    color: ${colors.black};
    margin: 0;
  }

  @media screen and (max-width: 1080px) {
    gap: 0.5rem;
  }
`;

interface ImgWrapperProps {
  $width?: string;
  $flex?: string;
}

export const ImgWrapper = styled.div<ImgWrapperProps>`
  display: flex;
  flex: ${(props) => (props.$flex ? props.$flex : "1")};
  align-items: flex-end;

  img {
    width: ${(props) => (props.$width ? props.$width : "90%")};
  }
`;

export const Slide = styled.div`
  width: 100%;
  padding: 12px 32px;
  height: 68vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 1.4rem;
`;

export const ListContainer = styled.div`
  ul {
    font-family: "Gotham", sans-serif;
    font-size: clamp(16px, 1.4vw, 2.2rem);
    color: ${colors.black};
    padding: 0.4rem 0;
    line-height: 1;
    margin-inline-start: 24px;
  }
`;

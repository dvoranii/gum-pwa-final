
import { styled } from "styled-components";
import { colors } from "../../constants/colors";

export const Content = styled.div`
  height: 95%;
  & > h1 {
    font-family: 'Gotham', sans-serif;
    padding-top: 1rem;
  }
`;
export const OperatoryWrapper = styled.div`
  height: 100%;
  width: 85%;
  margin: 0 auto;
 
`;
export const OperatoryWrapperInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;
  height: 100%;
  width: 100%;
  
  small {
      font-family: 'Gotham', sans-serif;
      font-weight: 500;
      font-size:clamp(1.2rem, 1.2vw, 1.8rem);
      color: ${colors.black};
  }
`;

export const ImgWrapper1 = styled.div`
  padding-bottom: 0.5rem;  
  img {
      width: 50%;
    }
`;


export const ImgWrapper2 = styled.div`
  img {
    width: 80px;
    height: auto;
  }
`;
export const ImgWrapper3 = styled.div`
  img {
      width: 88%;
  }
`;

export const ColLeft = styled.div`
  flex: 1.4;
`;
export const ColRight = styled.div`
  flex:1;
`;

export const Row1 = styled.div`
  border-bottom: 1px solid black;
`;

export const Row2 = styled.div`
  width: 100%;
  margin-top: 12px;
  display: flex;
  align-items: center;
`;


export const Row2Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1.2rem;

  p {
    font-family: "Gotham", sans-serif;
    font-weight: 300;
    color: ${colors.black};
    font-size: clamp(14px, 1.2vw, 1.4rem);
    white-space: nowrap; 
  }
`;


export const TextImgWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  
  p {
    white-space: nowrap; 
  }
`;

export const ListContainer = styled.div` 
    ul {
        font-family: 'Gotham', sans-serif;
        font-size:clamp(14px, 1vw, 1.4rem);
        color: ${colors.black};
        padding: 0 0 1.2rem 0;
        list-style: none;
        line-height: 1.4;
        font-weight: 400;

        li {
            position: relative;
            padding-left: 1.2rem;
        }

        li::before {
            content: "•";
            position: absolute;
            left: 0;
            font-size: 18px; 
            color: ${colors.black};
            vertical-align: middle;
            line-height: 1.2; 
        }

        span {
            font-weight: 500;
        }
    }
    
    sup {
        font-size: 12px;
    }
`;
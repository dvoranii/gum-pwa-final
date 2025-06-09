
import { styled } from "styled-components";
import { colors } from "../../constants/colors";

export const Content = styled.div`
  width: 100%;
  height: 96%;
  display: flex;

  @media screen and (max-width: 1386px) {
    height: 90%;
  }
`;

export const AccessoriesWrapperOuter = styled.div`
  position: relative;
  width: 100%;
  height: 95%;
  display: flex;

  @media screen and (max-width: 1386px) {
    height: 90%;
  }
`;

export const CarouselWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;

    .carousel {
        width: 85%;
        
        .flickity-page-dots {
            top: unset;
            bottom: -6vw;
            right: 24px;
            left: unset;
            width: auto;
            text-align: right;
            z-index: 10; 
            
            .dot {
                width: 16px;
                height: 16px;
                opacity: 1 !important;
                background: ${colors.dotBG2};
                margin: 0 6px;
                
                &.is-selected {
                    background: ${colors.dotBGActive2};
                }

            }
        }

        .flickity-button {
            display: none;
        }
        
        @media screen and (min-width: 2300px) {
            .flickity-page-dots {
              bottom: -5vw;
              right: 12px;

                .dot {
                    width: 25px;
                    height: 25px;
                    margin: 0 10px;
                }
            }
        }
    }
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

export const RowWrapperInner = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.black};
  padding-bottom: 2.4rem;
`;

interface MetaDataWrapperProps {
  $width?: string;

}

export const MetaDataWrapper = styled.div<MetaDataWrapperProps>`
  width: ${(props) => props.$width};
  display: flex;
  justify-content: space-between;

  p {
    font-family: "Gotham", sans-serif;
    font-weight: 200;
    font-size:clamp(18px, 1.2vw, 1.8rem);
    color: ${colors.black};
    margin-top: 1.2rem;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;

  img {
    width:90%;
  }
`;

export const Slide = styled.div`
  width: 100%;
  padding: 12px 32px;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 1386px) {
    height: 68vh;
  }

  @media screen and (min-width: 2300px) {
    height: 78vh;
    padding: 60px;
    width: 100%;
  }
`;

export const ListContainer = styled.div`

    ul {
        font-family: 'Gotham', sans-serif;
        font-size:clamp(18px, 1.6vw, 2.2rem);
        color: ${colors.black};
        padding: 0.4rem 0;
        line-height: 1.3;
        margin-inline-start: 24px;

   }

    @media screen and (max-width: 1180px) {    
       ul {
            line-height: 1;
       } 
    }

    @media screen and (min-width: 2300px) {    
       ul {
            padding: 1.2rem 0;
       } 
    }
`;
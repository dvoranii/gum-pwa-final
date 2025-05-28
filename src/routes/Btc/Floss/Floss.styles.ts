import { styled } from "styled-components";

export const FlossWrapperOuter = styled.div`
`;

export const ShopifyIcon = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;

    width: 80px;
`;

export const SlideWrapper = styled.div`
    display: flex;
    gap: 2.4rem;
    width: 90%
`;

export const ImgWrapper = styled.div`
    img {
        width: 85%;
    }
`;

export const ColumnTitle = styled.h4`
    font-family: 'Gotham', sans-serif;
    font-weight: 700;
    font-size: 1.8rem;
    text-transform: uppercase;
    letter-spacing: -1px;
    color: #00a16b;
    padding-top: 1.2rem;
`;

export const Slide1Column1 = styled.div`
    min-width: 50%;
    small {
        font-family: 'Gotham', sans-serif;
        font-weight: 400;
        font-size: 1.2rem;
        font-style: italic;
        color: #00a16b;
    }
`;

interface ListContainerProps {
    $paddingBottom?: string
}

export const ListContainer = styled.div<ListContainerProps>`
    border-bottom: 1px solid grey;
    padding-right: 1.8rem;
    width: 90%;

        
    ul {
        font-family: 'Gotham', sans-serif;
        font-size: clamp(18px, 2vw, 1.25rem);
        color: #666666;
        margin-inline-start: 1.4vw;
        padding: 1.2rem 0;
        padding-bottom: ${(props) => props.$paddingBottom};
        
    
    }
`;
export const Slide1Column2 = styled.div`
    min-width: 50%; 
`;

export const CarouselWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;

    .carousel {
        width: 100%;
        width: 100%;

        .flickity-viewport {
            height: 80vh !important;
        }
        
        .flickity-page-dots {
            top: unset;
            bottom: -48px;
            right: 84px;
            left: unset;
            width: auto;
            text-align: right;
            z-index: 10; 

            @media screen and (min-width: 2300px) {
                bottom: -112px;
            }
            
            .dot {
                width: 20px;
                height: 20px;
                opacity: 1 !important;
                background: #01763f;
                
                &.is-selected {
                background: #4fcccd;
            }
        }
    }

    .flickity-button {
      display: none;
    }

    }
`;
export const CarouselSlide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
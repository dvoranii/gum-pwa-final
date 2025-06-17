import { styled } from "styled-components";

export const KidsWrapperOuter = styled.div`
position: relative;
`;

export const CarouselWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;

    .carousel {
        width: 100%;

        .flickity-viewport {
            height: 80vh !important;
        }
        
        .flickity-page-dots {
            top: unset;
            right: 100px;
            left: unset;
            width: auto;
            text-align: right;
            z-index: 10; 
            
            .dot {
                width: 16px;
                height: 16px;
                opacity: 1 !important;
                background: #01763f;
                margin: 0 6px !important;
                
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
  padding: 1rem;

  img {
    width: 90%;
  }

  @media screen and (min-width: 2300px) {
    img {
        width:
    }
  }
`;
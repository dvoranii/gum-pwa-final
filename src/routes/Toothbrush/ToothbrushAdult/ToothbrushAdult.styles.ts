import { styled } from "styled-components";

export const AdultWrapperOuter = styled.div`
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
            right: 35px;
            left: unset;
            width: auto;
            text-align: right;
            z-index: 10; 
            
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
  padding: 1rem;

  img {
    width: 90%;
  }

  @media screen and (min-width: 2300px) {
    img {
        width: 100%;
    }
  }
`;
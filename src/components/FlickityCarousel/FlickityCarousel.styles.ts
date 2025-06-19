import styled from 'styled-components';
import { colors } from '../../constants/colors';

interface CarouselWrapperProps {
  $customStyles?: {
    viewportHeight?: string;
    dotPosition?: {
      bottom?: string;
      right?: string;
    };
    $dotColor?: string;
    $activeDotColor?: string;
  };
}

export const CarouselWrapper = styled.div<CarouselWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  position: relative;

  .carousel {
    width: 100%;

    .flickity-viewport {
      height: ${props => props.$customStyles?.viewportHeight || '80vh'} !important;
    }
    
    .flickity-page-dots {
      top: unset;
      bottom: ${props => props.$customStyles?.dotPosition?.bottom || '-28px'};
      right: ${props => props.$customStyles?.dotPosition?.right || '94px'};
      left: unset;
      width: auto;
      text-align: right;
      z-index: 10; 

      .dot {
        width: 16px;
        height: 16px;
        opacity: 1 !important;
        background: ${colors.dotBG};
        margin: 0 6px;
        
        &.is-selected {
          background: ${colors.dotBGActive};
        }
      }
    }

    .flickity-button {
      display: none;
    }
  }

`;
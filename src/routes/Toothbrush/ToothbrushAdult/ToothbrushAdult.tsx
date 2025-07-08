import * as S from "./ToothbrushAdult.styles";

import FlickityCarousel from "../../../components/FlickityCarousel/FlickityCarousel";

import { AdultSlide1, AdultSlide2, AdultSlide3, AdultSlide4 } from "../components/ProductSlide";

export default function ToothbrushAdult() {

  return (
    <S.AdultWrapperOuter>
      <FlickityCarousel 
        $customStyles={{
          dotPosition: {
            bottom: '-30px',
            right: '-16px'
          }
        }}
      >
          <S.CarouselSlide>
            <AdultSlide1/>
          </S.CarouselSlide>
          <S.CarouselSlide>
            <AdultSlide2/>
          </S.CarouselSlide>
          <S.CarouselSlide>
            <AdultSlide3/>
          </S.CarouselSlide>
          <S.CarouselSlide>
            <AdultSlide4/>
          </S.CarouselSlide>
      </FlickityCarousel>
    </S.AdultWrapperOuter>
  );
}
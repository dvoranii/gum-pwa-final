import * as S from "./ToothbrushKids.styles";

import FlickityCarousel from "../../../components/FlickityCarousel/FlickityCarousel";

import { 
  KidsSlide1, 
  KidsSlide2, 
  KidsSlide3, 
  KidsSlide4, 
  KidsSlide5, 
  KidsSlide6, 
  KidsSlide7, 
  KidsSlide8 } from "../components/ProductSlide";

export default function ToothbrushKids() {

  return (
    <S.KidsWrapperOuter>
      <FlickityCarousel 
        $customStyles={{
          dotPosition: {
            bottom: '-30px',
            right: '12px'
          }
        }}
      >
          <S.CarouselSlide>
            <KidsSlide1/>
          </S.CarouselSlide>
          <S.CarouselSlide>
            <KidsSlide2/>
          </S.CarouselSlide>
          <S.CarouselSlide>
            <KidsSlide3/>
          </S.CarouselSlide>
          <S.CarouselSlide>
            <KidsSlide4/>
          </S.CarouselSlide>
          <S.CarouselSlide>
            <KidsSlide5/>
          </S.CarouselSlide>
          <S.CarouselSlide>
            <KidsSlide6/>
          </S.CarouselSlide>
          <S.CarouselSlide>
            <KidsSlide7/>
          </S.CarouselSlide>
          <S.CarouselSlide>
            <KidsSlide8/>
          </S.CarouselSlide>
        </FlickityCarousel>
    </S.KidsWrapperOuter>
  );
}
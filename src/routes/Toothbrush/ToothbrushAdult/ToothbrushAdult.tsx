import * as S from "./ToothbrushAdult.styles";

import FlickityCarousel from "../../../components/FlickityCarousel/FlickityCarousel";

import { AdultSlide1, AdultSlide2, AdultSlide3, AdultSlide4 } from "../components/ProductSlide";


import ShopifyIcon from "../../../components/ShopifyIcon/ShopifyIcon";

export default function ToothbrushAdult() {

  return (
    <S.AdultWrapperOuter>
      <FlickityCarousel 
        $customStyles={{
          dotPosition: {
            bottom: '-30px',
            right: '45px'
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
      <ShopifyIcon right="-20px"/>
    </S.AdultWrapperOuter>
  );
}
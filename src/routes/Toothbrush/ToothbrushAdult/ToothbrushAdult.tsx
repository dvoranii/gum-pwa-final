import * as S from "./ToothbrushAdult.styles";

import FlickityCarousel from "../../../components/FlickityCarousel/FlickityCarousel";

import { Slide1, Slide2, Slide3, Slide4 } from "./Slides";
// import Slide3 from "../../../assets/toothbrush/Adult/AdultSlide3.webp";
// import Slide4 from "../../../assets/toothbrush/Adult/AdultSlide4.webp";

import ShopifyIcon from "../../Btc/components/ShopifyIcon/ShopifyIcon";

export default function ToothbrushAdult() {

  return (
    <S.AdultWrapperOuter>
      <FlickityCarousel 
        $customStyles={{
          dotPosition: {
            bottom: '-30px',
            right: '95px'
          }
        }}
      >
          <S.CarouselSlide>
            <Slide1/>
            {/* <img src={Slide1}/> */}
          </S.CarouselSlide>
          <S.CarouselSlide>
            <Slide2/>
            {/* <img src={Slide2}/> */}
          </S.CarouselSlide>
          <S.CarouselSlide>
            <Slide3/>
            {/* <img src={Slide3}/> */}
          </S.CarouselSlide>
          <S.CarouselSlide>
            <Slide4/>
            {/* <img src={Slide4}/> */}
          </S.CarouselSlide>
      </FlickityCarousel>
      <ShopifyIcon/>
    </S.AdultWrapperOuter>
  );
}
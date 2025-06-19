import * as S from "./ToothbrushSpecialty.styles";

import FlickityCarousel from "../../../components/FlickityCarousel/FlickityCarousel";

import Slide1 from "../../../assets/toothbrush/Specialty/Specialty-1.webp";
import Slide2 from "../../../assets/toothbrush/Specialty/Specialty-2.webp";

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
            <img src={Slide1}/>
          </S.CarouselSlide>

          <S.CarouselSlide>
            <img src={Slide2}/>
          </S.CarouselSlide>
          
      </FlickityCarousel>
      <ShopifyIcon/>
    </S.AdultWrapperOuter>
  );
}
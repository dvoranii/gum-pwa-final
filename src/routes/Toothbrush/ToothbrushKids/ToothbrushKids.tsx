import * as S from "./ToothbrushKids.styles";

import FlickityCarousel from "../../../components/FlickityCarousel/FlickityCarousel";

import Slide1 from "../../../assets/toothbrush/Kids/KidsBrush-1.webp";
import Slide2 from "../../../assets/toothbrush/Kids/KidsBrush-2.webp";
import Slide3 from "../../../assets/toothbrush/Kids/KidsBrush-3.webp";
import Slide4 from "../../../assets/toothbrush/Kids/KidsBrush-4.webp";
import Slide5 from "../../../assets/toothbrush/Kids/KidsBrush-5.webp";
import Slide6 from "../../../assets/toothbrush/Kids/KidsBrush-6.webp";
import Slide7 from "../../../assets/toothbrush/Kids/KidsBrush-7.webp";
import Slide8 from "../../../assets/toothbrush/Kids/KidsBrush-8.webp";

import ShopifyIcon from "../../Btc/components/ShopifyIcon/ShopifyIcon";


export default function ToothbrushKids() {

  return (
    <S.KidsWrapperOuter>
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
          <S.CarouselSlide>
            <img src={Slide3}/>
          </S.CarouselSlide>
          <S.CarouselSlide>
            <img src={Slide4}/>
          </S.CarouselSlide>
          <S.CarouselSlide>
            <img src={Slide5}/>
          </S.CarouselSlide>
          <S.CarouselSlide>
            <img src={Slide6}/>
          </S.CarouselSlide>
          <S.CarouselSlide>
            <img src={Slide7}/>
          </S.CarouselSlide>
          <S.CarouselSlide>
            <img src={Slide8}/>
          </S.CarouselSlide>
        </FlickityCarousel>
      <ShopifyIcon/>
    </S.KidsWrapperOuter>
  );
}
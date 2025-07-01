import * as S from "./ToothbrushKids.styles";

import FlickityCarousel from "../../../components/FlickityCarousel/FlickityCarousel";

import { KidsSlide1, KidsSlide2, KidsSlide3, KidsSlide4, KidsSlide5 } from "../components/ProductSlide";
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
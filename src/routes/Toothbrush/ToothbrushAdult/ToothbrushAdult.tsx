import * as S from "./ToothbrushAdult.styles";

import FlickityCarousel from "../../../components/FlickityCarousel/FlickityCarousel";

// import Slide1 from "../../../assets/toothbrush/Adult/AdultSlide1(2).webp";
import Slide1 from "./Slides/Slide1/Slide1";
import Slide2 from "../../../assets/toothbrush/Adult/AdultSlide2.webp";
import Slide3 from "../../../assets/toothbrush/Adult/AdultSlide3.webp";
import Slide4 from "../../../assets/toothbrush/Adult/AdultSlide4.webp";

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
            <img src={Slide2}/>
          </S.CarouselSlide>
          <S.CarouselSlide>
            <img src={Slide3}/>
          </S.CarouselSlide>
          <S.CarouselSlide>
            <img src={Slide4}/>
          </S.CarouselSlide>
      </FlickityCarousel>
      <ShopifyIcon/>
    </S.AdultWrapperOuter>
  );
}
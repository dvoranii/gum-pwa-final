import * as S from "./ToothbrushAdult.styles";

import Flickity from 'react-flickity-component';
import 'flickity/dist/flickity.min.css';

import Slide1 from "../../../assets/toothbrush/Adult/AdultSlide1.webp";
import Slide2 from "../../../assets/toothbrush/Adult/AdultSlide2.webp";
import Slide3 from "../../../assets/toothbrush/Adult/AdultSlide3.webp";
import Slide4 from "../../../assets/toothbrush/Adult/AdultSlide4.webp";

import ShopifyIcon from "../../Btc/components/ShopifyIcon/ShopifyIcon";

export default function ToothbrushAdult() {

  const flickityOptions = {
    initialIndex: 0,
    wrapAround: true,
    autoPlay: false,
    prevNextButtons: true,
    pageDots: true,
    contain: true,
    cellAlign: 'center'
  };


  return (
    <S.AdultWrapperOuter>
      <S.CarouselWrapper>
        <Flickity
            className={'carousel'} 
            elementType={'div'}
            options={flickityOptions}
            disableImagesLoaded={true}          
            static={false}
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
        </Flickity>
      </S.CarouselWrapper>
      <ShopifyIcon/>
    </S.AdultWrapperOuter>
  );
}
import * as S from "./ToothbrushKids.styles";

import Flickity from 'react-flickity-component';
import 'flickity/dist/flickity.min.css';

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
    <S.KidsWrapperOuter>
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

        </Flickity>
      </S.CarouselWrapper>
      <ShopifyIcon/>
    </S.KidsWrapperOuter>
  );
}
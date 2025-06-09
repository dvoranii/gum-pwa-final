import * as S from "./ToothbrushSpecialty.styles";

import Flickity from 'react-flickity-component';
import 'flickity/dist/flickity.min.css';

import Slide1 from "../../../assets/toothbrush/Specialty/Specialty-1.webp";
import Slide2 from "../../../assets/toothbrush/Specialty/Specialty-2.webp";

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
        </Flickity>

      </S.CarouselWrapper>
      <ShopifyIcon/>
    </S.AdultWrapperOuter>
  );
}
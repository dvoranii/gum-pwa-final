import * as S from "./Floss.styles";

import Flickity from 'react-flickity-component';
import 'flickity/dist/flickity.min.css';

import ShopifyIcon from "../../../assets/btc/shopify-icon.webp";

import Slide1Floss1 from "../../../assets/btc/floss/Slide1Floss1.webp";
import Slide1Floss2 from "../../../assets/btc/floss/Slide1Floss2.webp";
import Slide3 from "../../../assets/toothbrush/Adult/AdultSlide3.webp";


export default function BtcFloss() {

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
    <S.FlossWrapperOuter>
      <S.CarouselWrapper>
        <Flickity
            className={'carousel'} 
            elementType={'div'}
            options={flickityOptions}
            disableImagesLoaded={true}          
            static={false}
        >
          <S.CarouselSlide>
            <S.SlideWrapper>
                <S.Slide1Column1>
                    <S.ImgWrapper>
                        <img src={Slide1Floss1}/>
                    </S.ImgWrapper>
                    <S.ColumnTitle>Comfort Slide Dental Floss</S.ColumnTitle> 
                    <small>(formerly known as EEZ-THRU)®</small>     
                </S.Slide1Column1>
                <S.Slide1Column2>
                    <S.ImgWrapper><img src={Slide1Floss2}/></S.ImgWrapper>
                    <S.ColumnTitle>Dual-Defence® Twisted String Floss</S.ColumnTitle>
                </S.Slide1Column2>     
            </S.SlideWrapper>
          </S.CarouselSlide>
          <S.CarouselSlide>
            <S.SlideWrapper>
                <S.Slide1Column1>
                    <S.ImgWrapper>
                        <img src={Slide1Floss1}/>
                    </S.ImgWrapper>
                    <S.ColumnTitle>Comfort Slide Dental Floss</S.ColumnTitle> 
                    <small>(formerly known as EEZ-THRU)®</small>     
                </S.Slide1Column1>
                <S.Slide1Column2>
                    <S.ImgWrapper><img src={Slide1Floss2}/></S.ImgWrapper>
                    <S.ColumnTitle>Dual-Defence® Twisted String Floss</S.ColumnTitle>
                </S.Slide1Column2>     
            </S.SlideWrapper>
          </S.CarouselSlide>
          <S.CarouselSlide>
            <img src={Slide3}/>
          </S.CarouselSlide>

        </Flickity>

        <a href="https://www.shopify.com/ca" target="_blank">
            <S.ShopifyIcon src={ShopifyIcon} alt="" />
        </a>
        
      </S.CarouselWrapper>
    </S.FlossWrapperOuter>
  );
}
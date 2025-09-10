import FlickityCarousel from "../../../components/FlickityCarousel/FlickityCarousel";
import {
  AdultSlide1,
  AdultSlide2,
  AdultSlide3,
  AdultSlide4,
} from "../components/ProductSlide";
import * as S from "./ToothbrushAdult.styles";
import Flickity from "react-flickity-component";

export default function ToothbrushAdult() {
  const flickityOptions = {
    on: {
      ready: function (this: Flickity) {
        setTimeout(() => {
          this.resize();
        }, 100);
      },
    },
  };

  return (
    <S.AdultWrapperOuter>
      <FlickityCarousel
        $customStyles={{
          dotPosition: {
            bottom: "-30px",
            right: "-16px",
          },
        }}
        options={flickityOptions}
      >
        <S.CarouselSlide>
          <AdultSlide1 />
        </S.CarouselSlide>
        <S.CarouselSlide>
          <AdultSlide2 />
        </S.CarouselSlide>
        <S.CarouselSlide>
          <AdultSlide3 />
        </S.CarouselSlide>
        <S.CarouselSlide>
          <AdultSlide4 />
        </S.CarouselSlide>
      </FlickityCarousel>
    </S.AdultWrapperOuter>
  );
}

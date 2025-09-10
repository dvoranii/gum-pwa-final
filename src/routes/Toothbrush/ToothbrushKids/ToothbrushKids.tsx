import * as S from "./ToothbrushKids.styles";
import Flickity from "react-flickity-component";
import FlickityCarousel from "../../../components/FlickityCarousel/FlickityCarousel";

import {
  KidsSlide1,
  KidsSlide2,
  KidsSlide3,
  KidsSlide4,
  KidsSlide5,
  KidsSlide6,
  KidsSlide7,
  KidsSlide8,
} from "../components/ProductSlide";

export default function ToothbrushKids() {
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
    <S.KidsWrapperOuter>
      <FlickityCarousel
        $customStyles={{
          dotPosition: {
            bottom: "-30px",
            right: "12px",
          },
        }}
        options={flickityOptions}
      >
        <S.CarouselSlide>
          <KidsSlide1 />
        </S.CarouselSlide>
        <S.CarouselSlide>
          <KidsSlide2 />
        </S.CarouselSlide>
        <S.CarouselSlide>
          <KidsSlide3 />
        </S.CarouselSlide>
        <S.CarouselSlide>
          <KidsSlide4 />
        </S.CarouselSlide>
        <S.CarouselSlide>
          <KidsSlide5 />
        </S.CarouselSlide>
        <S.CarouselSlide>
          <KidsSlide6 />
        </S.CarouselSlide>
        <S.CarouselSlide>
          <KidsSlide7 />
        </S.CarouselSlide>
        <S.CarouselSlide>
          <KidsSlide8 />
        </S.CarouselSlide>
      </FlickityCarousel>
    </S.KidsWrapperOuter>
  );
}

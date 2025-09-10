import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";
import * as S from "./FlickityCarousel.styles";

interface FlickityCarouselProps {
  children: React.ReactNode;
  options?: FlickityOptions;
  className?: string;
  $customStyles?: {
    viewportHeight?: string;
    dotPosition?: {
      bottom?: string;
      right?: string;
    };
  };
}

const defaultOptions: FlickityOptions = {
  initialIndex: 0,
  wrapAround: true,
  autoPlay: false,
  prevNextButtons: true,
  pageDots: true,
  contain: true,
  cellAlign: "center",
  on: {},
};

export default function FlickityCarousel({
  children,
  options = {},
  className = "",
  $customStyles = {},
}: FlickityCarouselProps) {
  const mergedOptions: FlickityOptions = {
    ...defaultOptions,
    ...options,
    on: { ...defaultOptions.on, ...options.on },
  };

  return (
    <S.CarouselWrapper $customStyles={$customStyles}>
      <Flickity
        className={`carousel ${className}`}
        elementType={"div"}
        options={mergedOptions}
        disableImagesLoaded={true}
        static={false}
      >
        {children}
      </Flickity>
    </S.CarouselWrapper>
  );
}

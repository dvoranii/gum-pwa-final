interface FlickityOptions {
  initialIndex?: number;
  wrapAround?: boolean;
  autoPlay?: boolean | number;
  prevNextButtons?: boolean;
  pageDots?: boolean;
  contain?: boolean;
  cellAlign?: "left" | "center" | "right";
  imagesLoaded?: boolean;
  on?: {
    ready?: (this: Flickity) => void;
  };
}

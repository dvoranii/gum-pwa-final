interface FlickityOptions {
  initialIndex?: number;
  wrapAround?: boolean;
  autoPlay?: boolean;
  prevNextButtons?: boolean;
  pageDots?: boolean;
  contain?: boolean;
  cellAlign?: "left" | "center" | "right";
  imagesLoaded?: boolean;
  on?: {
    ready?: (this: Flickity) => void;
  };
}

declare class Flickity {
  constructor(element: string | HTMLElement, options?: FlickityOptions);
  resize: () => void;
  on(event: string, listener: (this: Flickity) => void): void;
}

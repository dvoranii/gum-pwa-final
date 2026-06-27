import { ShopifyIconProps } from "../components/ShopifyIcon/ShopifyIcon.styled";

export type SpecItem = {
  label?: string;
  value: string | number;
};

type ColorPair = [string, string?];

export type ProductSlideProps = {
  bannerImage?: string;
  brushImage: string;
  diagramImage: string;
  title?: string | React.ReactNode;
  description: (string | React.ReactNode)[];
  highlightText?: string;
  showAntibacterialBadge?: boolean;
  imprintColors: ColorPair[];
  specs: SpecItem[][];
  isSingleColumn?: boolean;
  showImprintText?: boolean;
  textWrapperH2MarginBottom?: string;
  textWrapperH2PaddingTop?: string;
  useBulletPoints?: boolean;
  paddingRight?: string;
  diagramWidth?: string;
  maxHeight?: string;
  diagramMarginBottom?: string;
  brushImgWidth?: string;
  brushImgHeight?: string;
  colGap?: string;
  listPaddingLeft?: string;
  colMargLeft?: string;
  imgMinWidth?: string;
  shopifyIconProps?: ShopifyIconProps;
  diagramMinWidth?: boolean;
  diagramMinHeight?: boolean;
  colZIndex?: number;
  textAndImgWrapperHeight?: string;
  brushWrapperWidth?: string;
  brushMarginTop?: string;
};

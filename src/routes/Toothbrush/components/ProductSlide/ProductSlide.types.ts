import { ShopifyIconProps } from "../../../../components/ShopifyIcon/ShopifyIcon.styled";

export type SpecItem = {
    label?: string;
    value: string | number;
}

type ColorPair = [string, string?];

export type ProductSlideProps = {
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
  textWrapperMarginTop?: string;
  textWrapperH2MarginBottom?: string;
  useBulletPoints?: boolean;
  padding?: string;
  paddingRight?: string;
  textWrapperPaddingRight?:string;
  diagramWidth?: string;
  maxHeight?: string;
  minHeight?: string;
  diagramMarginBottom?: string;
  brushImgWidth?: string;
  colGap?: string;
  listPaddingLeft?: string;
  colMargLeft?:string;
  imgMinWidth?:string;
  shopifyIconProps?: ShopifyIconProps
};
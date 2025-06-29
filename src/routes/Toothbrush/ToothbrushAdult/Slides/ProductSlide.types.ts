export type SpecItem = {
    label?: string;
    value: string | number;
}

type ColorPair = [string, string?];

export type ProductSlideProps = {
  brushImage: string;
  diagramImage: string;
  title: string | React.ReactNode;
  description: (string | React.ReactNode)[];
  highlightText?: string;
  showAntibacterialBadge?: boolean;
  imprintColors: ColorPair[];
  specs: SpecItem[][];
  isSingleColumn?: boolean;
  showImprintText?: boolean;
};
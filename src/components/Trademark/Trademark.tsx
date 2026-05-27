import * as S from "./Trademark.styles";

export default function Trademark({ $size, $verticalAlign }: S.TrademarkProps) {
  return (
    <S.StyledSup $size={$size} $verticalAlign={$verticalAlign}>
      ®
    </S.StyledSup>
  );
}

import * as S from "./PageTitle.styles";

interface PageTitleProps {
  children: React.ReactNode;
  center?: boolean;
  color?: string;
}

export default function PageTitle({ 
  children, 
  center = true, 
  color = '#02a6a7' 
}: PageTitleProps) {
  return (
    <S.PageTitle $center={center} $color={color}>
      {children}
    </S.PageTitle>
  );
}
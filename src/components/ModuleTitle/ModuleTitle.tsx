import * as S from "./ModuleTitle.styles";

interface ModuleTitleProps {
  title: React.ReactNode;
}

export default function ModuleTitle({ title }: ModuleTitleProps) {
  return <S.Title>{title}</S.Title>;
}

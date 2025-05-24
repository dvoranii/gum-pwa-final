import * as S from "./ModuleTitle.styles";

interface ModuleTitleProps {
    title: string;
}

export default function ModuleTitle ({title}: ModuleTitleProps){
    return(
        <S.Title>{title}</S.Title>
    )
}
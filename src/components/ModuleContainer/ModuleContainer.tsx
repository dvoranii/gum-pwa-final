
import { ReactNode } from "react";
import * as S from "./ModuleContainer.styles";

interface ModuleContainerProps {
  children: ReactNode;
}

export default function ModuleContainer({children}: ModuleContainerProps){
    return(
        <S.ModuleContainerStyles>
            {children}
        </S.ModuleContainerStyles>
    )
}
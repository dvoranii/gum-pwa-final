
import { ReactNode } from "react";
import * as S from "./ModuleContainer.styles";

interface ModuleContainerProps {
  children: ReactNode;
  $isHomePage?: boolean;
}

export default function ModuleContainer({children, $isHomePage}: ModuleContainerProps){
    return(
        <S.ModuleContainerStyles $padding={$isHomePage ? "2rem 0 0 5%" : "2rem 0 0 0"}>
            {children}
        </S.ModuleContainerStyles>
    )
}
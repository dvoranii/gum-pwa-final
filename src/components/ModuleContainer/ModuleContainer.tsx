
import { ReactNode } from "react";
import * as S from "./ModuleContainer.styles";

interface ModuleContainerProps {
  children: ReactNode;
  $isHomePage?: boolean;
  $backgroundImage?: string;
}

export default function ModuleContainer({
    children, 
    $isHomePage,
    $backgroundImage
}: ModuleContainerProps){
    return(
        <S.ModuleContainerStyles 
        $padding={$isHomePage ? "2rem 0 0 5%" : "2rem 0 0 0"}
        $backgroundImage={$backgroundImage}
        >
            {children}
        </S.ModuleContainerStyles>
    )
}
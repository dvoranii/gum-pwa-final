import * as S from "./ModuleContainer.styles";
export default function ModuleContainer({ children, $isHomePage, $backgroundImage }) {
    return (<S.ModuleContainerStyles $padding={$isHomePage ? "2rem 0 0 5%" : "2rem 0 0 0"} $backgroundImage={$backgroundImage}>
            {children}
        </S.ModuleContainerStyles>);
}

import styled from "styled-components";

interface ModuleContainerProps {
    $padding: string
}

export const ModuleContainerStyles = styled.div<ModuleContainerProps>`
    padding: ${(props) => props.$padding};
    height: 100%;

    @media screen and (min-width: 2300px) {
        padding-top: 4rem;
    }
`;
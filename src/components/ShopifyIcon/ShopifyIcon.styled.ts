import { styled } from "styled-components";

interface LinkWrapperProps {
    $right?: string;
    $bottom?: string;
}

export const LinkWrapper = styled.a<LinkWrapperProps>`
    position: absolute;
    bottom: ${props => props.$bottom || "-50px"};
    right: ${props => props.$right || "32px"};
    width: clamp(60px, 3vw, 80px);
    height: auto;
`;

export const IconWrapper = styled.img`
    width: clamp(60px, 3vw, 80px);
    height: auto;
    -webkit-tap-highlight-color: transparent;
`;
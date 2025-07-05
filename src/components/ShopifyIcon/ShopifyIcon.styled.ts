import { styled } from "styled-components";

interface LinkWrapperProps {
    $right?: string;
    $bottom?: string;
    $absolute?: boolean;
    $width?: string;
    $marginTop?: string;
}

export const LinkWrapper = styled.a<LinkWrapperProps>`
    ${props => props.$absolute ? `
        position: absolute;
        left: ${props.$right || "0"};
        bottom: ${props.$bottom || "-40px"};
    ` : `
        display: block;
    `}
    
    width: ${props => props.$width || "60px"};
    margin-top: ${props => props.$marginTop || "0"};
    height: auto;
    -webkit-tap-highlight-color: transparent;
`;

export const IconWrapper = styled.img`
    width: 100%;
    height: auto;
`;

export interface ShopifyIconProps {
    href?: string;
    right?: string;
    bottom?: string;
    absolute?: boolean;
    width?: string;
    marginTop?: string;
}
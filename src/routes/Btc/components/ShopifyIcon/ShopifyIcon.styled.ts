import { styled } from "styled-components";

export const LinkWrapper = styled.a`
    position: absolute;
    bottom: -50px;
    right: 32px;
    width: clamp(60px, 3vw, 80px);
    height: auto;
`;
export const IconWrapper = styled.img`
    width: clamp(60px, 3vw, 80px);
    height: auto;
    -webkit-tap-highlight-color: transparent;
`;
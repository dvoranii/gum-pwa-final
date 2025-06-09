import { styled } from "styled-components";

export const IconWrapper = styled.img`
    position: absolute;
    bottom: -45px;
    right: 32px;
    width: clamp(60px, 3vw, 80px);
    -webkit-tap-highlight-color: transparent;

    @media screen and (min-width: 2300px) {
        width: 120px;
        bottom: -80px;
        right: 32px;
        
    }
`;
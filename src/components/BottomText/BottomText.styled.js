import { styled } from "styled-components";
export const BottomTextWrapper = styled.div ``;
export const BottomTextP = styled.p `
    font-family: 'Gotham', sans-serif;
    font-weight: 700;
    color: #00a16b;
    font-size: clamp(1rem, 2.25vw, 1.7rem);
    padding: 0px 12px;
    letter-spacing: -1.4px;
    margin-top: ${props => props.$isFirst ? '1rem' : '0'};

    @media screen and (max-width: 1386px) {
        margin-top: ${props => props.$isFirst ? '0.5rem' : '0'};
    }

    @media screen and (min-width: 2300px) {
        font-size: 2.9rem;
        margin-top: ${props => props.$isFirst ? '2rem' : '0'};
    }
`;

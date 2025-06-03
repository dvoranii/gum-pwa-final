import styled from "styled-components";
import { colors } from "../../../constants/colors";

export const SoftPicksContainer = styled.div`
    width: 80vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
`;

export const Row1 =  styled.div`
    display: flex;
    border-bottom: 1px solid ${colors.black};
    padding-bottom: 2.4rem;
    gap: 12.2rem;
`;
export const Row2 =  styled.div`
    display: flex;
`;

export const TextContainer = styled.div`
    padding-top: 2.4rem;

    h2 {
        font-family: "Gotham", sans-serif;
        color: ${colors.primary};
        font-size: clamp(16px, 1.4vw, 2.6rem);
        text-transform: uppercase;

        span:nth-child(1) {
            font-weight: 200;
        }
        span:nth-child(2) {
            font-weight: 900;
        }
    }

    p {
        font-family: "Gotham", sans-serif;
        color: ${colors.black};
        font-size: clamp(1.2rem, 2vw, 1.8rem);
    }

    @media screen and (min-width: 2300px) {
        h2 {
            font-size: clamp(16px, 1.6vw, 2.8rem);
        }
        p {
            font-size: clamp(16px, 1.4vw, 2.4rem);
        }
    }
`;

export const Column1 = styled.div`
    width: 50%;
`;
export const Column2 = styled.div`
    width: 50%;
`;

export const Column1And2Wrapper = styled.div`
    display: flex;
    flex: 1.5;
`;

export const Column3 = styled.div`
    flex: 1;
    width: 100%;
`;

export const Column3TextWrapper = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;

    p {
        font-family: "Gotham", sans-serif;
        color: ${colors.black};
        font-size: clamp(1rem, 1.4vw, 1.4rem);
    }
`;

export const ImgWrapper = styled.div`
    img {
        width: 90%;
    }
`;
export const ImgWrapper1 = styled.div`
    padding-top: 2.4rem;

    img {
        width: 90%;
    }

    @media screen and (min-width: 2300px) {
        padding-top: 4.2rem;
    }
`;

export const CaptionsContainer = styled.div`
`;

export const ImgAndTextWrapper = styled.div`
    display: flex;
    gap: 1.2rem;
`;
export const TextWrapper = styled.div`
    padding-right: 2.4rem;
    padding-left: 0.25rem;
    line-height: 1.1;

    p {
        font-family: "Gotham", sans-serif;
        color: ${colors.primary};
        font-size: clamp(1.2rem, 1.4vw, 1.4rem);
    }

    p:nth-child(2) {
        padding-bottom:0.5rem;
    }

    small {
        font-family: "Gotham", sans-serif;
        color: ${colors.primary};
        font-weight: 200;
        font-size: clamp(0.8rem, 1vw, 1rem);
        
    }
`;
export const ImgWrapper2 = styled.div`
    width: 100%;
    min-width: 150px;
    max-width: 150px;
    img {
        width: 100%;
    }
`;
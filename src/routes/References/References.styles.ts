import { styled } from "styled-components";
import { colors } from "../../constants/colors";

export const ReferencesContainer = styled.div`
    width: 90vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
    padding: 0 6.4rem;
    p {
        font-family: "Gotham", sans-serif;
        font-size: clamp(18px, 1.8vw, 2.4rem);
        color: ${colors.black};

        sup {
            font-size: 24px;
        }
    }
`;
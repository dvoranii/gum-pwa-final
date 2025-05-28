import { styled } from "styled-components";

interface MainContentProps {
  $isWhiteBg?: boolean;
}

export const AppContainer = styled.div`
    display: flex;
    min-height: 100vh;
    max-height: 100vh;
    max-width: 100vw;
    overflow: hidden;
`;

export const MainContent = styled.main<MainContentProps>`
    flex-grow: 1;
     background-color: ${(props) => (props.$isWhiteBg ? '#ffffff' : '#f5f5f5')};
     max-width: calc(100vw - calc((100vh / 8) * 0.94));
     overflow-x: hidden;
     box-sizing: border-box;

`;
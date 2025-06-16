import * as S from "./App.styles";
import SideBar from "./components/SideBar/SideBar";
import AppRoutes from "./routes/AppRoutes";
import { useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();

    const shouldUseWhiteBg = () => {
    switch (location.pathname) {
      case '/btc/floss':
      case '/btc/flossers':
      case '/btc/id-brushes':
      case '/btc/soft-picks':
      case '/toothbrush/patient':
      case '/toothbrush/adult':
      case '/toothbrush/kids':
      case '/toothbrush/specialty':
      case '/operatory':
      case '/accessories':
      case '/references':
        return true;
      default:
        return false;
    }
  };

  return (
      <S.AppContainer>
        <SideBar/>
        <S.MainContent $isWhiteBg={shouldUseWhiteBg()}>
          <AppRoutes/>
        </S.MainContent>
      </S.AppContainer>
  )
}

export default App

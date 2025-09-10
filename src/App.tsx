import * as S from "./App.styles";
import SideBar from "./components/SideBar/SideBar";
import AppRoutes from "./routes/AppRoutes";
import { useLocation } from "react-router-dom";
import { registerSW } from "./sw-register";
import { useEffect } from "react";
import { usePWAStatus } from "./hooks/usePWAStatus";

function App() {
  const location = useLocation();
  const isOfflineReady = usePWAStatus();

  useEffect(() => {
    if (import.meta.env.PROD) {
      registerSW();
    }
  }, []);

  useEffect(() => {
    if (isOfflineReady) {
      alert("App is ready for offline use! 🎉");
    }
  }, [isOfflineReady]);

  const shouldUseWhiteBg = () => {
    switch (location.pathname) {
      case "/btc/floss":
      case "/btc/flossers":
      case "/btc/id-brushes":
      case "/btc/soft-picks":
      case "/toothbrush/patient":
      case "/toothbrush/adult":
      case "/toothbrush/kids":
      case "/toothbrush/specialty":
      case "/operatory":
      case "/accessories":
      case "/references":
        return true;
      default:
        return false;
    }
  };

  return (
    <S.AppContainer>
      <SideBar />
      <S.MainContent $isWhiteBg={shouldUseWhiteBg()}>
        <AppRoutes />
      </S.MainContent>
    </S.AppContainer>
  );
}

export default App;

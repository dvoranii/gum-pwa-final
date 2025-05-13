import * as S from "./App.styles";
import { BrowserRouter as Router } from 'react-router-dom'
import SideBar from "./components/SideBar";
import AppRoutes from "./routes/AppRoutes";


function App() {

  return (
    <Router>
      <S.AppContainer>
        <SideBar/>
        <S.MainContent>
          <AppRoutes/>
        </S.MainContent>
      </S.AppContainer>
    </Router>
  )
}

export default App

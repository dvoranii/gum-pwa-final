import * as S from "./Operatory.styles";
import InnerNav from "../../components/InnerNav/InnerNav";
import { Outlet, useLocation } from 'react-router-dom';
import ModuleContainer from "../../components/ModuleContainer/ModuleContainer";

const operatoryNavItems = [
  { path: "/operatory", label: "Operatory\u00A0Solutions", end: true },
  { path: "/recommend", label: "Recommend" }
];

export default function Operatory() {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/operatory";

  return (
    <ModuleContainer>
      <InnerNav navItems={operatoryNavItems} />
      
      <S.Content>
      {isHomeRoute ? (
          <h1>Welcome to the Operatory module</h1>
          ) : (
            <Outlet />
          )}
      </S.Content>
      
      <S.Content>
        <Outlet />
      </S.Content>
    </ModuleContainer>
  );
}
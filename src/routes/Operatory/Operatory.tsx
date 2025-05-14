// src/routes/Operatory/Operatory.tsx
import * as S from "./Operatory.styles";
import InnerNav from "../../components/InnerNav/InnerNav";
import { Outlet, useLocation } from 'react-router-dom';
import PageTitle from "../../components/PageTitle/PageTitle";

const operatoryNavItems = [
  { path: "/operatory/home", label: "Operatory\u00A0Solutions", end: true },
  { path: "/recommend", label: "Recommend" }
];

export default function Operatory() {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/operatory";

  return (
    <S.OperatoryContainer>
      <InnerNav navItems={operatoryNavItems} />
      
      {isHomeRoute && (
        <S.LandingContent>
          <PageTitle>Operatory Solutions</PageTitle>
        </S.LandingContent>
      )}
      
      <S.Content>
        <Outlet />
      </S.Content>
    </S.OperatoryContainer>
  );
}
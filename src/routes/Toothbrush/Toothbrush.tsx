import * as S from "./Toothbrush.styles";
import InnerNav from "../../components/InnerNav/InnerNav";
import { Outlet, useLocation } from 'react-router-dom';
import PageTitle from "../../components/PageTitle/PageTitle";

const toothbrushNavItems = [
  { path: "/toothbrush/home", label: "Brush\u00A0Home", end: true },
  { path: "/toothbrush/tech", label: "Tech" },
  { path: "/toothbrush/patient", label: "Patient" },
  { path: "/toothbrush/adult", label: "Adult" },
  { path: "/toothbrush/kids", label: "Kids" },
  { path: "/toothbrush/specialty", label: "Specialty" },
  { path: "/recommend", label: "Recommend" }
];

export default function Toothbrush() {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/toothbrush";

  return (
    <S.ToothbrushContainer>
      <InnerNav navItems={toothbrushNavItems} />
      
      {isHomeRoute && (
        <S.LandingContent>
          <PageTitle>Toothbrush Solutions</PageTitle>
        </S.LandingContent>
      )}
      
      <S.Content>
        <Outlet />
      </S.Content>
    </S.ToothbrushContainer>
  );
}
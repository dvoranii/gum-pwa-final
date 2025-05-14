
import * as S from "./Partners.styles";
import InnerNav from "../../components/InnerNav/InnerNav";
import { Outlet, useLocation } from 'react-router-dom';
import PageTitle from "../../components/PageTitle/PageTitle";

const partnersNavItems = [
  { path: "/partners/home", label: "Partners\u00A0in\u00A0Care", end: true },
  { path: "/partners/patient-success", label: "Patient\u00A0Success" },
  { path: "/recommend", label: "Recommend" }
];

export default function Partners() {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/partners";

  return (
    <S.PartnersContainer>
      <InnerNav navItems={partnersNavItems} />
      
      {isHomeRoute && (
        <S.LandingContent>
          <PageTitle>Your Partners in Care</PageTitle>
        </S.LandingContent>
      )}
      
      <S.Content>
        <Outlet />
      </S.Content>
    </S.PartnersContainer>
  );
}
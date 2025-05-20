
import * as S from "./Partners.styles";
import InnerNav from "../../components/InnerNav/InnerNav";
import { Outlet, useLocation } from 'react-router-dom';
import ModuleContainer from "../../components/ModuleContainer/ModuleContainer";

const partnersNavItems = [
  { path: "/partners", label: "Partners\u00A0in\u00A0Care", end: true },
  { path: "/partners/patient-success", label: "Patient\u00A0Success" },
  { path: "/recommend", label: "Recommend" }
];

export default function Partners() {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/partners";

  return (
    <ModuleContainer>
      <InnerNav navItems={partnersNavItems} />
       
      <S.Content>
      {isHomeRoute ? (
          <h1>Welcome to the Partners in Care module</h1>
          ) : (
            <Outlet />
          )}
      </S.Content>
    </ModuleContainer>
  );
}
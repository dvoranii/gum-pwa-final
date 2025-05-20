import * as S from "./Toothbrush.styles";
import InnerNav from "../../components/InnerNav/InnerNav";
import { Outlet, useLocation } from 'react-router-dom';
import ModuleContainer from "../../components/ModuleContainer/ModuleContainer";

const toothbrushNavItems = [
  { path: "/toothbrush", label: "Brush\u00A0Home", end: true },
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
    <ModuleContainer>
      <InnerNav navItems={toothbrushNavItems} />
      <S.Content>
      {isHomeRoute ? (
          <h1>Welcome to the Toothbrush module</h1>
          ) : (
            <Outlet />
          )}
      </S.Content>
      
    </ModuleContainer>
  );
}
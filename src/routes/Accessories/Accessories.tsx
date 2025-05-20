
import * as S from "./Accessories.styles";
import InnerNav from "../../components/InnerNav/InnerNav";
import { Outlet, useLocation } from 'react-router-dom';
import ModuleContainer from "../../components/ModuleContainer/ModuleContainer";

const accessoriesNavItems = [
  { path: "/accessories", label: "Accessories", end: true },
  { path: "/recommend", label: "Recommend" }
];

export default function Accessories() {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/accessories";

  return (
    <ModuleContainer>
      <InnerNav navItems={accessoriesNavItems} />
      
      <S.Content>
      {isHomeRoute ? (
          <h1>Welcome to the Accessories module</h1>
          ) : (
            <Outlet />
          )}
      </S.Content>
    </ModuleContainer>
  );
}
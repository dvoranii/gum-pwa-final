
import * as S from "./Accessories.styles";
import InnerNav from "../../components/InnerNav/InnerNav";
import { Outlet, useLocation } from 'react-router-dom';
import PageTitle from "../../components/PageTitle/PageTitle";

const accessoriesNavItems = [
  { path: "/accessories/home", label: "Accessories", end: true },
  { path: "/recommend", label: "Recommend" }
];

export default function Accessories() {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/accessories";

  return (
    <S.AccessoriesContainer>
      <InnerNav navItems={accessoriesNavItems} />
      
      {isHomeRoute && (
        <S.LandingContent>
          <PageTitle>Accessories</PageTitle>
        </S.LandingContent>
      )}
      
      <S.Content>
        <Outlet />
      </S.Content>
    </S.AccessoriesContainer>
  );
}
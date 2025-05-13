
import * as S from "./OralSystemic.styles";
import InnerNav from "../../components/InnerNav/InnerNav";
import { Outlet, useLocation } from 'react-router-dom';

 const oralSystemicNavItems = [
  { path: "/oral-systemic/home", label: "The\u00A0Oral-Systemic\u00A0Link", end: true },
  { path: "/recommend", label: "Recommend" },
];

export default function OralSystemicLink(){

  const location = useLocation();
  const isHomeRoute = location.pathname === "/oral-systemic";
  
    return(
        <S.OralSystemicContainer>
            <InnerNav navItems={oralSystemicNavItems} />
            {isHomeRoute && <h1>Oral Systemic Link</h1>}
             <Outlet />
        </S.OralSystemicContainer>
    )
}
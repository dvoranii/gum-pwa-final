import * as S from "./Toothbrush.styles";
import InnerNav from "../../components/InnerNav/InnerNav";
import { Link, Outlet, useLocation } from 'react-router-dom';
import ModuleContainer from "../../components/ModuleContainer/ModuleContainer";

import Col1Row2 from "../../assets/btc/col1-row2.svg";
import PatientNeeds2 from "../../assets/toothbrush/PN.png";
import Technology2 from "../../assets/toothbrush/Tech.png";
import Portfolio2 from "../../assets/toothbrush/Port.png";
import Brushes from "../../assets/toothbrush/toothbrush.webp";

import PatientBG from "../../assets/toothbrush/patient/PatientBG.webp";

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
  const isHomePage = location.pathname === "/toothbrush";
  const isPatientRoute = location.pathname === '/toothbrush/patient';

  const backgroundImage = isPatientRoute ? `${PatientBG}` : undefined;

  return (
    <ModuleContainer $isHomePage={isHomePage} $backgroundImage={backgroundImage}>
      <InnerNav navItems={toothbrushNavItems} />
      <S.Content>
      {isHomePage ? (
           <S.BrushBG>
            <S.ContentLeft>
              <S.IntroTitleWrapper>
                <S.IntroTitle>Gum <br/>Toothbrush<br/> Solutions</S.IntroTitle>
              </S.IntroTitleWrapper>
              <S.RecommendedWrapper>
                <S.Recommended src={Col1Row2}/>
              </S.RecommendedWrapper>

              <S.LinksWrapper>
                <Link to="/toothbrush/tech">
                  <S.LinkImg src={Technology2} />
                </Link>
                <Link to="/toothbrush/patient">
                  <S.LinkImg src={PatientNeeds2} />
                </Link>
                <Link to="#">
                  <S.LinkImg src={Portfolio2} />
                </Link>
              </S.LinksWrapper>
            </S.ContentLeft>
            <S.ContentRight>
              <S.BrushesImg src={Brushes} />
            </S.ContentRight>
          </S.BrushBG>
          ) : (
            <Outlet />
          )}
      </S.Content>
      
    </ModuleContainer>
  );
}
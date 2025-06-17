import * as S from "./Btc.styles";
import InnerNav from "../../components/InnerNav/InnerNav";
import { Outlet, useLocation } from 'react-router-dom';
import ModuleContainer from "../../components/ModuleContainer/ModuleContainer";

import Col1Row2 from "../../assets/btc/crest.jpg";
import PatientNeeds2 from "../../assets/btc/PatientNeeds.png";
import Technology2 from "../../assets/btc/Technology.png";
import Flossers from "../../assets/btc/column2-flossers.webp";

import PatientBG from "../../assets/btc/patient/PatientBG.webp";

const btcNavItems = [
  { path: "/btc", label: "BTC\u00A0Home", end: true },
  { path: "/btc/tech", label: "Tech" },
  { path: "/btc/patient", label: "Patient" },
  { path: "/btc/floss", label: "Floss" },
  { path: "/btc/flossers", label: "Flossers" },
  { path: "/btc/id-brushes", label: "ID\u00A0Brushes" },
  { path: "/btc/soft-picks", label: "Soft\u00A0Picks" },
  { path: "/recommend", label: "Recommend" },
];

export default function Toothbrush() {
  const location = useLocation();
  const isHomePage = location.pathname === '/btc';
  const isPatientRoute = location.pathname === '/btc/patient';

  const backgroundImage = isPatientRoute ? `${PatientBG}` : undefined;

  return (
    <ModuleContainer $isHomePage={isHomePage} $backgroundImage={backgroundImage}>
      <InnerNav navItems={btcNavItems} />
      <S.Content>
      {isHomePage ? (
           <S.BrushBG>
            <S.ContentLeft>
              <S.IntroTitleWrapper>
                <S.IntroTitle>Gum <br/>Interproximal<br/> Solutions</S.IntroTitle>
              </S.IntroTitleWrapper>
              <S.RecommendedWrapper>
                <S.Recommended src={Col1Row2}/>
                <h3>Recommended<br/> By Canadian<br/> Dental Hygeinists</h3>
              </S.RecommendedWrapper>

               <S.LinksWrapper>
                <S.StyledLink to="/btc/tech" >
                  <S.LinkImg src={Technology2} />
                </S.StyledLink>
                <S.StyledLink to="/btc/patient">
                  <S.LinkImg src={PatientNeeds2} />
                </S.StyledLink>
              </S.LinksWrapper>
            </S.ContentLeft>
            <S.ContentRight>
              <S.FlossImg src={Flossers} />
            </S.ContentRight>
          </S.BrushBG>
          ) : (
            <Outlet />
          )}
      </S.Content>
      
    </ModuleContainer>
  );
}
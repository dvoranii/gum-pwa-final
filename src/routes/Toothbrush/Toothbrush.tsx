import * as S from "./Toothbrush.styles";
import InnerNav from "../../components/InnerNav/InnerNav";
import { Link, Outlet, useLocation } from 'react-router-dom';
import ModuleContainer from "../../components/ModuleContainer/ModuleContainer";

// Images
import Col1Row2 from "../../assets/btc/col1-row2.svg";
import PatientNeeds from "../../assets/toothbrush/PN.svg";
import Technology from "../../assets/toothbrush/Tech.svg";
import Portfolio from "../../assets/toothbrush/Port.svg";
import Brushes from "../../assets/toothbrush/toothbrush.svg";

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
                  <S.LinkImg src={Technology} />
                </Link>
                <Link to="/toothbrush/patient">
                  <S.LinkImg src={PatientNeeds} />
                </Link>
                <Link to="#">
                  <S.LinkImg src={Portfolio} />
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
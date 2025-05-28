import * as S from './Btc.styles';
import { Link, Outlet, useLocation } from 'react-router-dom';
import InnerNav from '../../components/InnerNav/InnerNav';
import ModuleContainer from "../../components/ModuleContainer/ModuleContainer";

import Col1Row2 from "../../assets/btc/col1-row2.svg";
import PatientNeeds2 from "../../assets/btc/PatientNeeds.png";
import Technology2 from "../../assets/btc/Technology.png";
import Portfolio2 from "../../assets/btc/Portfolio.png";
import Flossers from "../../assets/btc/column2-flossers.webp";

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

export default function Btc() {

  const location = useLocation();
  const isHomePage = location.pathname === '/btc';

  return (
    <ModuleContainer $isHomePage={isHomePage}>   
        <InnerNav navItems={btcNavItems} />
        <S.Content>
        {isHomePage ? (
          <S.BtcBG>
            <S.ContentLeft>
              <S.IntroTitleWrapper>
                <S.IntroTitle>Gum <br/>Interproximal<br/> Solutions</S.IntroTitle>
              </S.IntroTitleWrapper>
              <S.RecommendedWrapper>
                <S.Recommended src={Col1Row2}/>
              </S.RecommendedWrapper>

              <S.LinksWrapper>
                <Link to="/btc/tech">
                  <S.LinkImg src={Technology2} />
                </Link>
                <Link to="/btc/patient">
                  <S.LinkImg src={PatientNeeds2} />
                </Link>
                <Link to="#">
                  <S.LinkImg src={Portfolio2} />
                </Link>
              </S.LinksWrapper>
            </S.ContentLeft>
            <S.ContentRight>
              <S.FlossersImg src={Flossers} />
            </S.ContentRight>
          </S.BtcBG>
          ) : (
            <Outlet />
          )}
        </S.Content>
    </ModuleContainer>
  );
}
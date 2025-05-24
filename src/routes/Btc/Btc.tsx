import * as S from './Btc.styles';
import { Link, Outlet, useLocation } from 'react-router-dom';
import InnerNav from '../../components/InnerNav/InnerNav';
import ModuleContainer from "../../components/ModuleContainer/ModuleContainer";

import Col1Row2 from "../../assets/btc/col1-row2.svg";
import PatientNeeds from "../../assets/btc/PatientNeeds.svg";
import Technology from "../../assets/btc/Technology.svg";
import Portfolio from "../../assets/btc/Portfolio.svg";

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
    <ModuleContainer>   
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
                  <S.LinkImg src={Technology} />
                </Link>
                <Link to="/btc/patient">
                  <S.LinkImg src={PatientNeeds} />
                </Link>
                <Link to="#">
                  <S.LinkImg src={Portfolio} />
                </Link>
              </S.LinksWrapper>
            </S.ContentLeft>
            <S.ContentRight>

            </S.ContentRight>
          </S.BtcBG>
          ) : (
            <Outlet />
          )}
        </S.Content>
    </ModuleContainer>
  );
}
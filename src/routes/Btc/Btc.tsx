import * as S from './Btc.styles';
import { Outlet, useLocation } from 'react-router-dom';
import InnerNav from '../../components/InnerNav/InnerNav';
import PageTitle from '../../components/PageTitle/PageTitle';

const btcNavItems = [
  { path: "/btc/home", label: "BTC\u00A0Home", end: true },
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
  const isHomeRoute = location.pathname === "/btc";
  return (
    <S.BtcContainer>   
        <InnerNav navItems={btcNavItems} />
         {isHomeRoute && 
         <S.LandingContent>
            <PageTitle>Interproximal Solutions</PageTitle>
         </S.LandingContent>
         }

        <S.Content>
            <Outlet />
        </S.Content>
    </S.BtcContainer>
  );
}
import * as S from './Btc.styles';
import { Outlet } from 'react-router-dom';
import InnerNav from '../../components/InnerNav/InnerNav';

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
  return (
    <S.BtcContainer>   
        <InnerNav navItems={btcNavItems} />
      <S.Content>
        <Outlet />
      </S.Content>
    </S.BtcContainer>
  );
}
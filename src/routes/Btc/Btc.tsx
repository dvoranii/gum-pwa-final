import * as S from './Btc.styles';
import { Outlet } from 'react-router-dom';

export default function Btc() {
  return (
    <S.BtcContainer>
      <S.Title>Between Teeth Cleaning</S.Title>
      
      <S.NavTabs>
        <S.TabLink to="/btc" end>BTC Home</S.TabLink>
        <S.TabLink to="/btc/tech">Tech</S.TabLink>
        <S.TabLink to="/btc/patient">Patient</S.TabLink>
      </S.NavTabs>
      
      <S.Content>
        <Outlet />
      </S.Content>
    </S.BtcContainer>
  );
}
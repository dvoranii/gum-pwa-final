import * as S from './Btc.styles';
import { Outlet } from 'react-router-dom';
import GumLogo from "../../assets/GUMlogo.png";

export default function Btc() {
  return (
    <S.BtcContainer> 

      <S.NavTabsOuter>  
        <S.GumLogoWrapper>
            <img src={GumLogo} alt="" />
        </S.GumLogoWrapper>
        <S.NavTabs>
            <S.TabLink to="/btc" end>BTC&nbsp;Home</S.TabLink>
            <S.TabLink to="/btc/tech">Tech</S.TabLink>
            <S.TabLink to="/btc/patient">Patient</S.TabLink>
            <S.TabLink to="/btc/floss">Floss</S.TabLink>
            <S.TabLink to="/btc/flossers">Flossers</S.TabLink>
            <S.TabLink to="/btc/id-brushes">ID&nbsp;Brushes</S.TabLink>
            <S.TabLink to="/btc/soft-picks">Soft&nbsp;Picks</S.TabLink>
            <S.TabLink to="/btc/recommend">Recommend</S.TabLink>
        </S.NavTabs>
      </S.NavTabsOuter>   
      
      <S.Content>
        <Outlet />
      </S.Content>
    </S.BtcContainer>
  );
}
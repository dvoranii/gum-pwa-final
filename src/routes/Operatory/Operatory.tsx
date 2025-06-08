import * as S from "./Operatory.styles";
import InnerNav from "../../components/InnerNav/InnerNav";
import { Outlet, useLocation } from 'react-router-dom';
import ModuleContainer from "../../components/ModuleContainer/ModuleContainer";

import MonsterzImg from "../../assets/operatory/monsterz-image.webp";
import MonsterzLogo from "../../assets/operatory/monsterz-logo-text.webp";
import Fruits from "../../assets/operatory/fruits.webp";

const operatoryNavItems = [
  { path: "/operatory", label: "Operatory\u00A0Solutions", end: true },
  { path: "/recommend", label: "Recommend" }
];

export default function Operatory() {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/operatory";

  return (
    <ModuleContainer>
      <InnerNav navItems={operatoryNavItems} />
      
      <S.Content>
      {isHomeRoute ? (

        <S.OperatoryWrapper>
          <S.OperatoryWrapperInner>
          <S.ColLeft>
          <S.Row1>
            <S.ImgWrapper1>
              <img src={MonsterzLogo}/>
            </S.ImgWrapper1>
            <small>Ideal for kids and adults alike</small>
            <S.ListContainer>
              <ul>
                  <li>Unique variety pack offering (45 doses with 15 units of each flavour)</li>
                  <li>Proven flavours with Adults & Kids (Mint, Strawberry, Cherry)</li>
                  <li>Contains Sodium Fluoride 5.0% W/W (equivalent to 2.26% Fluoride)</li>
                  <li>Available in individual, 0.4 ml unit-dose sealed trays (includes brush)</li>
                  <li>Smooth & Clear appearance after application</li>
                  <li>Gluten-free, BPA-free, sweetened with xylitol</li>
                  <li>Fast-release fluoride & delivers effective fluoride uptake in<br/> lesioned enamel</li>
              </ul>      
          </S.ListContainer>
          </S.Row1>
          <S.Row2>
            <S.Row2Inner>
              <p>1219 Variety Pack (Cherry, Mint & Strawberry)</p>   
                <S.TextImgWrapper>
                <p>45/box</p> 
                <S.ImgWrapper2>
                  <img src={Fruits}/>
                </S.ImgWrapper2>
              </S.TextImgWrapper>

            </S.Row2Inner>

          </S.Row2>

        </S.ColLeft>
        <S.ColRight>
          <S.ImgWrapper3>
            <img src={MonsterzImg}/>
          </S.ImgWrapper3>
        </S.ColRight>
        </S.OperatoryWrapperInner>
        </S.OperatoryWrapper>
       
          ) : (
            <Outlet />
          )}
      </S.Content>
    </ModuleContainer>
  );
}
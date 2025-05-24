
import * as S from "./Partners.styles";
import InnerNav from "../../components/InnerNav/InnerNav";
import { Outlet, useLocation } from 'react-router-dom';
import ModuleContainer from "../../components/ModuleContainer/ModuleContainer";
import ModuleTitle from "../../components/ModuleTitle/ModuleTitle";
import BulletList from "../../components/BulletList/BulletList";

const partnersNavItems = [
  { path: "/partners", label: "Your partners\u00A0in\u00A0Care", end: true },
  { path: "/recommend", label: "Recommend" }
];

export default function Partners() {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/partners";

  return (
    <ModuleContainer>
      <InnerNav navItems={partnersNavItems} />
       
      <S.Content>
      {isHomeRoute ? (
          <>
            <ModuleTitle title={"Partners in Oral Care"}/>
            <BulletList items={['Engineering superior products for specific patient needs',
              "Supporting your goals as a dental professional."
            ]}/>

            <S.PartnersBG>
              

            </S.PartnersBG>
          </>
          ) : (
            <Outlet />
          )}
      </S.Content>
    </ModuleContainer>
  );
}
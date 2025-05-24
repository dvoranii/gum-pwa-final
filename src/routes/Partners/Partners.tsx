
import * as S from "./Partners.styles";
import { useState } from "react";
import InnerNav from "../../components/InnerNav/InnerNav";
import { Outlet, useLocation } from 'react-router-dom';
import ModuleContainer from "../../components/ModuleContainer/ModuleContainer";
import ModuleTitle from "../../components/ModuleTitle/ModuleTitle";
import BulletList from "../../components/BulletList/BulletList";
import GumLogo from "../../assets/gum-logo.svg";
import PatientImg from "../../assets/partners/Patient.svg";
import ProfessionalImg from "../../assets/partners/Professional.svg";
import PatAndProf from "../../assets/partners/Pat&Prof.svg";
import Partners2 from "../../assets/partners/Partner2.svg";

import BottomText from "../../components/BottomText/BottomText";

const partnersNavItems = [
  { path: "/partners", label: "Your partners\u00A0in\u00A0Care", end: true },
  { path: "/recommend", label: "Recommend" }
];

export default function Partners() {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/partners";
  const [showPartners2, setShowPartners2] = useState(false);

  const togglePartnersView = () => {
    setShowPartners2(!showPartners2);
  }

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

            <S.PartnersBG $isFullWidthImage={showPartners2}>
              {showPartners2 ? (
                <S.FullWidthImage 
                src={Partners2} 
                onTouchStart={togglePartnersView}
                alt="Partners alternative view" />
              ) : (
             <>
              <S.GumLogoCol>
                <S.GumLogo src={GumLogo} onTouchStart={togglePartnersView} />

                <S.GumTextWrapper>
                  <h2>Transforming</h2>
                  <h3>Experiences & Relationships</h3>
                </S.GumTextWrapper>
              </S.GumLogoCol> 

              <S.GraphicsCol>
                  <S.ImgTextWrapper>
                    <img src={PatientImg} alt="" />
                    <S.ColTextWrapper>
                      <h4>Patient</h4>
                      <p>Creating great first experiences that can transform patients' relationship with oral hygiene.</p>
                    </S.ColTextWrapper>
                  </S.ImgTextWrapper>
                  <S.ImgTextWrapper>
                    <img src={ProfessionalImg} alt="" />
                    <S.ColTextWrapper>
                      <h4>Professional</h4>
                      <p>Engineering superior products specifically designed for your unique patient needs.</p>
                    </S.ColTextWrapper>
                  </S.ImgTextWrapper>
                  <S.ImgTextWrapper>
                    <img src={PatAndProf} alt="" />
                    <S.ColTextWrapper>
                      <h4>Patient & Professional</h4>
                      <p>Building trust through recommendations that both professional and patient can count on.</p>
                    </S.ColTextWrapper>
                  </S.ImgTextWrapper>
              </S.GraphicsCol>    
                </>
              )}

            </S.PartnersBG>

            <BottomText text={"Earning our #1 recommended Status Every Day - this is our driving purpose."} />
          </>
          ) : (
            <Outlet />
          )}
      </S.Content>
    </ModuleContainer>
  );
}
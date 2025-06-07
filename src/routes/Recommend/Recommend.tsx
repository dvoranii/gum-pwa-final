
import * as S from "./Recommend.styled";
import { useState } from "react";
import InnerNav from "../../components/InnerNav/InnerNav";
import { Outlet, useLocation } from 'react-router-dom';
import ModuleContainer from "../../components/ModuleContainer/ModuleContainer";
import ModuleTitle from "../../components/ModuleTitle/ModuleTitle";
import BulletList from "../../components/BulletList/BulletList";
import GumLogo from "../../assets/gum-logo.svg";
import PatientImg from "../../assets/partners/Patient.webp";
import ProfessionalImg from "../../assets/partners/Professional.webp";
import PatAndProf from "../../assets/partners/Pat&Prof.webp";

import BottomText from "../../components/BottomText/BottomText";

type NavItem = {
    path: string;
    label: string;
    end?: boolean;
}

type ParentRoute = 
  | "/" 
  | "/oral-systemic" 
  | "/partners" 
  | "/btc" 
  | "/toothbrush" 
  | "/operatory" 
  | "/accessories";

const parentRouteNavItems: Record<ParentRoute | "default", NavItem[]> = {
  "/": [
    { path: "/", label: "Home", end: true },
    { path: "/recommend", label: "Recommend" }
  ],

  "/oral-systemic": [
    { path: "/oral-systemic", label: "Oral-Systemic Link", end: true },
    { path: "/recommend", label: "Recommend" }
  ],
  
  "/partners": [
    { path: "/partners", label: "Your partners\u00A0in\u00A0Care", end: true },
    { path: "/recommend", label: "Recommend" }
  ],
  
  "/btc": [
    { path: "/btc", label: "Between the Teeth Cleaning", end: true },
    { path: "/recommend", label: "Recommend" }
  ],
  
  "/toothbrush": [
    { path: "/toothbrush", label: "Toothbrushes", end: true },
    { path: "/recommend", label: "Recommend" }
  ],
  
  "/operatory": [
    { path: "/operatory", label: "Operatory", end: true },
    { path: "/recommend", label: "Recommend" }
  ],
  
  "/accessories": [
    { path: "/accessories", label: "Accessories", end: true },
    { path: "/recommend", label: "Recommend" }
  ],
  
  "default": [
    { path: "/", label: "Home", end: true },
    { path: "/recommend", label: "Recommend" }
  ]
};

export default function Recommend() {
  const location = useLocation();
  const isHomePage = location.pathname === "/recommend";

  const getNavItems = (): NavItem[] => {
    const navItemsFromState = location.state?.navItems;
    if (navItemsFromState) {
      return navItemsFromState;
    }

    const getParentRoute = (): ParentRoute => {
      const routeFromState = location.state?.from;
      return routeFromState && 
             routeFromState in parentRouteNavItems && 
             routeFromState !== "default" 
        ? routeFromState as ParentRoute 
        : "/";
    }
    
    const parentRoute = getParentRoute();
    return parentRouteNavItems[parentRoute] || parentRouteNavItems.default;
  }

  const navItems = getNavItems();


  return (
    <ModuleContainer $isHomePage={isHomePage}>
      <InnerNav navItems={navItems} />
       
      <S.Content>
      {isHomePage ? (
          <>
            <ModuleTitle title={"Partners in Oral Care"}/>
            <BulletList items={['Engineering superior products for specific patient needs',
              "Supporting your goals as a dental professional."
            ]}/>

            <S.PartnersBG>
              <S.GumLogoCol>
                <S.GumLogo src={GumLogo} />
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
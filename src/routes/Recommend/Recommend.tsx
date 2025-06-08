
import * as S from "./Recommend.styled";
import {useState} from "react";
import Flickity from 'react-flickity-component';
import 'flickity/dist/flickity.min.css';

import InnerNav from "../../components/InnerNav/InnerNav";
import { Outlet, useLocation } from 'react-router-dom';
import ModuleContainer from "../../components/ModuleContainer/ModuleContainer";
import ModuleTitle from "../../components/ModuleTitle/ModuleTitle";
import BulletList from "../../components/BulletList/BulletList";
import BottomText from "../../components/BottomText/BottomText";

import BG1 from "../../assets/recommend/bg-1.webp";
import BG2 from "../../assets/recommend/bg-2.webp";
import BG3 from "../../assets/recommend/bg-3.webp";

import BGCircle1 from "../../assets/recommend/bg-1-circle-1.webp";
import BG2Circle1 from "../../assets/recommend/bg-2-circle-1.webp";
import BG2_3Circles from "../../assets/recommend/bg-2-3-circles.webp";

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
  const [activeView, setActiveView] = useState<'default' | "alternate">('default');

  const toggleView = () => {
    setActiveView(prev => prev === 'default' ? 'alternate' : 'default');
  }

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

   const flickityOptions = {
        initialIndex: 0,
        wrapAround: true,
        autoPlay: false,
        prevNextButtons: true,
        pageDots: true,
        contain: true,
        cellAlign: 'center'
    };


  return (
    <ModuleContainer $isHomePage={isHomePage}>
      <InnerNav navItems={navItems} />
       
      <S.Content>
      {isHomePage ? (
          <>
            <ModuleTitle title={`A GUM Recommendation`}/>
            <BulletList items={[`The right product for your patient's unique needs.`,
              `Alleviating confusion at shelf.`
            ]}/>

            <S.CarouselWrapper>
            <Flickity
                className={'carousel'} 
                elementType={'div'}
                options={flickityOptions}
                disableImagesLoaded={true}          
                static={false}
            >
                {activeView === 'default' ? (
                <S.PartnersBG $bgImage={BG1}>
                    <S.CircleWrapper onClick={toggleView}>
                    <img src={BGCircle1} alt="Default view" />
                    </S.CircleWrapper>
                </S.PartnersBG>
                ) : (
                <S.PartnersBG $bgImage={BG2}>
                    <S.CircleWrapper onClick={toggleView}>
                    <img src={BG2Circle1} alt="Alternate view" />
                    </S.CircleWrapper>
                    <S.ThreeCirclesWrapper>
                    <img src={BG2_3Circles} alt="Additional circles" />
                    </S.ThreeCirclesWrapper>
                </S.PartnersBG>
                )}
                <S.PartnersBG $bgImage={BG3}/>
            </Flickity>
        </S.CarouselWrapper>

           <BottomText lines={[
            "Your professional guidance matters.",
            "Never underestimate the power of your recommendation."
            ]} />
          </>
          ) : (
            <Outlet />
          )}
      </S.Content>
    </ModuleContainer>
  );
}
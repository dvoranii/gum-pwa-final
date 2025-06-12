
import * as S from "./Partners.styles";

import Flickity from 'react-flickity-component';
import 'flickity/dist/flickity.min.css';

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
import Partners2 from "../../assets/partners/Partner2.webp";

import BottomText from "../../components/BottomText/BottomText";

const partnersNavItems = [
  { path: "/partners", label: "Your partners\u00A0in\u00A0Care", end: true },
  { path: "/recommend", label: "Recommend" }
];

export default function Partners() {
  const location = useLocation();
  const isHomePage = location.pathname === "/partners";

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
      <InnerNav navItems={partnersNavItems} />
       
      <S.Content>
      {isHomePage ? (
          <>
            <ModuleTitle title={"Partners in Oral Care"}/>
            <BulletList items={['Engineering superior products for specific patient needs',
              "Supporting your goals as a dental professional."
            ]}/>

            <S.CarouselWrapper>
              <Flickity
                className={'carousel'} 
                elementType={'div'}
                options={flickityOptions}
                disableImagesLoaded={true}          
                static={false}
              >

            <S.PartnersBG>
              <S.GumLogoCol>
                <S.GumLogo src={GumLogo} />

                <S.GumTextWrapper>
                  <h2>Transforming</h2>
                  <h3>Patient Experiences<br/> & Relationships</h3>
                </S.GumTextWrapper>
              </S.GumLogoCol> 

              <S.GraphicsCol>
                  <S.ImgTextWrapper>
                    <img src={PatientImg} alt="" />
                    <S.ColTextWrapper>
                      <h4>Patient</h4>
                      <p>Creating experiences that can transform patients' relationship with hygiene.</p>
                    </S.ColTextWrapper>
                  </S.ImgTextWrapper>
                  <S.ImgTextWrapper>
                    <img src={ProfessionalImg} alt="" />
                    <S.ColTextWrapper>
                      <h4>Professional</h4>
                      <p>Engineering superior products designed for unique patient needs.</p>
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
            <S.PartnersBG $isFullWidthImage>
              <S.FullWidthImage 
                src={Partners2} 
                alt="Partners alternative view" 
              />
            </S.PartnersBG>
            </Flickity>
            </S.CarouselWrapper>

            <BottomText lines={["Earning our #1 recommended Status Every Day - this is our driving purpose."]} />
          </>
          ) : (
            <Outlet />
          )}
      </S.Content>
    </ModuleContainer>
  );
}
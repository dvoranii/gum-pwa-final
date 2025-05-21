import * as S from "./OralSystemic.styles";
import InnerNav from "../../components/InnerNav/InnerNav";
import { Outlet, useLocation } from 'react-router-dom';
import { useRef, useState } from "react";
import Flickity from 'react-flickity-component';
import 'flickity/dist/flickity.min.css';

import OralSystemicImgFull from "../../assets/oral-systemic/oral-systemic-full-img.png";
import ToothActive from "../../assets/oral-systemic/tooh-active.png";
import HeartBranch from "../../assets/oral-systemic/heartbranch.png";
import HeartActive from "../../assets/oral-systemic/heart-active.png";
import BrainBranch from "../../assets/oral-systemic/brainbranch.png";
import BrainActive from "../../assets/oral-systemic/brain-active.png";
import BloodBranch from "../../assets/oral-systemic/bloodbranch.png";
import BloodActive from "../../assets/oral-systemic/blood-active.png";


import Slide1 from "../../assets/carousel/flickity-slide-1.png";
import Slide2 from "../../assets/carousel/flickity-slide-2.png";
import Slide3 from "../../assets/carousel/flickity-slide-3.png";

import ModuleContainer from "../../components/ModuleContainer/ModuleContainer";

const oralSystemicNavItems = [
  { path: "/oral-systemic", label: "The\u00A0Oral-Systemic\u00A0Link", end: true },
  { path: "/recommend", label: "Recommend" },
];

export default function OralSystemicLink() {
  const location = useLocation();
  const isHomePage = location.pathname === '/oral-systemic';

  const [showCarousel, setShowCarousel] = useState(true);
  const [showTooth, setShowTooth] = useState(false);
  const [activeHeart, setActiveHeart] = useState(false);
  const [activeBrain, setActiveBrain] = useState(false);
  const [activeBlood, setActiveBlood] = useState(false);

//   const flickityRef = useRef<Flickity | null>(null);

  const flickityOptions = {
    initialIndex: 0,
    wrapAround: true,
    autoPlay: false,
    prevNextButtons: true,
    pageDots: true,
    contain: true,
    cellAlign: 'center'
  };

  const toggleTooth = (e: React.TouchEvent | React.MouseEvent) => {
    e.stopPropagation();
    const wasActive = showTooth;
    setShowTooth(prev => !prev);
    setShowCarousel(wasActive);
    setActiveHeart(false);
    setActiveBrain(false);
    setActiveBlood(false);

//     setTimeout(() => {
//     if (wasActive && flickityRef.current) {
//       flickityRef.current.resize(); 
//     }
//   }, 50);
  };

  const toggleHeart = (e: React.TouchEvent | React.MouseEvent) => {
    e.stopPropagation();
    setActiveHeart(prev => !prev);
    setActiveBrain(false);
    setActiveBlood(false);
    setShowTooth(true);
    setShowCarousel(false);
  };

  const toggleBrain = (e: React.TouchEvent | React.MouseEvent) => {
    e.stopPropagation();
    setActiveBrain(prev => !prev);
    setActiveHeart(false);
    setActiveBlood(false);
    setShowTooth(true);
    setShowCarousel(false);
  };

  const toggleBlood = (e: React.TouchEvent | React.MouseEvent) => {
    e.stopPropagation();
    setActiveBlood(prev => !prev);
    setActiveHeart(false);
    setActiveBrain(false);
    setShowTooth(true);
    setShowCarousel(false);
  };

  const branchResults = {
    heart: {
      percentage: "67%",
      description: "Patients with periodontal disease have significantly increased risk of cardiovascular problems."
    },
    brain: {
      percentage: "29%",
      description: "Oral bacteria found in majority of Alzheimer's brain tissue samples studied."
    },
    blood: {
      percentage: "1 in 3",
      description: "Severe gum disease can elevate blood sugar levels in diabetic patients."
    }
  };

  return (
    <ModuleContainer>
      <InnerNav navItems={oralSystemicNavItems} />
      <S.Content>
        {isHomePage ? (
          <>
            <h1>The Oral-Systemic Link</h1>
            <ul>
              <li><span>Overall health starts in your mouth.</span></li>
            </ul>

            <S.OralSystemicImgWrapperOuter>
              <S.ImagesWrapperInner showResults={!showCarousel && (activeHeart || activeBrain || activeBlood)}>
                <S.BaseImg       
                  src={OralSystemicImgFull}
                  onTouchStart={toggleTooth}
                />

                {showTooth && (
                  <>
                    <S.ToothActiveOverlay 
                      src={ToothActive}
                      onTouchStart={toggleTooth}
                    />
                    
                    <S.HeartBranch 
                      src={HeartBranch} 
                      onTouchStart={toggleHeart}
                    />
                    {activeHeart && (
                      <S.HeartActiveOverlay 
                        src={HeartActive}
                        onTouchStart={(e) => e.stopPropagation()}
                      />
                    )}

                    <S.BrainBranch 
                      src={BrainBranch} 
                      onTouchStart={toggleBrain}
                    />
                    {activeBrain && (
                      <S.BrainActiveOverlay 
                        src={BrainActive}
                        onTouchStart={(e) => e.stopPropagation()}
                      />
                    )}

                    <S.BloodBranch 
                      src={BloodBranch} 
                      onTouchStart={toggleBlood}
                    />
                    {activeBlood && (
                      <S.BloodActiveOverlay 
                        src={BloodActive}
                        onTouchStart={(e) => e.stopPropagation()}
                      />
                    )}
                  </>
                )}
              </S.ImagesWrapperInner>

              {showCarousel ? (
                <S.CarouselWrapper>
                  <Flickity
                    className={'carousel'} 
                    elementType={'div'}
                    options={flickityOptions}
                    disableImagesLoaded={true}          
                    static={false}
                  >
                    <S.CarouselSlide>
                      <S.SlideImage src={Slide1} alt="Slide 1" />
                    </S.CarouselSlide>
                    <S.CarouselSlide>
                      <S.SlideImage src={Slide2} alt="Slide 2" />
                    </S.CarouselSlide>
                    <S.CarouselSlide>
                      <S.SlideImage src={Slide3} alt="Slide 3" />
                    </S.CarouselSlide>
                  </Flickity>
                </S.CarouselWrapper>
              ) : (
                <>
                  {activeHeart && (
                    <S.ResultImgWrapper>
                      <S.ResultContent>
                        <S.ResultPercentage>{branchResults.heart.percentage}</S.ResultPercentage>
                        <S.ResultDescription>{branchResults.heart.description}</S.ResultDescription>
                      </S.ResultContent>
                    </S.ResultImgWrapper>
                  )}

                  {activeBrain && (
                    <S.ResultImgWrapper>
                      <S.ResultContent>
                        <S.ResultPercentage>{branchResults.brain.percentage}</S.ResultPercentage>
                        <S.ResultDescription>{branchResults.brain.description}</S.ResultDescription>
                      </S.ResultContent>
                    </S.ResultImgWrapper>
                  )}

                  {activeBlood && (
                    <S.ResultImgWrapper>
                      <S.ResultContent>
                        <S.ResultPercentage>{branchResults.blood.percentage}</S.ResultPercentage>
                        <S.ResultDescription>{branchResults.blood.description}</S.ResultDescription>
                      </S.ResultContent>
                    </S.ResultImgWrapper>
                  )}
                </>
              )}
            </S.OralSystemicImgWrapperOuter>

            <S.BottomText>
              <p>Sharing this information with patients, in a way that is intended to inform and encourage
                 good oral care can help solidify ritualistic habits and better overall health.</p>
            </S.BottomText>
          </>
        ) : (
          <Outlet />
        )}
      </S.Content>
    </ModuleContainer>
  );
}
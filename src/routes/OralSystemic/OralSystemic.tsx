import * as S from "./OralSystemic.styles";
import InnerNav from "../../components/InnerNav/InnerNav";
import { Outlet, useLocation } from 'react-router-dom';
import { useState } from "react";
import Flickity from 'react-flickity-component';
import 'flickity/dist/flickity.min.css';

import ModuleTitle from "../../components/ModuleTitle/ModuleTitle";

import OralSystemicImgFull from "../../assets/oral-systemic/OS-base-diagram.svg";
import BaseImg2 from  "../../assets/oral-systemic/BaseImg-2.svg";
import Branches from "../../assets/oral-systemic/branches.svg";

import HeartBranch from "../../assets/oral-systemic/heartbranch.svg";
import HeartBranchResult from "../../assets/oral-systemic/HeartBranchResult.webp";
import HeartActive from "../../assets/oral-systemic/heart-active.svg";

import BrainBranch from "../../assets/oral-systemic/brainbranch.svg";
import BrainActive from "../../assets/oral-systemic/brain-active.svg";
import BrainBranchResult from "../../assets/oral-systemic/BrainBranchResult.webp";

import BloodBranch from "../../assets/oral-systemic/bloodbranch.svg";
import BloodActive from "../../assets/oral-systemic/blood-active.svg";
import BloodBranchResult from "../../assets/oral-systemic/BloodBranchResult.webp";


import Slide1 from "../../assets/oral-systemic/carousel/OS-slide1.webp";
import Slide2 from "../../assets/oral-systemic/carousel/OS-slide2.webp";
import Slide3 from "../../assets/oral-systemic/carousel/OS-slide3.webp";

import ModuleContainer from "../../components/ModuleContainer/ModuleContainer";
import BulletList from "../../components/BulletList/BulletList";

import BottomText from "../../components/BottomText/BottomText";

const oralSystemicNavItems = [
  { path: "/oral-systemic", label: "The\u00A0Oral-Systemic\u00A0Link", end: true },
  { path: "/recommend", label: "Recommend"},
];

export default function OralSystemicLink() {
  const location = useLocation();
  const isHomePage = location.pathname === '/oral-systemic';

  const [showBaseImg2, setShowBaseImg2] = useState(false);
  const [activeBranch, setActiveBranch] = useState<string | null>(null);

  const showCarousel = !showBaseImg2;
  const activeHeart = activeBranch === 'heart';
  const activeBrain = activeBranch === 'brain';
  const activeBlood = activeBranch === 'blood';


  const flickityOptions = {
    initialIndex: 0,
    wrapAround: true,
    autoPlay: false,
    prevNextButtons: true,
    pageDots: true,
    contain: true,
    cellAlign: 'center'
  };

  const toggleBaseImg = (e: React.PointerEvent) => {
    e.stopPropagation();
    setShowBaseImg2(prev => !prev);
    setActiveBranch(null); 
  };

  const toggleHeart = (e: React.PointerEvent) => {
    e.stopPropagation();
    setActiveBranch(prev => prev === "heart" ? null : 'heart');
    setShowBaseImg2(true); 
  };

  const toggleBrain = (e: React.PointerEvent) => {
    e.stopPropagation();
    setActiveBranch(prev => prev === 'brain' ? null : 'brain');
    setShowBaseImg2(true);
  };

  const toggleBlood = (e: React.PointerEvent) => {
    e.stopPropagation();
    setActiveBranch(prev => prev === 'blood' ? null : 'blood');
    setShowBaseImg2(true);
  };


  return (
    <ModuleContainer $isHomePage={isHomePage}>
      <InnerNav navItems={oralSystemicNavItems} />
      <S.Content>
        {isHomePage ? (
          <>
            <ModuleTitle title={"The Oral-Systemic Link"} />
            <BulletList items={["Overall health starts in your mouth."]} />

            <S.OralSystemicImgWrapperOuter>
              <S.ImagesWrapperInner showResults={!showCarousel && (activeHeart || activeBrain || activeBlood)}>
                
                <S.BaseImg       
                  src={showBaseImg2 ? BaseImg2 : OralSystemicImgFull}
                  onPointerDown={toggleBaseImg}
                />

                {showBaseImg2 && (
                  <>
                    <S.Branches src={Branches}/>
                    
                    <S.HeartBranch 
                      src={HeartBranch} 
                       onPointerDown={toggleHeart}
                    />
                    {activeHeart && (
                      <S.HeartActiveOverlay 
                        src={HeartActive}
                        onPointerDown={(e) => e.stopPropagation()}                      
                      />
                    )}

                    <S.BrainBranch 
                      src={BrainBranch} 
                      onPointerDown={toggleBrain}
                    />
                    {activeBrain && (
                      <S.BrainActiveOverlay 
                        src={BrainActive}
                        onPointerDown={(e) => e.stopPropagation()}
                      />
                    )}

                    <S.BloodBranch 
                      src={BloodBranch} 
                      onPointerDown={toggleBlood}
                    />
                    {activeBlood && (
                      <S.BloodActiveOverlay 
                        src={BloodActive}
                        onPointerDown={(e) => e.stopPropagation()}


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
                    {/* Slide 1 */}
                    <S.CarouselSlide>
                        <S.SlideContent>
                        <S.SlideNumber>6<S.SlideOrdinal>th</S.SlideOrdinal></S.SlideNumber>
                        <S.SlideTextContent>
                          <S.SlideTitle>
                            Periodontitis is the<br/> sixth-most common<br/> global health<br/> condition.
                          </S.SlideTitle>
                          <S.SlideCitation>*Journal of Clinical Periodontology</S.SlideCitation>
                        </S.SlideTextContent>
                      </S.SlideContent>
                    </S.CarouselSlide>

                    {/* Slide 2 */}

                    <S.CarouselSlide>
                       <S.SlideContent>
                        <S.SlideNumber $letterSpacing="-12px">57<S.SlideOrdinal $marginLeft="-0.8rem" $fontSize="8.8rem" $vertAlignBottom $topOffset="6px">+</S.SlideOrdinal></S.SlideNumber>
                        <S.SlideTextContent>
                          <S.SlideTitle $fontSize="2.6rem" $paddingLeft="0.8rem">
                            Research shows no fewer than 57 conditions linked to periodontal disease.
                          </S.SlideTitle>
                          <S.SlideCitation $paddingTop="1.2rem" $paddingLeft="0.8rem">*Journal of Clinical Periodontology</S.SlideCitation>
                        </S.SlideTextContent>
                      </S.SlideContent>
                    </S.CarouselSlide>

                    {/* Slide 3 */}

                    <S.CarouselSlide>
                    <S.SlideContent>
                      <S.SlideNumber $letterSpacing="-8px">
                        <S.SlideNumberWrapper>
                          <S.SlideNumberText>50</S.SlideNumberText>
                          <S.SlideOrdinalStacked>
                            <S.SlideOrdinalPlus>+</S.SlideOrdinalPlus>
                            <S.SlideOrdinalText>years</S.SlideOrdinalText>
                          </S.SlideOrdinalStacked>
                        </S.SlideNumberWrapper>
                      </S.SlideNumber>
                      <S.SlideTextContent $paddingTop="0.4rem">
                        <S.SlideTitle $fontSize="2.4rem" $paddingLeft="0.4rem">
                          The link between PD's<br/>
                          inflammatory response<br/>
                          and systemic health issues<br/>
                          has been studied in depth<br/>
                          for over a half a century.
                        </S.SlideTitle>
                        <S.SlideCitation $paddingLeft="0.4rem" $paddingTop="1.2rem">*Journal of Clinical Periodontology</S.SlideCitation>
                      </S.SlideTextContent>
                    </S.SlideContent>
                  </S.CarouselSlide>
                  </Flickity>
                </S.CarouselWrapper>
              ) : (
                <>
                  {activeHeart && (
                    <S.ResultImgWrapper>
                      <S.ResultContent>
                        <S.ResultTextImg src={HeartBranchResult}/>
                      </S.ResultContent>
                    </S.ResultImgWrapper>
                  )}

                  {activeBrain && (
                    <S.ResultImgWrapper>
                      <S.ResultContent>
                        <S.ResultTextImg src={BrainBranchResult} />
                      </S.ResultContent>
                    </S.ResultImgWrapper>
                  )}

                  {activeBlood && (
                    <S.ResultImgWrapper>
                      <S.ResultContent>
                        <S.ResultTextImg src={BloodBranchResult}/>
                      </S.ResultContent>
                    </S.ResultImgWrapper>
                  )}
                </>
              )}
            </S.OralSystemicImgWrapperOuter>

            <BottomText lines={[`Sharing this information with patients, in a way that encourages good oral care
            `, "can help solidify ritualistic habits and better overall health."]} />
          </>
        ) : (
          <Outlet />
        )}
      </S.Content>
    </ModuleContainer>
  );
}
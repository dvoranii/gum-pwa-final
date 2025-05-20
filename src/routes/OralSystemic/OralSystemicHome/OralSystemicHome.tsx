import * as S from "./OralSystemicHome.styles";
import OralSystemicImgFull from "../../../assets/oral-systemic/oral-systemic-full-img.png";
import ToothActive from "../../../assets/oral-systemic/tooh-active.png";
import HeartBranch from "../../../assets/oral-systemic/heartbranch.png";
import HeartActive from "../../../assets/oral-systemic/heart-active.png";
import BrainBranch from "../../../assets/oral-systemic/brainbranch.png";
import BrainActive from "../../../assets/oral-systemic/brain-active.png";
import BloodBranch from "../../../assets/oral-systemic/bloodbranch.png";
import BloodActive from "../../../assets/oral-systemic/blood-active.png";
import { useState } from "react";

import Flickity from 'react-flickity-component';
import 'flickity/dist/flickity.min.css';

import Slide1 from "../../../assets/carousel/flickity-slide-1.png";
import Slide2 from "../../../assets/carousel/flickity-slide-2.png";
import Slide3 from "../../../assets/carousel/flickity-slide-3.png";

export default function OralSystemicHome() {
  // Individual state for each branch
  const [showCarousel, setShowCarousel] = useState(true);
  const [showTooth, setShowTooth] = useState(false);
  const [activeHeart, setActiveHeart] = useState(false);
  const [activeBrain, setActiveBrain] = useState(false);
  const [activeBlood, setActiveBlood] = useState(false);

  const flickityOptions = {
    initialIndex: 0,
    wrapAround: true,
    autoPlay: 5000,
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
    <S.OralSystemicHomeContainer>
      <h1>The Oral-Systemic Link</h1>
      <ul>
        <li><span>Overall health starts in your mouth.</span></li>
      </ul>

      <S.OralSystemicImgWrapperOuter>
      <S.ImagesWrapperInner showResults={!showCarousel && (activeHeart || activeBrain || activeBlood)}>
          <S.BaseImg       
            src={OralSystemicImgFull}
            onTouchStart={toggleTooth}
            // onClick={toggleTooth}
          />

          {showTooth && (
            <>
              <S.ToothActiveOverlay 
                src={ToothActive}
                onTouchStart={toggleTooth}
                // onClick={toggleTooth}
                
              />
              
 
              <S.HeartBranch 
                src={HeartBranch} 
                onTouchStart={toggleHeart}
                // onClick={toggleHeart}
              />
              {activeHeart && (
                <S.HeartActiveOverlay 
                  src={HeartActive}
                  onTouchStart={(e) => e.stopPropagation()}
                  // onClick={(e) => e.stopPropagation()}
                />
              )}

              <S.BrainBranch 
                src={BrainBranch} 
                onTouchStart={toggleBrain}
                // onClick={toggleBrain}
              />
              {activeBrain && (
                <S.BrainActiveOverlay 
                  src={BrainActive}
                  onTouchStart={(e) => e.stopPropagation()}
                  // onClick={(e) => e.stopPropagation()}
                />
              )}

              <S.BloodBranch 
                src={BloodBranch} 
                onTouchStart={toggleBlood}
                // onClick={toggleBlood}
              />
              {activeBlood && (
                <S.BloodActiveOverlay 
                  src={BloodActive}
                  onTouchStart={(e) => e.stopPropagation()}
                  // onClick={(e) => e.stopPropagation()}
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
        disableImagesLoaded={false}
        reloadOnUpdate
        static
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
        {/* <S.BottomSubText>
          What do you see in your practice to support this connection?
        </S.BottomSubText> */}
      </S.BottomText>
    </S.OralSystemicHomeContainer>
  );
}
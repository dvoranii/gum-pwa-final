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

export default function OralSystemicHome() {
  // Individual state for each branch
  const [showTooth, setShowTooth] = useState(false);
  const [activeHeart, setActiveHeart] = useState(false);
  const [activeBrain, setActiveBrain] = useState(false);
  const [activeBlood, setActiveBlood] = useState(false);

  const toggleTooth = (e: React.TouchEvent | React.MouseEvent) => {
    e.stopPropagation();
    setShowTooth(prev => !prev);
    // Reset all branches when toggling tooth
    setActiveHeart(false);
    setActiveBrain(false);
    setActiveBlood(false);
  };

  const toggleHeart = (e: React.TouchEvent | React.MouseEvent) => {
    e.stopPropagation();
    setActiveHeart(prev => !prev);
    setActiveBrain(false);
    setActiveBlood(false);
    setShowTooth(true); // Ensure tooth stays visible
  };

  const toggleBrain = (e: React.TouchEvent | React.MouseEvent) => {
    e.stopPropagation();
    setActiveBrain(prev => !prev);
    setActiveHeart(false);
    setActiveBlood(false);
    setShowTooth(true);
  };

  const toggleBlood = (e: React.TouchEvent | React.MouseEvent) => {
    e.stopPropagation();
    setActiveBlood(prev => !prev);
    setActiveHeart(false);
    setActiveBrain(false);
    setShowTooth(true);
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
        <li><span>Greater health starts in the mouth.</span></li>
        <li><span>The difference you make goes much deeper than oral health.</span></li>
      </ul>

      <S.OralSystemicImgWrapperOuter>
        <S.ImagesWrapperInner>
          <S.BaseImg       
            src={OralSystemicImgFull}
            onTouchStart={toggleTooth}
            onClick={toggleTooth}
          />

          {showTooth && (
            <>
              <S.ToothActiveOverlay 
                src={ToothActive}
                onTouchStart={toggleTooth}
                onClick={toggleTooth}
                
              />
              
 
              <S.HeartBranch 
                src={HeartBranch} 
                onTouchStart={toggleHeart}
                onClick={toggleHeart}
              />
              {activeHeart && (
                <S.HeartActiveOverlay 
                  src={HeartActive}
                  onTouchStart={(e) => e.stopPropagation()}
                  onClick={(e) => e.stopPropagation()}
                />
              )}

              <S.BrainBranch 
                src={BrainBranch} 
                onTouchStart={toggleBrain}
                onClick={toggleBrain}
              />
              {activeBrain && (
                <S.BrainActiveOverlay 
                  src={BrainActive}
                  onTouchStart={(e) => e.stopPropagation()}
                  onClick={(e) => e.stopPropagation()}
                />
              )}

              <S.BloodBranch 
                src={BloodBranch} 
                onTouchStart={toggleBlood}
                onClick={toggleBlood}
              />
              {activeBlood && (
                <S.BloodActiveOverlay 
                  src={BloodActive}
                  onTouchStart={(e) => e.stopPropagation()}
                  onClick={(e) => e.stopPropagation()}
                />
              )}
            </>
          )}
        </S.ImagesWrapperInner>

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
    </S.OralSystemicImgWrapperOuter>

      <S.BottomText>
        Heart Disease is on the rise. Alzheimer's is on the rise. Diabetes is on the rise.
        <S.BottomSubText>
          What do you see in your practice to support this connection?
        </S.BottomSubText>
      </S.BottomText>
    </S.OralSystemicHomeContainer>
  );
}
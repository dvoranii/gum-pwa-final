import * as S from "./OralSystemic.styles";
import InnerNav from "../../components/InnerNav/InnerNav";
import { Outlet, useLocation } from "react-router-dom";
import { ReactNode, useState } from "react";
import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";

import ModuleTitle from "../../components/ModuleTitle/ModuleTitle";

import OralSystemicImgFull from "../../assets/oral-systemic/OS-base-diagram.svg";
import BaseImg2 from "../../assets/oral-systemic/BaseImg-2.svg";
import Branches from "../../assets/oral-systemic/branches.svg";

import HeartBranch from "../../assets/oral-systemic/heartbranch.svg";
import HeartActive from "../../assets/oral-systemic/heart-active.svg";

import BrainBranch from "../../assets/oral-systemic/brainbranch.svg";
import BrainActive from "../../assets/oral-systemic/brain-active.svg";

import BloodBranch from "../../assets/oral-systemic/bloodbranch.svg";
import BloodActive from "../../assets/oral-systemic/blood-active.svg";

import ModuleContainer from "../../components/ModuleContainer/ModuleContainer";
import BulletList from "../../components/BulletList/BulletList";

import BottomText from "../../components/BottomText/BottomText";

const oralSystemicNavItems = [
  {
    path: "/oral-systemic",
    label: "The\u00A0Oral-Systemic\u00A0Link",
    end: true,
  },
  { path: "/recommend", label: "Recommend" },
];

export default function OralSystemicLink() {
  const location = useLocation();
  const isHomePage = location.pathname === "/oral-systemic";

  const [showBaseImg2, setShowBaseImg2] = useState(false);
  const [activeBranch, setActiveBranch] = useState<string | null>(null);

  const showCarousel = !showBaseImg2;
  const activeHeart = activeBranch === "heart";
  const activeBrain = activeBranch === "brain";
  const activeBlood = activeBranch === "blood";

  const flickityOptions = {
    initialIndex: 0,
    wrapAround: true,
    autoPlay: false,
    prevNextButtons: true,
    pageDots: true,
    contain: true,
    cellAlign: "center",
    on: {
      ready: function (this: Flickity) {
        setTimeout(() => {
          this.resize();
        }, 100);
      },
    },
  };

  const toggleBaseImg = (e: React.PointerEvent) => {
    e.stopPropagation();
    setShowBaseImg2((prev) => !prev);
    setActiveBranch(null);
  };

  const toggleHeart = (e: React.PointerEvent) => {
    e.stopPropagation();
    setActiveBranch((prev) => (prev === "heart" ? null : "heart"));
    setShowBaseImg2(true);
  };

  const toggleBrain = (e: React.PointerEvent) => {
    e.stopPropagation();
    setActiveBranch((prev) => (prev === "brain" ? null : "brain"));
    setShowBaseImg2(true);
  };

  const toggleBlood = (e: React.PointerEvent) => {
    e.stopPropagation();
    setActiveBranch((prev) => (prev === "blood" ? null : "blood"));
    setShowBaseImg2(true);
  };

  const ResultWrapper = ({ children }: { children: ReactNode }) => (
    <S.ResultImgWrapper>
      <S.ResultContent>
        <S.ResultDescriptionOuter>{children}</S.ResultDescriptionOuter>
      </S.ResultContent>
    </S.ResultImgWrapper>
  );

  return (
    <ModuleContainer $isHomePage={isHomePage}>
      <InnerNav navItems={oralSystemicNavItems} />
      <S.Content>
        {isHomePage ? (
          <>
            <ModuleTitle title={"The Oral-Systemic Link"} />
            <BulletList items={["Overall health starts in your mouth."]} />

            <S.OralSystemicImgWrapperOuter>
              <S.ImagesWrapperInner
                showResults={
                  !showCarousel && (activeHeart || activeBrain || activeBlood)
                }
              >
                <S.BaseImg
                  src={showBaseImg2 ? BaseImg2 : OralSystemicImgFull}
                  onPointerDown={toggleBaseImg}
                />

                {showBaseImg2 && (
                  <>
                    <S.Branches src={Branches} />

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
                    className={"carousel"}
                    elementType={"div"}
                    options={flickityOptions}
                    disableImagesLoaded={true}
                    static={false}
                  >
                    {/* Slide 1 */}
                    <S.CarouselSlide>
                      <S.SlideContent>
                        <S.SlideNumber>
                          6<S.SlideOrdinal>th</S.SlideOrdinal>
                        </S.SlideNumber>
                        <S.SlideTextContent>
                          <S.SlideTitle
                            $fontSize="clamp(2.4rem, 3.8vw, 2.8rem)"
                            $paddingRight="0.7rem"
                          >
                            Periodontitis is the sixth-most common global health
                            condition.
                          </S.SlideTitle>
                          <S.SlideCitation $paddingLeft="1.2rem">
                            *Journal of Clinical Periodontology<sup>1</sup>
                          </S.SlideCitation>
                        </S.SlideTextContent>
                      </S.SlideContent>
                    </S.CarouselSlide>

                    {/* Slide 2 */}

                    <S.CarouselSlide>
                      <S.SlideContent>
                        <S.SlideNumber $letterSpacing="-12px">
                          57
                          <S.SlideOrdinal
                            $marginLeft="-0.8rem"
                            $fontSize="8.8rem"
                            $vertAlignBottom
                            $topOffset="6px"
                          >
                            +
                          </S.SlideOrdinal>
                        </S.SlideNumber>
                        <S.SlideTextContent>
                          <S.SlideTitle
                            $fontSize="clamp(2.2rem, 3.4vw, 2.6rem)"
                            $paddingLeft="0.8rem"
                          >
                            Research shows no
                            fewer&nbsp;than&nbsp;57&nbsp;conditions linked to
                            periodontal disease.
                          </S.SlideTitle>
                          <S.SlideCitation
                            $paddingTop="1.2rem"
                            $paddingLeft="0.8rem"
                          >
                            *Journal of Clinical Periodontology<sup>2</sup>
                          </S.SlideCitation>
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
                          <S.SlideTitle
                            $fontSize="clamp(28px, 3.1vw, 2.4rem)"
                            $paddingLeft="0.4rem"
                            $paddingRight="2.2rem"
                          >
                            The link between PD's inflammatory response
                            and&nbsp;systemic&nbsp;health&nbsp;issues has been
                            studied in depth for over a half a century.
                          </S.SlideTitle>
                          {/* <S.SlideCitation $paddingLeft="0.4rem" $paddingTop="1.2rem">*International Journal of Dentistry<sup>3</sup></S.SlideCitation> */}
                        </S.SlideTextContent>
                      </S.SlideContent>
                    </S.CarouselSlide>
                  </Flickity>
                </S.CarouselWrapper>
              ) : (
                <>
                  {activeHeart && (
                    <ResultWrapper>
                      <S.ResultDescriptionInner>
                        <S.ResultTitle $paddingTop="2.4rem">
                          Periodontitis Linked to CVD
                        </S.ResultTitle>
                        <S.ResultParagraph
                          $paddingTop="0.25rem"
                          $paddingRight="6.4rem"
                        >
                          Recent publications show convincing evidence of
                          significant association between periodontitis and CVD.
                        </S.ResultParagraph>
                        <S.ResultParagraph $paddingRight="5.6rem">
                          CVD is the leading cause of mortality worldwide.
                        </S.ResultParagraph>
                      </S.ResultDescriptionInner>
                      <S.SlideCitation $paddingLeft="0">
                        *World Heart Federation<sup>1</sup>
                      </S.SlideCitation>
                    </ResultWrapper>
                  )}

                  {activeBrain && (
                    <ResultWrapper>
                      <S.ResultDescriptionInner>
                        <S.ResultTitle
                          $fontSize="clamp(6rem, 10vw, 8rem)"
                          $lineHeight="0.8"
                          $letterSpacing="-4px"
                          $marginBottom="0"
                          $paddingTop="2rem"
                        >
                          22<S.SlideOrdinal>%</S.SlideOrdinal>
                        </S.ResultTitle>
                        <S.ResultTitle
                          $fontSize="clamp(3.5rem, 5.8vw, 4.4rem)"
                          $letterSpacing="-3px"
                          $lineHeight="0.85"
                        >
                          Higher
                        </S.ResultTitle>
                        <S.ResultParagraph
                          $paddingRight="7rem"
                          $paddingTop="0.4rem"
                        >
                          The hazard ratios for dementia is 22% higher in
                          patients with severe&nbsp;periodontal inflammation.
                        </S.ResultParagraph>
                      </S.ResultDescriptionInner>
                      <S.SlideCitation $paddingLeft="0">
                        *Journal of Alzheimer's Disease<sup>4</sup>
                      </S.SlideCitation>
                    </ResultWrapper>
                  )}

                  {activeBlood && (
                    <ResultWrapper>
                      <S.ResultDescriptionInner>
                        <S.ResultTitle
                          $fontSize="clamp(24px, 4.2vw, 3rem)"
                          $lineHeight="0.95"
                          $marginBottom="1.2rem"
                          $paddingTop="4.2rem"
                        >
                          Diabetic
                          <br />
                          Complications
                        </S.ResultTitle>
                        <S.ResultParagraph $paddingTop="0">
                          Diabetes affects one
                          <br /> in 10 adults<sup>5</sup>. Periodontitis
                          increases the risk for diabetic complications
                          <sup>6</sup>.
                        </S.ResultParagraph>
                      </S.ResultDescriptionInner>

                      <S.SlideCitation $paddingLeft="0">
                        *National Center for
                        <br />
                        &nbsp;Biotechnology Information
                      </S.SlideCitation>
                    </ResultWrapper>
                  )}
                </>
              )}
            </S.OralSystemicImgWrapperOuter>

            <BottomText
              lines={[
                `Sharing this information with patients, in a way that encourages good oral care
            `,
                "can help solidify ritualistic habits and better overall health.",
              ]}
            />
          </>
        ) : (
          <Outlet />
        )}
      </S.Content>
    </ModuleContainer>
  );
}

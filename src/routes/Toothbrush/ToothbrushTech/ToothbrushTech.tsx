import React, { useState } from 'react';
import * as S from './ToothbrushTech.styles';

import Circle1 from "../../../assets/toothbrush/tech/circle-1.webp";
import Circle1Active from "../../../assets/toothbrush/tech/circle-1-active.webp";
import Circle2 from "../../../assets/toothbrush/tech/circle-2.webp";
import Circle2Active from "../../../assets/toothbrush/tech/circle-2-active.webp";
import Circle3 from "../../../assets/toothbrush/tech/circle-3.webp";
import Circle3Active from "../../../assets/toothbrush/tech/circle-3-active.webp";
import Circle4 from "../../../assets/toothbrush/tech/circle-4.webp";
import Circle4Active from "../../../assets/toothbrush/tech/circle-4-active.webp";

import QuadGripDisplay from './display/QuadGrip/QuadGrip';
import TaperedBristles from './display/TaperedBristles/TaperedBristles';
import DomeTrim from "./display/DomeTrim/DomeTrim";
import TexturedBristles from "./display/TexturedBristles/TexturedBristles";

import playSound from "../../../utils/playSound";
import tapTop from "../../../assets/sounds/taptop.mp3";

export default function ToothbrushTech() {

  const [activeIcon,setActiveIcon] = useState<number | null>(1);

  const handleIconTouch = (iconNumber: number) => {
      playSound(tapTop);
      if (activeIcon !== iconNumber) {
        setActiveIcon(iconNumber);
    }
  };

  const renderActiveDisplay = () => {
    switch(activeIcon) {
      case 1: 
        return <QuadGripDisplay/>
      case 2: 
        return <DomeTrim/>
      case 3: 
        return <TaperedBristles/>
      case 4: 
        return <TexturedBristles/>
    }
  }


  return (
    <S.ContainerOuter>
      <S.HeaderLeft>
        <S.SideIcon 
          onPointerDown={() => handleIconTouch(1)}  
        >
          <img 
            src={activeIcon === 1 ? Circle1Active : Circle1} 
            alt="45 degree angle" 
          />
        </S.SideIcon>
        <S.SideIcon 
          onPointerDown={() => handleIconTouch(2)} 
          
        >
          <img 
            src={activeIcon === 2 ? Circle2Active : Circle2} 
            alt="Feature" 
          />
        </S.SideIcon>
        <S.SideIcon 
          onPointerDown={() => handleIconTouch(3)} 
        >
          <img 
            src={activeIcon === 3 ? Circle3Active : Circle3} 
            alt="Technology" 
          />
        </S.SideIcon>
        <S.SideIcon 
          onPointerDown={() => handleIconTouch(4)} 
         
        >
          <img 
            src={activeIcon === 4 ? Circle4Active : Circle4} 
            alt="Technology" 
          />
        </S.SideIcon>
      </S.HeaderLeft>
      
      <S.TechContainer>
        <S.MainContent>
          {renderActiveDisplay()}
        </S.MainContent>
      </S.TechContainer>
    </S.ContainerOuter>
  );
}
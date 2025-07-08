import * as S from "./Tech.styles"

import Circle1 from "../../../assets/btc/tech/circle-1.webp";
import Circle1Active from "../../../assets/btc/tech/circle-1-active.webp";
import Circle2 from "../../../assets/btc/tech/circle-2.webp";
import Circle2Active from "../../../assets/btc/tech/circle-2-active.webp";
import Circle3 from "../../../assets/btc/tech/circle-3.webp";
import Circle3Active from "../../../assets/btc/tech/circle-3-active.webp";
import Circle4 from "../../../assets/btc/tech/circle-4.webp";
import Circle4Active from "../../../assets/btc/tech/circle-4-active.webp";
import { useState } from "react";

import ProxaTriangular from "./display/ProxaTriangular/ProxaTriangular";
import SoftPicks from "./display/SoftPicks/SoftPicks";
import DualDefence from "./display/DualDefence/DualDefence";
import DualTechnique from "./display/DualTechnique/DualTechnique";


export default function BtcTech() {

  const [activeIcon,setActiveIcon] = useState<number | null>(1);

  const handleIconTouch = (iconNumber: number) => {
      if (activeIcon !== iconNumber) {
        setActiveIcon(iconNumber);
    }
  };

  
  const renderActiveDisplay = () => {
    switch(activeIcon) {
      case 1: 
        return <ProxaTriangular/>
      case 2: 
        return <SoftPicks/>
      case 3: 
        return <DualDefence/>
      case 4: 
        return <DualTechnique/>
    }
  }
  
  
  return (
    <S.ContainerOuter>
      <S.HeaderLeft>
        <S.SideIcon 
        >
          <img 
            onPointerDown={() => handleIconTouch(1)}  
            src={activeIcon === 1 ? Circle1Active : Circle1} 
            alt="45 degree angle" 
          />
        </S.SideIcon>
        <S.SideIcon 
          
        >
          <img 
            onPointerDown={() => handleIconTouch(2)} 
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
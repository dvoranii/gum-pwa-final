import React from 'react';
import * as S from './SoftPicks.styled';

import BrushHand from "../../../../../assets/btc/tech/SoftPicks.webp";
import DiagramCrossSection from "../../../../../assets/btc/tech/gums-teeth-diagram.webp";

export default function ProxaTriangular() {
  return (
    <S.ContentWrapper>
    <S.HeaderRight>
        <S.MainTitle>
        GUM Soft Picks<S.Trademark>®</S.Trademark><br/>
        Advanced
        </S.MainTitle>
        <S.Description>
        <li>With a more comfortable rubber grib and longer curved handle for improved maneuverability</li>
        </S.Description>
        
        <S.DiagramSection>
        <S.CrossSectionWrapper>
            <S.CrossSectionDiagram>
            <img src={DiagramCrossSection} alt="Cross section front" />
            </S.CrossSectionDiagram>
        </S.CrossSectionWrapper>
        </S.DiagramSection>
    </S.HeaderRight>
    
    <S.HandImage>
        <img src={BrushHand} alt="Hand holding toothbrush" />
    </S.HandImage>
    </S.ContentWrapper>
  );
}
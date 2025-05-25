import React from 'react';
import * as S from './QuadGrip.styles';

import BrushHand from "../../../../../assets/toothbrush/tech/hand-brush.webp";
import DiagramCrossSection from "../../../../../assets/toothbrush/tech/diagram-cross-section.webp";

export default function QuadGripDisplay() {
  return (
    <S.ContentWrapper>
    <S.HeaderRight>
        <S.MainTitle>
        GUM Quad-Grip<S.Trademark>®</S.Trademark>
        <br />
        Thumb Pad
        </S.MainTitle>
        <S.Description>
        <li>Designed to guide the hand to hold the brush at 45° in all quadrants so the bristles are properly positioned at the sulcus for optimal subgingival cleaning.</li>
        </S.Description>
        
        <S.DiagramSection>
        <S.CrossSectionWrapper>
            <S.CrossSectionDiagram>
            <img src={DiagramCrossSection} alt="Cross section front" />
            </S.CrossSectionDiagram>
        </S.CrossSectionWrapper>
        </S.DiagramSection>
        
        <S.BenefitsList>
        <S.BenefitItem>Promotes the modified Bass technique.</S.BenefitItem>
        <S.BenefitItem>Available on all Technique® toothbrushes.</S.BenefitItem>
        </S.BenefitsList>
    </S.HeaderRight>
    
    <S.HandImage>
        <img src={BrushHand} alt="Hand holding toothbrush" />
    </S.HandImage>
    </S.ContentWrapper>
  );
}
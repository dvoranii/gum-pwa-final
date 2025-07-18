import React from 'react';
import * as S from './ProxaTriangular.styled';

import BrushHand from "../../../../../assets/btc/tech/ProxabrushGraphic.webp";
import DiagramCrossSection from "../../../../../assets/btc/tech/diagram-cross-section.webp";

export default function ProxaTriangular() {
  return (
    <S.ContentWrapper>
    <S.HeaderRight>
        <S.MainTitle>
        GUM Proxabrush<S.Trademark>®</S.Trademark>
        </S.MainTitle>
        <S.Description>
        <li>Triangular bristles remove up to 25% more plaque than conventional round bristles<sup>8</sup>.</li>
        </S.Description>
        
        <S.DiagramSection>
        <S.CrossSectionWrapper>
            <S.CrossSectionDiagram>
            <img src={DiagramCrossSection} alt="Cross section front" />
            </S.CrossSectionDiagram>
        </S.CrossSectionWrapper>
        </S.DiagramSection>
        
        <S.BenefitsList>
        <S.BenefitItem>Nylon coated wire tips helps prevent galvanic shock.</S.BenefitItem>
        <S.BenefitItem>Bendable neck with flexible rubberized handle.</S.BenefitItem>
        </S.BenefitsList>
    </S.HeaderRight>
    
    <S.HandImage>
        <img src={BrushHand} alt="Hand holding toothbrush" />
    </S.HandImage>
    </S.ContentWrapper>
  );
}